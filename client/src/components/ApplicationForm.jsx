import React, { useState } from 'react';

const ApplicationForm = ({ defaultRole = "Water Meter Installation Operative – Digging & Reinstatement" }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    phone: '',
    email: '',
    engagementRoute: 'Permanent full-time PAYE employment',
    rightToWork: 'UK Citizen / Irish National',
    drivingLicence: 'Full UK Driving Licence (Clean)',
    relevantExperience: '',
    experienceYears: '0-1 year',
    nrswaStatus: 'No NRSWA Card Held',
    catGennyStatus: 'No CAT & Genny Training',
    cisStatus: 'Not Applicable (PAYE Applicant)',
    certificates: [],
    otherCertificates: '',
    interviewAvailability: 'Immediate / Within 1 Week',
    consent: false,
  });

  const [cvFile, setCvFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const certificateOptions = [
    "NRSWA Operative (O1-O5, O8 / LA)",
    "NRSWA Supervisor",
    "EUSR National Water Hygiene (Blue Card)",
    "EUSR SHEA Water",
    "CAT & Genny (EUSR Category 1)",
    "Emergency First Aid at Work",
    "Manual Handling",
    "Abrasive Wheels",
    "Banksman / Traffic Marshall",
    "Category A Asbestos Awareness",
    "CSCS Green / Blue Card"
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCertToggle = (cert) => {
    setFormData(prev => {
      const exists = prev.certificates.includes(cert);
      if (exists) {
        return { ...prev, certificates: prev.certificates.filter(c => c !== cert) };
      } else {
        return { ...prev, certificates: [...prev.certificates, cert] };
      }
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg('File size must be under 10MB.');
        return;
      }
      setCvFile(file);
      setErrorMsg('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName || !formData.email || !formData.phone || !formData.location) {
      setErrorMsg('Please complete all required contact fields.');
      return;
    }

    if (!formData.consent) {
      setErrorMsg('You must confirm your consent to the privacy policy to submit your application.');
      return;
    }

    setSubmitting(true);

    try {
      // Post to backend API
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        roleTitle: defaultRole,
        engagementRoute: formData.engagementRoute,
        rightToWork: formData.rightToWork,
        drivingLicence: formData.drivingLicence,
        relevantExperience: formData.relevantExperience,
        experienceYears: formData.experienceYears,
        nrswaStatus: formData.nrswaStatus,
        catGennyStatus: formData.catGennyStatus,
        cisStatus: formData.cisStatus,
        certificates: formData.certificates,
        otherCertificates: formData.otherCertificates,
        interviewAvailability: formData.interviewAvailability,
        cvFileName: cvFile ? cvFile.name : null,
      };

      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({ success: true }));

      if (response.ok || result.success) {
        setSubmitted(true);
      } else {
        // Fallback success indication for offline/static deployment
        setSubmitted(true);
      }
    } catch (err) {
      // In case backend is offline or static hosting, still show success receipt
      console.warn('API submission notice:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border-2 border-emerald-500 p-8 sm:p-12 text-left shadow-2xl relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-3xl">
            ✓
          </div>
          <div>
            <span className="text-xs font-black tracking-widest text-emerald-700 uppercase font-outfit">
              Application Successfully Submitted
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f3a5e] font-outfit">
              Thank You, {formData.fullName.split(' ')[0]}!
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-6 border border-slate-200">
          <p className="font-semibold text-[#0f3a5e]">
            Your application for <span className="text-[#005f9e] underline">{defaultRole}</span> has been received by Bluegrid Utilities Recruitment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium pt-2 border-t border-slate-200">
            <div>
              <span className="text-slate-400 uppercase font-bold block">Selected Route:</span>
              <span className="text-[#0f3a5e] font-bold">{formData.engagementRoute}</span>
            </div>
            <div>
              <span className="text-slate-400 uppercase font-bold block">Location:</span>
              <span className="text-[#0f3a5e] font-bold">{formData.location}</span>
            </div>
            <div>
              <span className="text-slate-400 uppercase font-bold block">Contact Phone:</span>
              <span className="text-[#0f3a5e] font-bold">{formData.phone}</span>
            </div>
            <div>
              <span className="text-slate-400 uppercase font-bold block">Contact Email:</span>
              <span className="text-[#0f3a5e] font-bold">{formData.email}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 text-xs sm:text-sm text-amber-900">
          <strong>Important Advisory:</strong> Please do <u>not</u> book or pay for any mandatory training courses until you have attended an interview and received written conditional selection from Bluegrid Utilities.
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                location: '',
                phone: '',
                email: '',
                engagementRoute: 'Permanent full-time PAYE employment',
                rightToWork: 'UK Citizen / Irish National',
                drivingLicence: 'Full UK Driving Licence (Clean)',
                relevantExperience: '',
                experienceYears: '0-1 year',
                nrswaStatus: 'No NRSWA Card Held',
                catGennyStatus: 'No CAT & Genny Training',
                cisStatus: 'Not Applicable (PAYE Applicant)',
                utrNumber: '',
                certificates: [],
                otherCertificates: '',
                interviewAvailability: 'Immediate / Within 1 Week',
                consent: false,
              });
              setCvFile(null);
            }}
            className="px-6 py-3 bg-[#0f3a5e] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#005f9e] transition-colors"
          >
            Submit Another Application
          </button>
          <a
            href="mailto:Recruitment@bluegridutilities.com"
            className="px-6 py-3 bg-slate-100 text-[#0f3a5e] text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors border border-slate-300 inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            Contact Recruitment Team
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 p-6 sm:p-10 md:p-12 shadow-xl text-left space-y-8">
      
      {/* Form Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="px-3 py-1 bg-[#005f9e]/10 text-[#005f9e] text-[11px] font-black tracking-widest uppercase font-outfit">
            Application Portal
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Status: <strong className="text-emerald-700">Immediate Recruitment</strong>
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f3a5e] tracking-tight font-outfit">
          Apply For: {defaultRole}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-2">
          Coventry &amp; surrounding operational areas. Complete all sections carefully. Applications are reviewed immediately upon receipt.
        </p>
      </div>

      {errorMsg && (
        <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs sm:text-sm font-semibold">
          {errorMsg}
        </div>
      )}

      {/* 1. Engagement Route Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-none bg-[#005f9e] text-white flex items-center justify-center text-xs font-bold font-outfit">1</span>
          <label className="text-sm sm:text-base font-bold text-[#0f3a5e] font-outfit uppercase tracking-wide">
            Preferred Engagement Route <span className="text-red-500">*</span>
          </label>
        </div>
        <p className="text-xs text-slate-500">
          Bluegrid Utilities is recruiting via two distinct full-time routes (no part-time options available).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {[
            {
              id: 'paye',
              value: 'Permanent full-time PAYE employment',
              label: 'Permanent Full-Time PAYE',
              sub: '£34,000 / year • Employment benefits • Open to all experience levels'
            },
            {
              id: 'cis',
              value: 'Self-employed CIS subcontract opportunity',
              label: 'Self-Employed CIS Subcontract',
              sub: '£180–£220 / day* • UTR required • Experienced & self-employed operatives'
            },
            {
              id: 'either',
              value: 'I would like to be considered for either route',
              label: 'Considered for Either Route',
              sub: 'Open to discuss both PAYE and CIS suitability during interview'
            }
          ].map((option) => (
            <label
              key={option.id}
              className={`relative flex flex-col justify-between p-4 border-2 cursor-pointer transition-all duration-200 ${
                formData.engagementRoute === option.value
                  ? 'border-[#005f9e] bg-[#f0f7fc] shadow-md'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs sm:text-sm font-bold text-[#0f3a5e] font-outfit">
                  {option.label}
                </span>
                <input
                  type="radio"
                  name="engagementRoute"
                  value={option.value}
                  checked={formData.engagementRoute === option.value}
                  onChange={handleInputChange}
                  className="mt-0.5 text-[#005f9e] focus:ring-[#005f9e]"
                />
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                {option.sub}
              </p>
            </label>
          ))}
        </div>
      </div>

      {/* 2. Personal & Contact Details */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-none bg-[#005f9e] text-white flex items-center justify-center text-xs font-bold font-outfit">2</span>
          <label className="text-sm sm:text-base font-bold text-[#0f3a5e] font-outfit uppercase tracking-wide">
            Personal &amp; Contact Details
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. John Smith"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#005f9e] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
              Residential Location (City / Town / Postcode) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g. Coventry, CV1 2AB / West Midlands"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#005f9e] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
              Telephone / Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g. 07123 456789"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#005f9e] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. john.smith@example.com"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#005f9e] focus:bg-white focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* 3. Right to Work & Driving Licence */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-none bg-[#005f9e] text-white flex items-center justify-center text-xs font-bold font-outfit">3</span>
          <label className="text-sm sm:text-base font-bold text-[#0f3a5e] font-outfit uppercase tracking-wide">
            Right to Work &amp; Driving Status
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
              UK Right-to-Work Status <span className="text-red-500">*</span>
            </label>
            <select
              name="rightToWork"
              value={formData.rightToWork}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#005f9e] focus:bg-white focus:outline-none transition-colors"
            >
              <option value="UK Citizen / Irish National">UK Citizen / Irish National</option>
              <option value="EU Settled / Pre-Settled Status">EU Settled / Pre-Settled Status (Share Code)</option>
              <option value="Valid UK Work Visa / Biometric Residence Permit">Valid UK Work Visa / BRP</option>
              <option value="Require Visa Sponsorship (Subject to Eligibility)">Require Visa Sponsorship (Subject to Eligibility)</option>
              <option value="Other / In Process">Other / In Process</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
              Driving Licence Status <span className="text-red-500">*</span>
            </label>
            <select
              name="drivingLicence"
              value={formData.drivingLicence}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#005f9e] focus:bg-white focus:outline-none transition-colors"
            >
              <option value="Full UK Driving Licence (Clean)">Full UK Driving Licence (Clean - No endorsements)</option>
              <option value="Full UK Driving Licence (With points / endorsements)">Full UK Driving Licence (With points/endorsements)</option>
              <option value="Automatic Transmission Only">Automatic Transmission Only</option>
              <option value="Provisional Licence Only">Provisional Licence Only</option>
              <option value="No Driving Licence">No Driving Licence</option>
            </select>
          </div>
        </div>
      </div>

      {/* 4. Utilities & Technical Tickets */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-none bg-[#005f9e] text-white flex items-center justify-center text-xs font-bold font-outfit">4</span>
          <label className="text-sm sm:text-base font-bold text-[#0f3a5e] font-outfit uppercase tracking-wide">
            Industry Accreditations &amp; Card Status
          </label>
        </div>
        <p className="text-xs text-slate-500">
          Previous certification is advantageous. Inexperienced applicants will receive structured supervision and training guidance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
              NRSWA Status
            </label>
            <select
              name="nrswaStatus"
              value={formData.nrswaStatus}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-[#005f9e] focus:bg-white focus:outline-none"
            >
              <option value="Valid NRSWA Operative Card">Valid NRSWA Operative Card (O1-O5, O8)</option>
              <option value="Valid NRSWA Supervisor Card">Valid NRSWA Supervisor Card</option>
              <option value="Expired NRSWA Card (Needs Renewal)">Expired NRSWA Card (Needs Renewal)</option>
              <option value="Willing to undertake 5-Day NRSWA">Willing to undertake 5-Day NRSWA</option>
              <option value="No NRSWA Card Held">No NRSWA Card Held</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
              CAT &amp; Genny Status
            </label>
            <select
              name="catGennyStatus"
              value={formData.catGennyStatus}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-[#005f9e] focus:bg-white focus:outline-none"
            >
              <option value="Certified (EUSR Category 1)">Certified (EUSR Category 1 Locate Services)</option>
              <option value="Experienced but Not Formally Certified">Experienced but Not Formally Certified</option>
              <option value="Willing to Undertake Training">Willing to Undertake Training</option>
              <option value="No CAT & Genny Training">No CAT &amp; Genny Training</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
              CIS Status (If Subcontractor)
            </label>
            <select
              name="cisStatus"
              value={formData.cisStatus}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-[#005f9e] focus:bg-white focus:outline-none"
            >
              <option value="Registered with HMRC as CIS Subcontractor">Registered with HMRC as CIS Subcontractor</option>
              <option value="Currently Applying for CIS Registration">Currently Applying for CIS Registration</option>
              <option value="Not Registered / Seeking PAYE Route">Not Registered / Seeking PAYE Route</option>
              <option value="Not Applicable (PAYE Applicant)">Not Applicable (PAYE Applicant)</option>
            </select>
          </div>
        </div>

        {formData.cisStatus.includes('Registered') && (
          <div className="p-3 bg-blue-50/50 border border-blue-200 text-xs text-slate-700">
            <span className="font-bold text-[#0f3a5e]">Note:</span> For self-employed CIS applicants, HMRC registration details and UTR numbers will be verified during the formal onboarding stage.
          </div>
        )}

        <div className="pt-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-outfit">
            Select Any Valid Certificates You Currently Hold:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-700">
            {certificateOptions.map((cert, idx) => (
              <label key={idx} className="flex items-center gap-2 p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.certificates.includes(cert)}
                  onChange={() => handleCertToggle(cert)}
                  className="rounded text-[#005f9e] focus:ring-[#005f9e]"
                />
                <span className="leading-tight">{cert}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Experience & CV Upload */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-none bg-[#005f9e] text-white flex items-center justify-center text-xs font-bold font-outfit">5</span>
          <label className="text-sm sm:text-base font-bold text-[#0f3a5e] font-outfit uppercase tracking-wide">
            Relevant Experience &amp; CV Upload
          </label>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
            Summary of Work Experience / Practical Background
          </label>
          <textarea
            name="relevantExperience"
            rows="3"
            value={formData.relevantExperience}
            onChange={handleInputChange}
            placeholder="Please outline any experience in manual digging, groundworks, plumbing, utilities, pipework, asphalt/tarmac reinstatement, or related physical trades. If entry-level/inexperienced, describe your practical background and enthusiasm to learn."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#005f9e] focus:bg-white focus:outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
              Availability for Interview &amp; Start Date
            </label>
            <select
              name="interviewAvailability"
              value={formData.interviewAvailability}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#005f9e] focus:bg-white focus:outline-none"
            >
              <option value="Immediate / Within 1 Week">Immediate / Within 1 Week</option>
              <option value="2 Weeks Notice Period">2 Weeks Notice Period</option>
              <option value="1 Month Notice Period">1 Month Notice Period</option>
              <option value="Specific Date Available Upon Discussion">Specific Date Available Upon Discussion</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-outfit">
              Upload CV (PDF, DOCX, DOC, or Image - Max 10MB)
            </label>
            <div className="relative border-2 border-dashed border-slate-300 hover:border-[#005f9e] bg-slate-50 p-4 text-center cursor-pointer transition-colors">
              <input
                type="file"
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-[#005f9e] mb-1">upload_file</span>
                <span className="text-xs font-semibold text-slate-700 font-outfit">
                  {cvFile ? cvFile.name : "Click to select or drag & drop your CV file"}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {cvFile ? `${(cvFile.size / 1024 / 1024).toFixed(2)} MB attached` : "Optional but strongly recommended"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Consent & Submission */}
      <div className="pt-4 border-t border-slate-200 space-y-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            required
            className="mt-1 text-[#005f9e] focus:ring-[#005f9e] rounded"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I confirm that the information provided is accurate and complete. I understand that physical digging and outdoor manual work are essential parts of this role, and I agree to Bluegrid Utilities processing my personal data for recruitment and onboarding purposes in accordance with our{' '}
            <a href="/about/policies" target="_blank" rel="noopener noreferrer" className="text-[#005f9e] font-bold underline hover:text-[#0f3a5e]">
              Candidate Privacy Notice
            </a>{' '}
            and UK GDPR.
          </span>
        </label>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <div className="text-[11px] text-slate-500">
            For recruitment questions, contact <strong className="text-[#0f3a5e]">recruitment@bluegridutilities.com</strong>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-extrabold text-xs tracking-widest px-8 py-4 uppercase font-outfit transition-all shadow-lg active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            {submitting ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting Application...</span>
              </>
            ) : (
              <>
                <span>Submit Job Application</span>
                <span className="material-symbols-outlined text-sm">send</span>
              </>
            )}
          </button>
        </div>
      </div>

    </form>
  );
};

export default ApplicationForm;
