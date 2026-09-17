import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = process.env.RECRUITMENT_EMAIL || 'ajmalpa308@gmail.com';

// Configure transporter
const getTransporter = async () => {
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'false' ? false : true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Fallback for development/testing: creates an Ethereal test account or local logger
  try {
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  } catch (err) {
    console.warn('[Email Service] Could not generate test ethereal account:', err.message);
    return null;
  }
};

export const sendApplicationEmail = async (application) => {
  const {
    id,
    fullName,
    email,
    phone,
    location,
    roleTitle,
    engagementRoute,
    rightToWork,
    drivingLicence,
    nrswaStatus,
    catGennyStatus,
    cisStatus,
    utrNumber,
    certificates,
    otherCertificates,
    relevantExperience,
    interviewAvailability,
    cvFileName,
    submittedAt
  } = application;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #1e293b; }
        .container { max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-top: 5px solid #005f9e; }
        .header { background: #0f3a5e; color: #ffffff; padding: 25px 30px; }
        .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
        .header p { margin: 5px 0 0 0; font-size: 13px; color: #93c5fd; }
        .content { padding: 30px; }
        .badge { display: inline-block; padding: 4px 10px; background: #e0f2fe; color: #0369a1; font-weight: bold; font-size: 11px; text-transform: uppercase; margin-bottom: 15px; }
        .section-title { font-size: 13px; font-weight: 800; color: #0f3a5e; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px; margin: 20px 0 12px 0; }
        .field-row { display: flex; margin-bottom: 8px; font-size: 13px; }
        .field-label { width: 180px; font-weight: 600; color: #64748b; }
        .field-value { flex: 1; font-weight: 600; color: #0f172a; }
        .highlight-box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; margin: 15px 0; }
        .footer { background: #f1f5f9; padding: 20px 30px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
        .certs-list { margin: 0; padding-left: 20px; font-size: 13px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Job Application Received</h1>
          <p>Bluegrid Utilities Recruitment Portal • Ref: ${id}</p>
        </div>
        
        <div class="content">
          <div class="badge">Application Ref: ${id}</div>
          
          <div class="highlight-box">
            <div class="field-row">
              <span class="field-label">Position Applied:</span>
              <span class="field-value" style="color: #005f9e; font-size: 14px;">${roleTitle || 'Water Meter Installation Operative'}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Preferred Route:</span>
              <span class="field-value">${engagementRoute || 'Not specified'}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Submitted On:</span>
              <span class="field-value">${new Date(submittedAt || Date.now()).toLocaleString('en-GB')}</span>
            </div>
          </div>

          <div class="section-title">1. Candidate Contact Information</div>
          <div class="field-row">
            <span class="field-label">Full Name:</span>
            <span class="field-value">${fullName}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Email Address:</span>
            <span class="field-value"><a href="mailto:${email}">${email}</a></span>
          </div>
          <div class="field-row">
            <span class="field-label">Telephone:</span>
            <span class="field-value"><a href="tel:${phone}">${phone || 'Not provided'}</a></span>
          </div>
          <div class="field-row">
            <span class="field-label">Residential Location:</span>
            <span class="field-value">${location || 'Not provided'}</span>
          </div>

          <div class="section-title">2. Right to Work & Driving Status</div>
          <div class="field-row">
            <span class="field-label">UK Right-to-Work:</span>
            <span class="field-value">${rightToWork || 'Not provided'}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Driving Licence:</span>
            <span class="field-value">${drivingLicence || 'Not provided'}</span>
          </div>

          <div class="section-title">3. Accreditations & Subcontract Status</div>
          <div class="field-row">
            <span class="field-label">NRSWA Status:</span>
            <span class="field-value">${nrswaStatus || 'None'}</span>
          </div>
          <div class="field-row">
            <span class="field-label">CAT & Genny Status:</span>
            <span class="field-value">${catGennyStatus || 'None'}</span>
          </div>
          <div class="field-row">
            <span class="field-label">CIS / UTR Status:</span>
            <span class="field-value">${cisStatus || 'Not applicable'}${utrNumber ? ` (UTR: ${utrNumber})` : ''}</span>
          </div>

          <div class="section-title">4. Certificates Held</div>
          ${certificates && certificates.length > 0 ? `
            <ul class="certs-list">
              ${certificates.map(c => `<li>${c}</li>`).join('')}
            </ul>
          ` : '<p style="font-size: 13px; color: #64748b; margin: 0;">No prior certificates ticked.</p>'}
          ${otherCertificates ? `<p style="font-size: 12px; margin-top: 5px;"><strong>Other:</strong> ${otherCertificates}</p>` : ''}

          <div class="section-title">5. Practical Experience & Availability</div>
          <div class="highlight-box" style="margin-top: 8px;">
            <p style="margin: 0; font-size: 13px; line-height: 1.5; white-space: pre-wrap;">${relevantExperience || 'No experience summary provided.'}</p>
          </div>
          <div class="field-row">
            <span class="field-label">Interview Availability:</span>
            <span class="field-value">${interviewAvailability || 'Immediate'}</span>
          </div>
          <div class="field-row">
            <span class="field-label">Uploaded CV:</span>
            <span class="field-value">${cvFileName ? `📎 ${cvFileName}` : 'No CV attached'}</span>
          </div>
        </div>

        <div class="footer">
          This notification was automatically sent from the Bluegrid Utilities careers application form.<br>
          Recipient: ${RECIPIENT_EMAIL}
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const transporter = await getTransporter();

    if (!transporter) {
      console.log(`[Email Service] Notification to ${RECIPIENT_EMAIL}:`, {
        applicationId: id,
        applicant: fullName,
        email,
        phone,
        roleTitle
      });
      return { success: true, mode: 'logged' };
    }

    const mailOptions = {
      from: `"Bluegrid Recruitment Portal" <${process.env.SMTP_FROM || 'recruitment@bluegridutilities.com'}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Job Application: ${fullName} – ${roleTitle || 'Water Meter Installation Operative'}`,
      text: `New Application Ref: ${id}\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nRoute: ${engagementRoute}\nLocation: ${location}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email Service] Message sent successfully to ${RECIPIENT_EMAIL}: %s`, info.messageId);
    
    // If using ethereal test account, log preview URL
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log('[Email Service] Preview URL for test email: %s', previewUrl);
    }

    return { success: true, messageId: info.messageId, previewUrl };
  } catch (error) {
    console.error('[Email Service] Error sending email to ' + RECIPIENT_EMAIL + ':', error.message);
    // Don't fail the whole user response if SMTP is unconfigured; return graceful status
    return { success: false, error: error.message };
  }
};
