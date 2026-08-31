export const submitContactEnquiry = (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Please provide required fields: name, email, and message.',
        },
      });
    }

    // In a production backend, this sends an email via nodemailer / saves to MongoDB / PostgreSQL
    const enquiry = {
      id: `ENQ-${Date.now()}`,
      name,
      email,
      phone: phone || null,
      subject: subject || 'General Enquiry',
      message,
      createdAt: new Date().toISOString(),
    };

    console.log('[Contact Controller] New enquiry received:', enquiry);

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out. A representative from Bluegrid Utilities will contact you shortly.',
      data: {
        referenceNumber: enquiry.id,
        receivedAt: enquiry.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};
