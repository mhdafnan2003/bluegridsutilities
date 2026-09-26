import React, { useEffect, useId, useRef, useState } from 'react';
import { DEFAULT_VACANCY_SLUG, findLocalVacancy } from '../data/vacancies';
import {
  RIGHT_TO_WORK,
  SPONSORSHIP,
  DRIVING,
  EXPERIENCE_YEARS,
  INTERVIEW_AVAILABILITY,
  CIS_STATUS,
  EITHER_ROUTE,
  CERTIFICATES,
  CV_EXTENSIONS,
  CV_ACCEPT,
  CV_TYPES_LABEL,
  CV_MAX_MB,
  RECRUITMENT_EMAIL,
  CANDIDATE_PRIVACY_URL,
} from '../data/applicationOptions';

// Every answer starts empty: the form never assumes anything about the candidate.
const EMPTY = {
  engagementRoute: '',
  cisStatus: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  town: '',
  postcode: '',
  rightToWork: '',
  sponsorship: '',
  drivingLicence: '',
  certificates: [],
  otherCertificates: '',
  experienceYears: '',
  relevantExperience: '',
  interviewAvailability: '',
  startDate: '',
  roleRequirements: false,
  declaration: false,
  privacy: false,
  website: '', // honeypot, hidden from people
};

// Order of fields as they appear on screen, used to order the error summary.
const FIELD_ORDER = [
  'engagementRoute', 'cisStatus', 'firstName', 'lastName', 'email', 'phone', 'town', 'postcode',
  'rightToWork', 'sponsorship', 'drivingLicence', 'certificates', 'otherCertificates', 'experienceYears',
  'relevantExperience', 'interviewAvailability', 'startDate', 'cv', 'roleRequirements', 'declaration', 'privacy',
];

const EMAIL_RE = /^[^\s@,;<>()]+@[^\s@,;<>()]+\.[^\s@,;<>()]{2,}$/;
const PHONE_RE = /^[0-9+()\s.-]{7,25}$/;
const UK_POSTCODE_RE = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/;

const todayIso = () => {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};

/** Mirrors the server rules in careers.controller.js so candidates get the same message either way. */
const validateField = (name, data, routes) => {
  const v = typeof data[name] === 'string' ? data[name].trim() : data[name];
  switch (name) {
    case 'engagementRoute':
      return routes.includes(v) ? '' : 'Select your engagement preference.';
    case 'cisStatus':
      if (!data.engagementRoute || data.engagementRoute === routes[0]) return '';
      return CIS_STATUS.includes(v) ? '' : 'Select your CIS status.';
    case 'firstName':
      return v ? '' : 'Enter your first name.';
    case 'lastName':
      return v ? '' : 'Enter your last name.';
    case 'email':
      if (!v) return 'Enter your email address.';
      return EMAIL_RE.test(v) ? '' : 'Enter an email address in the correct format, like name@example.com.';
    case 'phone':
      if (!v) return 'Enter a phone number.';
      return PHONE_RE.test(v) && (v.match(/\d/g) || []).length >= 7 ? '' : 'Enter a phone number, like 07123 456789.';
    case 'town':
      return v ? '' : 'Enter the town you currently live in.';
    case 'postcode':
      return !v || UK_POSTCODE_RE.test(v.toUpperCase()) ? '' : 'Enter a valid UK postcode, for example CV1 2AB.';
    case 'rightToWork':
      return RIGHT_TO_WORK.includes(v) ? '' : 'Select your right-to-work status.';
    case 'sponsorship':
      return SPONSORSHIP.includes(v) ? '' : 'Answer the visa sponsorship question.';
    case 'drivingLicence':
      return DRIVING.includes(v) ? '' : 'Select your driving licence status.';
    case 'interviewAvailability':
      return INTERVIEW_AVAILABILITY.includes(v) ? '' : 'Select when you are available for an interview.';
    case 'startDate':
      if (!v) return '';
      if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return 'Enter a valid date.';
      return v < todayIso() ? 'Your earliest start date cannot be in the past.' : '';
    case 'roleRequirements':
      return v ? '' : 'Confirm that you have read the requirements of the role.';
    case 'declaration':
      return v ? '' : 'Confirm that the information you have given is accurate and complete.';
    case 'privacy':
      return v ? '' : 'Confirm that you have read the Candidate Privacy Notice.';
    default:
      return '';
  }
};

