import { config } from '../config/index.js';
import { clean, isEmail, isPhone, isTrue, newReference } from '../utils/text.js';
import { sendMail, buildContactMessage } from '../services/email.service.js';

export const submitContactEnquiry = async (req, res, next) => {
  try {
    const body = req.body || {};

    // Honeypot: silently accept and drop.
    if (clean(body.website, 200)) {
      return res.status(201).json({ success: true, message: 'Enquiry received.', data: { referenceNumber: newReference('ENQ') } });
    }

    const enquiry = {
      name: clean(body.name, 120),
      email: clean(body.email, 254).toLowerCase(),
      phone: clean(body.phone, 30),
      company: clean(body.company, 150),
      enquiryType: clean(body.enquiryType, 80),
      service: clean(body.service, 120),
      subject: clean(body.subject, 200),
      message: clean(body.message, 5000, { multiline: true }),
    };

    const fields = {};
    if (enquiry.name.length < 2) fields.name = 'Enter your name.';
    if (!enquiry.email) fields.email = 'Enter your email address.';
    else if (!isEmail(enquiry.email)) fields.email = 'Enter a valid email address.';
    if (enquiry.phone && !isPhone(enquiry.phone)) fields.phone = 'Enter a valid phone number or leave it blank.';
    if (!enquiry.subject) fields.subject = 'Enter a subject.';
    if (enquiry.message.length < 10) fields.message = 'Enter a message of at least 10 characters.';
    if (!isTrue(body.privacyConsent)) fields.privacyConsent = 'Confirm that you have read the privacy notice.';

    if (Object.keys(fields).length) {
      return res.status(400).json({
        success: false,
        error: { message: 'Some of the information provided is missing or invalid.', fields },
      });
    }

    enquiry.id = newReference('ENQ');
    const isRecruitment = /recruit/i.test(enquiry.enquiryType);
    const to = isRecruitment ? config.recruitmentEmail : config.enquiriesEmail;

    let delivery;
    try {
      delivery = await sendMail({ to, replyTo: enquiry.email, fallbackAddress: to, ...buildContactMessage(enquiry) });
    } catch (err) {
      return res.status(err.statusCode || 502).json({ success: false, error: { message: err.message } });
    }

    const data = { referenceNumber: enquiry.id, receivedAt: new Date().toISOString() };
    if (config.nodeEnv !== 'production') {
      data.delivery = { to, mode: delivery.mode, previewUrl: delivery.previewUrl, captured: delivery.captured };
      if (delivery.previewUrl) data.previewUrl = delivery.previewUrl;
    }
    return res.status(201).json({ success: true, message: 'Your enquiry has been sent.', data });
  } catch (error) {
    return next(error);
  }
};
