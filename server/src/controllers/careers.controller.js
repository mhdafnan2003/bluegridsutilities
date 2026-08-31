export const getVacancies = (req, res) => {
  const vacancies = [
    {
      id: "JOB-01",
      title: "Clean Water Meter Installation Operative",
      location: "Peterborough & Regional Hubs, UK",
      type: "Full-Time / Contract",
      experience: "1-2 Years in Utility / Plumbing",
      requirements: ["EUSR Clean Water Hygiene", "NRSWA Operative Card", "Full UK Driving Licence"]
    },
    {
      id: "JOB-02",
      title: "Utility Excavation & Reinstatement Squad Lead",
      location: "East of England, UK",
      type: "Full-Time",
      experience: "3+ Years Site Leadership",
      requirements: ["NRSWA Supervisor Card", "CSCS Gold/Blue Card", "Safe Digging Competence"]
    },
    {
      id: "JOB-03",
      title: "Regional Project Coordinator",
      location: "Stuart House, Peterborough",
      type: "Permanent",
      experience: "2+ Years Utilities Coordination",
      requirements: ["Digital Reporting Systems", "Client Framework Liaison", "HSE Compliance Tracking"]
    }
  ];

  res.status(200).json({
    success: true,
    count: vacancies.length,
    data: vacancies,
  });
};

export const submitApplication = (req, res, next) => {
  try {
    const { fullName, email, phone, roleId, roleTitle, cardsHeld, experienceSummary } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Full name and email are required for career applications.',
        },
      });
    }

    const application = {
      id: `APP-${Date.now()}`,
      fullName,
      email,
      phone: phone || null,
      roleId: roleId || 'GENERAL',
      roleTitle: roleTitle || 'General Operative',
      cardsHeld: cardsHeld || [],
      experienceSummary: experienceSummary || '',
      submittedAt: new Date().toISOString(),
      status: 'UNDER_REVIEW'
    };

    console.log('[Careers Controller] New application received:', application);

    return res.status(201).json({
      success: true,
      message: 'Application received successfully. Our onboarding and recruitment team will review your credentials.',
      data: {
        applicationId: application.id,
        status: application.status,
      }
    });
  } catch (error) {
    next(error);
  }
};