const validateCv = (file) => {
  if (!file) return '';
  const ext = (file.name.match(/\.[^.]+$/) || [''])[0].toLowerCase();
  if (!CV_EXTENSIONS.includes(ext)) return `The CV must be a ${CV_TYPES_LABEL} file.`;
  if (file.size === 0) return 'The selected file is empty.';
  if (file.size > CV_MAX_MB * 1024 * 1024) return `The CV must be ${CV_MAX_MB} MB or smaller.`;
  return '';
};

const inputCls = (hasError) =>
  `w-full px-3.5 py-2.5 bg-white border text-slate-900 text-base sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005f9e] focus-visible:ring-offset-1 transition-colors ${
    hasError ? 'border-red-600' : 'border-slate-400 focus:border-[#005f9e]'
  }`;
const labelCls = 'block text-sm font-bold text-[#1f2937] mb-1';
const hintCls = 'block text-xs text-slate-600 mb-1.5';

const Req = () => <span aria-hidden="true" className="text-red-700"> *</span>;

const FieldError = ({ id, message }) =>
  message ? (
    <p id={id} className="text-body md:text-body-lg mt-1.5 font-semibold text-red-700 flex items-start gap-1">
      <span className="sr-only">Error: </span>
      {message}
    </p>
  ) : null;

const SectionTitle = ({ n, children }) => (
  <h3 className="flex items-center gap-2 text-base font-bold text-[#0f3a5e] font-outfit uppercase tracking-wide">
    <span aria-hidden="true" className="w-6 h-6 bg-[#005f9e] text-white flex items-center justify-center text-xs font-bold">{n}</span>
    {children}
  </h3>
);

