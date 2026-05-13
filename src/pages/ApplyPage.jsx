import React, { useState } from 'react';
import MotionSection from '../components/MotionSection';

const SectionHeader = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
      {number}
    </div>
    <h2 className="text-xl md:text-2xl font-bold text-brand-dark tracking-tight">{title}</h2>
  </div>
);

const InputField = ({ label, type = 'text', placeholder, required, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-gray-700">
      {label}{required && <span className="text-brand-primary ml-1">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
      {...props}
    />
  </div>
);

const SelectField = ({ label, options, required, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-gray-700">
      {label}{required && <span className="text-brand-primary ml-1">*</span>}
    </label>
    <select
      required={required}
      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all text-gray-800 text-sm appearance-none"
      {...props}
    >
      <option value="">— Select —</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const RadioGroup = ({ label, name, options, required }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-gray-700">
      {label}{required && <span className="text-brand-primary ml-1">*</span>}
    </label>
    <div className="flex gap-4">
      {options.map((opt, i) => (
        <label key={i} className="flex items-center gap-2 cursor-pointer group">
          <input type="radio" name={name} value={opt} className="accent-brand-primary w-4 h-4" required={required && i === 0} />
          <span className="text-sm text-gray-700 group-hover:text-brand-primary transition-colors">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

const FileUpload = ({ label, hint }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    <label className="flex flex-col items-center justify-center gap-2 w-full px-4 py-6 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 hover:border-brand-primary hover:bg-brand-primary/5 transition-all cursor-pointer group">
      <svg className="w-7 h-7 text-gray-400 group-hover:text-brand-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
      <span className="text-sm text-gray-500 group-hover:text-brand-primary transition-colors">{hint || 'Click to upload or drag and drop'}</span>
      <input type="file" className="hidden" />
    </label>
  </div>
);

const ApplyPage = () => {
  const [certifications, setCertifications] = useState({
    CSCS: false, NRSWA: false, EUSR: false,
    SMETS: false, SHEA: false, 'First Aid': false, Other: false,
  });
  const [status, setStatus] = useState('idle');

  const toggleCert = (key) => setCertifications(prev => ({ ...prev, [key]: !prev[key] }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <MotionSection as="div" className="min-h-screen bg-[#f8fafc] py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Join Our Workforce
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">
            Workforce Application
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Complete the form below to register your interest. All allocations are subject to compliance and verification checks.
          </p>
        </div>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-6" onSubmit={handleSubmit}>

          {/* Section 1 - Personal Details */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <SectionHeader number="1" title="Personal Details" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="Full Name" placeholder="John Smith" required />
              <InputField label="Mobile Number" type="tel" placeholder="+44 7700 000000" required />
              <InputField label="Email Address" type="email" placeholder="john@example.com" required />
              <InputField label="Nationality" placeholder="e.g. British" required />
              <div className="md:col-span-2">
                <InputField label="Current Address" placeholder="Street address" required />
              </div>
              <InputField label="City" placeholder="e.g. Peterborough" required />
              <InputField label="Postcode" placeholder="e.g. PE1 5DD" required />
            </div>
          </div>

          {/* Section 2 - Right to Work */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <SectionHeader number="2" title="Right to Work & Visa Status" />
            <div className="space-y-6">
              <RadioGroup label="Do you currently have Right to Work in the UK?" name="rtw" options={['Yes', 'No']} required />
              <SelectField
                label="Current Visa Status"
                required
                options={[
                  'British Citizen', 'Skilled Worker', 'Graduate Visa',
                  'Student Visa', 'Dependant Visa', 'Settlement / ILR', 'Other'
                ]}
              />
              <InputField label="Share Code" placeholder="e.g. W1X-2Y3-Z4A (optional)" />
              <InputField label="Visa Expiry Date" type="date" placeholder="If applicable" />
            </div>
          </div>

          {/* Section 3 - Position */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <SectionHeader number="3" title="Position Applying For" />
            <SelectField
              label="Select Position"
              required
              options={[
                'Water Meter Technician', 'Smart Meter Technician', 'Field Operative',
                'Utility Operative', 'Project Coordinator', 'Assistant Project Manager',
                'Supervisor', 'Data Analyst', 'General Workforce Registration'
              ]}
            />
          </div>

          {/* Section 4 - Experience */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <SectionHeader number="4" title="Experience" />
            <div className="space-y-5">
              <RadioGroup label="Do you have previous utility or infrastructure experience?" name="experience" options={['Yes', 'No']} required />
              <InputField label="Previous Employer" placeholder="Company name" />
              <SelectField
                label="Years of Experience"
                options={['Less than 1 year', '1–2 years', '3–5 years', '5–10 years', '10+ years']}
              />
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Brief Description of Experience</label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your relevant experience..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all text-gray-800 placeholder-gray-400 text-sm resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section 5 - Driving & Training (full width) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <SectionHeader number="5" title="Driving & Training" />
            <div className="space-y-6">
              <RadioGroup label="Do you hold a Full UK Driving Licence?" name="driving" options={['Yes', 'No']} required />
              <RadioGroup label="Do you own a vehicle?" name="vehicle" options={['Yes', 'No']} required />

              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-gray-700">Certifications Held</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {Object.keys(certifications).map((cert) => (
                    <label
                      key={cert}
                      onClick={() => toggleCert(cert)}
                      className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border cursor-pointer transition-all text-sm font-medium select-none ${
                        certifications[cert]
                          ? 'bg-brand-primary/10 border-brand-primary text-brand-primary'
                          : 'bg-slate-50 border-slate-200 text-gray-600 hover:border-brand-primary/40'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${certifications[cert] ? 'bg-brand-primary border-brand-primary' : 'border-gray-400'}`}>
                        {certifications[cert] && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      {cert}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <FileUpload label="Upload CV" hint="PDF, DOC up to 10MB" />
                <FileUpload label="Driving Licence" hint="JPG, PNG, PDF" />
                <FileUpload label="Right to Work Doc" hint="JPG, PNG, PDF" />
              </div>
            </div>
          </div>

          {/* Section 6 - Availability */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <SectionHeader number="6" title="Availability" />
            <div className="space-y-5">
              <RadioGroup label="Are you willing to relocate?" name="relocate" options={['Yes', 'No']} required />
              <InputField label="Earliest Available Start Date" type="date" required />
              <SelectField
                label="Notice Period"
                required
                options={['Immediate', '1 Week', '2 Weeks', '1 Month', 'Other']}
              />
            </div>
          </div>

          {/* Section 7 - Declaration (full width) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <SectionHeader number="7" title="Declaration" />
            <label className="flex items-start gap-4 cursor-pointer group">
              <input type="checkbox" required className="accent-brand-primary w-5 h-5 mt-0.5 shrink-0" />
              <span className="text-gray-600 text-sm leading-relaxed">
                I confirm that the information provided is accurate and I understand that any potential project allocation or employment opportunity will be subject to{' '}
                <span className="font-semibold text-brand-dark">compliance and verification checks</span>.
              </span>
            </label>
          </div>

          {/* Submit (full width) */}
          <div className="lg:col-span-2 flex flex-col items-center gap-4 pb-8">

            {/* Success Message */}
            {status === 'success' && (
              <div className="w-full bg-green-50 border border-green-200 text-green-800 rounded-2xl px-6 py-5 flex items-start gap-4">
                <svg className="w-6 h-6 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-bold text-sm">Application Submitted Successfully!</p>
                  <p className="text-sm mt-1 text-green-700">Your registration has been sent to our recruitment team. We will be in touch shortly.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="w-full bg-red-50 border border-red-200 text-red-800 rounded-2xl px-6 py-5 flex items-start gap-4">
                <svg className="w-6 h-6 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-bold text-sm">Submission Failed</p>
                  <p className="text-sm mt-1 text-red-700">Something went wrong. Please try again or email us directly at recruitment@bluegridutilities.com</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full md:w-auto px-16 py-5 bg-brand-primary hover:bg-brand-dark disabled:bg-brand-primary/50 disabled:cursor-not-allowed text-white font-bold text-lg rounded-2xl shadow-xl shadow-brand-primary/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
            >
              {status === 'loading' ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : status === 'success' ? '✓ Submitted' : 'Submit Registration'}
            </button>

            <p className="text-xs text-gray-400 text-center max-w-sm">
              By submitting this form, you agree to our Privacy Notice. We will contact you once your application has been reviewed.
            </p>
          </div>

        </form>
      </div>
    </MotionSection>
  );
};

export default ApplyPage;