const ApplicationForm = ({ vacancy: vacancyProp, embedded = false }) => {
  const uid = useId().replace(/:/g, '');
  const id = (name) => `${uid}-${name}`;

  const vacancy = { ...findLocalVacancy(vacancyProp?.slug || DEFAULT_VACANCY_SLUG), ...vacancyProp };
  const routes = [...(vacancy.engagementTypes || []), EITHER_ROUTE];
  const privacyUrl = vacancy.candidatePrivacyUrl || CANDIDATE_PRIVACY_URL;

  const [data, setData] = useState(EMPTY);
  const [cvFile, setCvFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [errorCount, setErrorCount] = useState(0); // bumps on every failed submit so focus moves each time
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [result, setResult] = useState(null);

  const inFlight = useRef(false);
  const summaryRef = useRef(null);
  const successRef = useRef(null);
  const fileRef = useRef(null);

  const showCis = Boolean(data.engagementRoute) && data.engagementRoute !== routes[0];

  // Move focus to the error summary / confirmation when they appear, so screen readers announce them.
  useEffect(() => {
    if (errorCount && summaryRef.current) summaryRef.current.focus();
  }, [errorCount]);
  useEffect(() => {
    if (status === 'success' && successRef.current) {
      successRef.current.focus();
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [status]);

  const update = (name, value) => {
    const next = { ...data, [name]: value };
    setData(next);
    // Once a field has been flagged, re-check it as the candidate corrects it.
    if (errors[name]) setErrors((e) => ({ ...e, [name]: validateField(name, next, routes) }));
    if (name === 'engagementRoute' && errors.cisStatus) setErrors((e) => ({ ...e, cisStatus: validateField('cisStatus', next, routes) }));
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    update(name, type === 'checkbox' ? checked : value);
  };

  const toggleCert = (cert) =>
    update('certificates', data.certificates.includes(cert) ? data.certificates.filter((c) => c !== cert) : [...data.certificates, cert]);

  const onFile = (e) => {
    const file = e.target.files?.[0] || null;
    const msg = validateCv(file);
    if (msg) {
      e.target.value = '';
      setCvFile(null);
      setErrors((prev) => ({ ...prev, cv: msg }));
      return;
    }
    setCvFile(file);
    setErrors((prev) => ({ ...prev, cv: '' }));
  };

  const removeFile = () => {
    setCvFile(null);
    setErrors((prev) => ({ ...prev, cv: '' }));
    if (fileRef.current) {
      fileRef.current.value = '';
      fileRef.current.focus();
    }
  };

  const focusField = (name) => (e) => {
    e.preventDefault();
    const target = document.getElementById(id(name === 'engagementRoute' ? 'route-0' : name));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.focus({ preventScroll: true });
    }
  };

  const showErrors = (fieldErrors, message) => {
    setErrors(fieldErrors);
    setFormError(message);
    setErrorCount((n) => n + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inFlight.current || status === 'submitting') return; // duplicate-submit guard

    const fieldErrors = {};
    FIELD_ORDER.forEach((name) => {
      const msg = name === 'cv' ? validateCv(cvFile) : validateField(name, data, routes);
      if (msg) fieldErrors[name] = msg;
    });
    if (Object.keys(fieldErrors).length) {
      showErrors(fieldErrors, 'There is a problem with your application');
      return;
    }

    inFlight.current = true;
    setStatus('submitting');
    setFormError('');

    const fd = new FormData();
    fd.append('roleSlug', vacancy.slug);
    Object.entries(data).forEach(([k, v]) => {
      if (k === 'certificates') v.forEach((c) => fd.append('certificates', c));
      else if (k === 'cisStatus' && !showCis) fd.append(k, '');
      else fd.append(k, typeof v === 'boolean' ? String(v) : v.trim());
    });
    if (cvFile) fd.append('cv', cvFile);

    try {
      const res = await fetch('/api/careers/apply', { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      const isJson = (res.headers.get('content-type') || '').includes('application/json');
      const body = isJson ? await res.json() : null;

      if (res.ok && body?.success) {
        setResult(body.data || {});
        setStatus('success');
        return;
      }

      setStatus('idle');
      if (!body) {
        showErrors({}, `We could not submit your application just now. Your answers have been kept, so please try again in a few minutes. If it keeps happening, email your CV to ${RECRUITMENT_EMAIL} quoting reference ${vacancy.reference}.`);
      } else if (body.error?.fields) {
        const mapped = { ...body.error.fields };
        if (mapped.role) delete mapped.role;
        showErrors(mapped, body.error.message || 'There is a problem with your application');
      } else if (res.status === 429) {
        showErrors({}, 'Too many applications have been sent from this connection. Please wait a few minutes and try again. Your answers have been kept.');
      } else {
        showErrors({}, body.error?.message || `Something went wrong. Your answers have been kept. Please try again, or email ${RECRUITMENT_EMAIL}.`);
      }
    } catch {
      setStatus('idle');
      showErrors({}, `We could not reach our server. Check your connection and try again; your answers have been kept. You can also email your CV to ${RECRUITMENT_EMAIL} quoting reference ${vacancy.reference}.`);
    } finally {
      inFlight.current = false;
    }
  };

  // ------------------------------------------------------------------------------------------
  // Confirmation
  // ------------------------------------------------------------------------------------------
  if (status === 'success') {
    return (
      <div className={embedded ? 'text-left' : 'bg-white border-2 border-emerald-600 p-6 sm:p-10 text-left shadow-xl'} role="status">
        <div className="flex items-start gap-4 mb-6">
          <div aria-hidden="true" className="w-12 h-12 shrink-0 bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>
          <h2 ref={successRef} tabIndex={-1} className="text-h2 md:text-h2-lg font-extrabold text-[#0f3a5e] font-outfit focus:outline-none">
            Application submitted successfully
          </h2>
        </div>

        <p className="text-body md:text-body-lg text-[#1f2937] leading-relaxed">
          Thank you, {data.firstName.trim()}. Your application for <strong className="text-[#0f3a5e]">{result?.roleTitle || vacancy.title}</strong> has
          been received by the Bluegrid Utilities recruitment team.
        </p>

        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#f3f7fa] border border-slate-200 p-5 text-sm">
          <div>
            <dt className="text-slate-600 font-bold">Job reference</dt>
            <dd className="text-[#0f3a5e] font-bold text-base">{result?.reference || vacancy.reference}</dd>
          </div>
          {result?.applicationId && (
            <div>
              <dt className="text-slate-600 font-bold">Your application ID</dt>
              <dd className="text-[#0f3a5e] font-bold text-base">{result.applicationId}</dd>
            </div>
          )}
          <div>
            <dt className="text-slate-600 font-bold">CV</dt>
            <dd className="text-[#0f3a5e]">{cvFile ? cvFile.name : 'No CV attached'}</dd>
          </div>
          <div>
            <dt className="text-slate-600 font-bold">We will contact you at</dt>
            <dd className="text-[#0f3a5e] break-all">{data.email.trim()}</dd>
          </div>
        </dl>

        <p className="text-body md:text-body-lg mt-5 text-[#1f2937]">
          {result?.confirmationEmailSent
            ? 'We have also emailed you a copy of these details.'
            : 'Please keep a note of your job reference and application ID.'}{' '}
          If you have any questions, email <a className="text-[#005f9e] font-bold underline" href={`mailto:${RECRUITMENT_EMAIL}`}>{RECRUITMENT_EMAIL}</a> and
          quote your application ID.
        </p>

        <p className="text-body md:text-body-lg mt-5 p-4 bg-amber-50 border-l-4 border-amber-600 text-amber-950">
          <strong>Please note:</strong> do not book or pay for any training courses until you have attended an interview and received written
          confirmation from Bluegrid Utilities.
        </p>
      </div>
    );
  }

  // ------------------------------------------------------------------------------------------
  // Form
  // ------------------------------------------------------------------------------------------
  const describedBy = (name, hint) => [hint && id(`${name}-hint`), errors[name] && id(`${name}-error`)].filter(Boolean).join(' ') || undefined;
  const errorEntries = FIELD_ORDER.filter((k) => errors[k]).map((k) => [k, errors[k]]);
  const submitting = status === 'submitting';

  const textField = (name, label, { type = 'text', required = false, autoComplete, hint, inputMode, className = '', ...rest } = {}) => (
    <div className={className}>
      <label htmlFor={id(name)} className={labelCls}>
        {label}
        {required ? <Req /> : <span className="font-normal text-slate-600"> (optional)</span>}
      </label>
      {hint && <span id={id(`${name}-hint`)} className={hintCls}>{hint}</span>}
      <input
        id={id(name)}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={data[name]}
        onChange={onChange}
        aria-invalid={errors[name] ? 'true' : undefined}
        aria-describedby={describedBy(name, hint)}
        className={inputCls(errors[name])}
        {...rest}
      />
      <FieldError id={id(`${name}-error`)} message={errors[name]} />
    </div>
  );

  const selectField = (name, label, options, { required = false, hint, className = '' } = {}) => (
    <div className={className}>
      <label htmlFor={id(name)} className={labelCls}>
        {label}
        {required ? <Req /> : <span className="font-normal text-slate-600"> (optional)</span>}
      </label>
      {hint && <span id={id(`${name}-hint`)} className={hintCls}>{hint}</span>}
      <select
        id={id(name)}
        name={name}
        required={required}
        value={data[name]}
        onChange={onChange}
        aria-invalid={errors[name] ? 'true' : undefined}
        aria-describedby={describedBy(name, hint)}
        className={inputCls(errors[name])}
      >
        <option value="">Please select</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <FieldError id={id(`${name}-error`)} message={errors[name]} />
    </div>
  );

  const checkbox = (name, children) => (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id(name)}
          name={name}
          type="checkbox"
          required
          checked={data[name]}
          onChange={onChange}
          aria-invalid={errors[name] ? 'true' : undefined}
          aria-describedby={errors[name] ? id(`${name}-error`) : undefined}
          className="mt-0.5 w-5 h-5 shrink-0 accent-[#005f9e] focus-visible:ring-2 focus-visible:ring-[#005f9e] focus-visible:ring-offset-2"
        />
        <label htmlFor={id(name)} className="text-sm text-[#1f2937] leading-relaxed cursor-pointer">
          {children}
          <Req />
        </label>
      </div>
      <FieldError id={id(`${name}-error`)} message={errors[name]} />
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={id('title')}
      aria-busy={submitting}
      className={embedded ? 'text-left space-y-10' : 'bg-white border border-slate-200 p-5 sm:p-10 md:p-12 shadow-xl text-left space-y-10'}
    >
      {/* Role and reference (the popup on the vacancy page shows its own header) */}
      <div className={embedded ? 'sr-only' : 'border-b border-slate-200 pb-6'}>
        <p className="text-xs font-black tracking-widest uppercase text-[#005f9e] font-outfit">Apply for this role</p>
        <h2 id={id('title')} className="text-h2 md:text-h2-lg mt-1 font-extrabold text-[#0f3a5e] tracking-tight font-outfit">
          {vacancy.title}
        </h2>
        <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-700">
          <div className="flex gap-1.5">
            <dt className="font-bold">Job reference:</dt>
            <dd>{vacancy.reference}</dd>
          </div>
          {vacancy.location && (
            <div className="flex gap-1.5">
              <dt className="font-bold">Location:</dt>
              <dd>{vacancy.location}</dd>
            </div>
          )}
        </dl>
        <p className="text-body md:text-body-lg mt-3 text-[#1f2937]">
          Questions marked <span aria-hidden="true" className="text-red-700 font-bold">*</span>
          <span className="sr-only">as required</span> must be answered. All other questions are optional.
        </p>
      </div>

      {/* Error summary */}
      {formError && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby={id('summary-title')}
          className="p-5 bg-red-50 border-l-4 border-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700"
        >
          <h3 id={id('summary-title')} className="text-base font-bold text-red-800">
            {errorEntries.length ? 'There is a problem with your application' : 'Your application has not been sent'}
          </h3>
          {errorEntries.length ? (
            <>
              <p className="text-body md:text-body-lg mt-1 text-red-900">Please correct the following. Everything else you entered has been kept.</p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                {errorEntries.map(([k, msg]) => (
                  <li key={k}>
                    <a href={`#${id(k === 'engagementRoute' ? 'route-0' : k)}`} onClick={focusField(k)} className="text-red-800 font-semibold underline">
                      {msg}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-body md:text-body-lg mt-1 text-red-900">{formError}</p>
          )}
        </div>
      )}

      {/* Honeypot: hidden from people and assistive technology */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor={id('website')}>Leave this field empty</label>
        <input id={id('website')} name="website" type="text" tabIndex={-1} autoComplete="off" value={data.website} onChange={onChange} />
      </div>

      {/* 1. Role and engagement preference */}
      <section className="space-y-4" aria-labelledby={id('s1')}>
        <div id={id('s1')}><SectionTitle n="1">Engagement preference</SectionTitle></div>
        <fieldset aria-describedby={describedBy('engagementRoute', vacancy.salaryRate)} aria-invalid={errors.engagementRoute ? 'true' : undefined}>
          <legend className={labelCls}>
            How would you like to work with us?
            <Req />
          </legend>
          {vacancy.salaryRate && <span id={id('engagementRoute-hint')} className={hintCls}>{vacancy.salaryRate}</span>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            {routes.map((route, i) => (
              <div
                key={route}
                className={`flex items-start gap-3 p-4 border-2 transition-colors ${
                  data.engagementRoute === route ? 'border-[#005f9e] bg-[#f3f7fa]' : errors.engagementRoute ? 'border-red-600' : 'border-slate-300'
                }`}
              >
                <input
                  id={id(`route-${i}`)}
                  type="radio"
                  name="engagementRoute"
                  value={route}
                  required
                  checked={data.engagementRoute === route}
                  onChange={onChange}
                  className="mt-0.5 w-5 h-5 shrink-0 accent-[#005f9e] focus-visible:ring-2 focus-visible:ring-[#005f9e] focus-visible:ring-offset-2"
                />
                <label htmlFor={id(`route-${i}`)} className="text-sm font-semibold text-[#0f3a5e] cursor-pointer">
                  {route === EITHER_ROUTE ? 'Either route - I am open to both' : route}
                </label>
              </div>
            ))}
          </div>
          <FieldError id={id('engagementRoute-error')} message={errors.engagementRoute} />
        </fieldset>

        {showCis &&
          selectField('cisStatus', 'What is your CIS status?', CIS_STATUS, {
            required: true,
            hint: 'HMRC registration and UTR details are checked later, during onboarding.',
            className: 'sm:max-w-md',
          })}
      </section>

      {/* 2. Name and contact details */}
      <section className="space-y-4 pt-2 border-t border-slate-200" aria-labelledby={id('s2')}>
        <div id={id('s2')} className="pt-6"><SectionTitle n="2">Your details</SectionTitle></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {textField('firstName', 'First name', { required: true, autoComplete: 'given-name' })}
          {textField('lastName', 'Last name', { required: true, autoComplete: 'family-name' })}
          {textField('email', 'Email address', { type: 'email', required: true, autoComplete: 'email', spellCheck: false })}
          {textField('phone', 'Phone number', { type: 'tel', required: true, autoComplete: 'tel', hint: 'A mobile number is best.' })}
        </div>
      </section>

      {/* 3. Current location */}
      <section className="space-y-4 pt-2 border-t border-slate-200" aria-labelledby={id('s3')}>
        <div id={id('s3')} className="pt-6"><SectionTitle n="3">Where you live</SectionTitle></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {textField('town', 'Current town', { required: true, autoComplete: 'address-level2' })}
          {textField('postcode', 'Postcode', {
            autoComplete: 'postal-code',
            hint: 'Helps us plan travel to our work areas.',
            className: 'sm:max-w-[12rem]',
          })}
        </div>
      </section>

      {/* 4. Right to work */}
      <section className="space-y-4 pt-2 border-t border-slate-200" aria-labelledby={id('s4')}>
        <div id={id('s4')} className="pt-6"><SectionTitle n="4">Right to work</SectionTitle></div>
        {vacancy.rightToWorkSponsorship && <p className="text-body md:text-body-lg text-[#1f2937]">{vacancy.rightToWorkSponsorship}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {selectField('rightToWork', 'What is your right-to-work status in the UK?', RIGHT_TO_WORK, {
            required: true,
            hint: 'We check documents before anyone starts work.',
          })}
          {selectField('sponsorship', 'Will you now or in the future need visa sponsorship to work in the UK?', SPONSORSHIP, { required: true })}
        </div>
      </section>

      {/* 5. Driving */}
      <section className="space-y-4 pt-2 border-t border-slate-200" aria-labelledby={id('s5')}>
        <div id={id('s5')} className="pt-6"><SectionTitle n="5">Driving</SectionTitle></div>
        {selectField('drivingLicence', 'What driving licence do you hold?', DRIVING, { required: true, className: 'sm:max-w-md' })}
      </section>

      {/* 6. Tickets and qualifications */}
      <section className="space-y-4 pt-2 border-t border-slate-200" aria-labelledby={id('s6')}>
        <div id={id('s6')} className="pt-6"><SectionTitle n="6">Tickets and qualifications</SectionTitle></div>
        <fieldset aria-describedby={id('certificates-hint')}>
          <legend className={labelCls}>
            Which of these cards or tickets do you currently hold? <span className="font-normal text-slate-600">(optional)</span>
          </legend>
          <span id={id('certificates-hint')} className={hintCls}>Tick all that apply. Leave them all unticked if you hold none; training can be discussed at interview.</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1">
            {CERTIFICATES.map((cert, i) => (
              <div key={cert} className="flex items-start gap-2.5 p-2.5 bg-[#f3f7fa] border border-slate-200">
                <input
                  id={id(`cert-${i}`)}
                  type="checkbox"
                  name="certificates"
                  value={cert}
                  checked={data.certificates.includes(cert)}
                  onChange={() => toggleCert(cert)}
                  className="mt-0.5 w-5 h-5 shrink-0 accent-[#005f9e] focus-visible:ring-2 focus-visible:ring-[#005f9e] focus-visible:ring-offset-2"
                />
                <label htmlFor={id(`cert-${i}`)} className="text-sm text-[#1f2937] leading-snug cursor-pointer">{cert}</label>
              </div>
            ))}
          </div>
        </fieldset>
        {textField('otherCertificates', 'Other cards, tickets or qualifications', { hint: 'For example, plant tickets or a trade qualification.', maxLength: 300 })}
      </section>

      {/* 7. Experience */}
      <section className="space-y-4 pt-2 border-t border-slate-200" aria-labelledby={id('s7')}>
        <div id={id('s7')} className="pt-6"><SectionTitle n="7">Relevant experience</SectionTitle></div>
        {selectField('experienceYears', 'How many years of relevant experience do you have?', EXPERIENCE_YEARS, { className: 'sm:max-w-md' })}
        <div>
          <label htmlFor={id('relevantExperience')} className={labelCls}>
            Tell us about your relevant experience <span className="font-normal text-slate-600">(optional)</span>
          </label>
          <span id={id('relevantExperience-hint')} className={hintCls}>
            For example digging, groundworks, plumbing, utilities, pipework or reinstatement. If you are new to this work, tell us about your practical background.
          </span>
          <textarea
            id={id('relevantExperience')}
            name="relevantExperience"
            rows={5}
            maxLength={3000}
            value={data.relevantExperience}
            onChange={onChange}
            aria-describedby={describedBy('relevantExperience', true)}
            className={inputCls(errors.relevantExperience)}
          />
          <FieldError id={id('relevantExperience-error')} message={errors.relevantExperience} />
        </div>
      </section>

      {/* 8. Availability: interview and start date are separate questions */}
      <section className="space-y-4 pt-2 border-t border-slate-200" aria-labelledby={id('s8')}>
        <div id={id('s8')} className="pt-6"><SectionTitle n="8">Availability</SectionTitle></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {selectField('interviewAvailability', 'When are you available for an interview?', INTERVIEW_AVAILABILITY, { required: true })}
          {textField('startDate', 'What is your earliest available start date?', {
            type: 'date',
            min: todayIso(),
            hint: 'Leave blank if you are not sure yet.',
          })}
        </div>
      </section>

      {/* 9. CV */}
      <section className="space-y-4 pt-2 border-t border-slate-200" aria-labelledby={id('s9')}>
        <div id={id('s9')} className="pt-6"><SectionTitle n="9">CV</SectionTitle></div>
        <div>
          <label htmlFor={id('cv')} className={labelCls}>
            Upload your CV <span className="font-normal text-slate-600">(optional, but it helps us assess your application)</span>
          </label>
          <span id={id('cv-hint')} className={hintCls}>
            One file only. Accepted formats: {CV_TYPES_LABEL}. Maximum size: {CV_MAX_MB} MB.
          </span>
          <input
            ref={fileRef}
            id={id('cv')}
            name="cv"
            type="file"
            accept={CV_ACCEPT}
            onChange={onFile}
            aria-invalid={errors.cv ? 'true' : undefined}
            aria-describedby={describedBy('cv', true)}
            className={`block w-full text-sm text-slate-700 border ${errors.cv ? 'border-red-600' : 'border-slate-400'} bg-white p-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[#0f3a5e] file:text-white file:font-bold file:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005f9e]`}
          />
          <FieldError id={id('cv-error')} message={errors.cv} />
          {cvFile && (
            <p className="text-body md:text-body-lg mt-2 flex flex-wrap items-center gap-3 text-[#1f2937]">
              <span>
                Selected: <strong>{cvFile.name}</strong> ({(cvFile.size / 1024 / 1024).toFixed(2)} MB)
              </span>
              <button type="button" onClick={removeFile} className="text-[#005f9e] font-bold underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005f9e]">
                Remove file<span className="sr-only"> {cvFile.name}</span>
              </button>
            </p>
          )}
        </div>
      </section>

      {/* 10. Declaration: accuracy and role requirements, kept apart from the privacy information */}
      <section className="space-y-4 pt-2 border-t border-slate-200" aria-labelledby={id('s10')}>
        <div id={id('s10')} className="pt-6"><SectionTitle n="10">Declaration</SectionTitle></div>
        {(vacancy.essentialRequirements || []).length > 0 && (
          <div className="bg-[#f3f7fa] border border-slate-200 p-4">
            <h4 className="text-sm font-bold text-[#0f3a5e]">Requirements of this role</h4>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-slate-700">
              {vacancy.essentialRequirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        )}
        <fieldset className="space-y-4">
          <legend className="sr-only">Declaration</legend>
          {checkbox('roleRequirements', 'I have read the requirements of this role, including that it involves physical outdoor excavation and reinstatement work.')}
          {checkbox('declaration', 'I confirm that the information I have given in this application is accurate and complete.')}
        </fieldset>
      </section>

      {/* 11. Privacy */}
      <section className="space-y-4 pt-2 border-t border-slate-200" aria-labelledby={id('s11')}>
        <div id={id('s11')} className="pt-6"><SectionTitle n="11">Privacy</SectionTitle></div>
        <p className="text-body md:text-body-lg text-[#1f2937] leading-relaxed">
          Our Candidate Privacy Notice explains how Bluegrid Utilities uses the personal information in your application, how long we keep it and
          your rights. Please read it before you submit.
        </p>
        <p>
          <a
            href={privacyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#005f9e] font-bold underline hover:text-[#0f3a5e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005f9e]"
          >
            Read the Candidate Privacy Notice
            <span className="sr-only">(opens in a new tab)</span>
            <span aria-hidden="true" className="material-symbols-outlined text-base">open_in_new</span>
          </a>
        </p>
        {checkbox('privacy', 'I have read the Candidate Privacy Notice.')}
      </section>

      {/* Submit */}
      <div className="pt-6 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-body md:text-body-lg text-[#1f2937]">
          Recruitment questions: <a className="text-[#005f9e] font-bold underline" href={`mailto:${RECRUITMENT_EMAIL}`}>{RECRUITMENT_EMAIL}</a>
        </p>
        <button
          type="submit"
          disabled={submitting}
          aria-disabled={submitting}
          className="text-nav w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#005f9e] hover:bg-[#0f3a5e] text-white font-extrabold tracking-wide px-8 py-4 uppercase font-outfit transition-colors shadow-lg disabled:opacity-70 disabled:cursor-wait focus:outline-none focus-visible:ring-4 focus-visible:ring-[#005f9e]/40"
        >
          {submitting ? (
            <>
              <span aria-hidden="true" className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Submitting…</span>
            </>
          ) : (
            <span>Submit application</span>
          )}
        </button>
      </div>
      <p className="sr-only" aria-live="polite">{submitting ? 'Submitting your application, please wait.' : ''}</p>
    </form>
  );
};

export default ApplicationForm;
