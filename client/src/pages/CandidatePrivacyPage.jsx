import React from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import { RECRUITMENT_EMAIL } from '../data/applicationOptions';

// Candidate Privacy Notice, linked from the job application form.
// Sections marked `pending` need wording approved by Bluegrid (lawful basis, retention, sharing).
// CONFIRM (Bluegrid): replace each pending section's text with the approved wording and remove `pending`.
const SECTIONS = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          Bluegrid Utilities is the trading name of Bluegrid Technology Ltd, a company registered in England and Wales (company number 16442340).
          Bluegrid Technology Ltd is responsible for the personal information you give us when you apply for a job.
        </p>
        <p>Registered office: Office 68, Spaces, The Maylands Building, Maylands Avenue, Hemel Hempstead Industrial Estate, Hemel Hempstead, England, HP2 7TG.</p>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    title: 'What information we collect',
    body: (
      <>
        <p>When you apply through our online application form, we collect:</p>
        <ul>
          <li>your name, email address and phone number</li>
          <li>your current town and, if you give it, your postcode</li>
          <li>your right-to-work status in the UK and whether you need visa sponsorship</li>
          <li>your driving licence status</li>
          <li>the cards, tickets and qualifications you tell us you hold</li>
          <li>your experience, your interview availability and your earliest start date</li>
          <li>your engagement preference and, where relevant, your CIS status</li>
          <li>your CV, if you upload one, and anything it contains</li>
        </ul>
        <p>Please do not include information in your CV that we do not need, such as your date of birth, a photograph or health information.</p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use your information',
    body: (
      <>
        <p>
          We use your information to assess your application against the requirements of the role, to contact you about your application and to
          arrange interviews. If you are offered a role, we will ask for further information, such as right-to-work documents, before you start.
        </p>
        <p>Your application is sent securely to our recruitment mailbox and is seen by the people involved in recruiting for the role.</p>
      </>
    ),
  },
  { id: 'lawful-basis', title: 'Our lawful basis for using your information', pending: true },
  { id: 'sharing', title: 'Who we share your information with', pending: true },
  { id: 'retention', title: 'How long we keep your information', pending: true },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: (
      <>
        <p>Under UK data protection law you have the right to:</p>
        <ul>
          <li>ask for a copy of the personal information we hold about you</li>
          <li>ask us to correct information that is wrong or incomplete</li>
          <li>ask us to delete your information</li>
          <li>ask us to restrict how we use your information, or object to our using it</li>
        </ul>
        <p>
          Some of these rights only apply in certain circumstances. To use any of them, email{' '}
          <a href={`mailto:${RECRUITMENT_EMAIL}`}>{RECRUITMENT_EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us or make a complaint',
    body: (
      <>
        <p>
          If you have a question about how we use your information, email <a href={`mailto:${RECRUITMENT_EMAIL}`}>{RECRUITMENT_EMAIL}</a>.
        </p>
        <p>
          If you are unhappy with how we have handled your information, you can complain to the Information Commissioner&apos;s Office (ICO) at{' '}
          <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
            ico.org.uk/make-a-complaint<span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </>
    ),
  },
];

const CandidatePrivacyPage = () => (
  <div className="font-sans bg-white pb-16 md:pb-24">
    <PageSEO
      customTitle="Candidate Privacy Notice | Bluegrid Utilities"
      customDescription="How Bluegrid Utilities uses the personal information you give us when you apply for a job."
    />
    <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-8 md:pt-12 text-left">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mb-6">
        <ol className="flex flex-wrap gap-2">
          <li><Link to="/policies" className="underline hover:text-[#005f9e]">Policies</Link> <span aria-hidden="true">/</span></li>
          <li aria-current="page">Candidate Privacy Notice</li>
        </ol>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-[#0f3a5e] tracking-tight font-outfit">Candidate Privacy Notice</h1>
      <p className="mt-4 text-lg text-slate-700 leading-relaxed">
        This notice explains how Bluegrid Utilities uses the personal information you give us when you apply for a job with us.
      </p>

      <nav aria-labelledby="cpn-contents" className="mt-8 bg-slate-50 border border-slate-200 p-5">
        <h2 id="cpn-contents" className="text-base font-bold text-[#0f3a5e]">Contents</h2>
        <ol className="mt-2 list-decimal pl-5 space-y-1 text-sm">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-[#005f9e] underline">{s.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 space-y-10 text-slate-800 leading-relaxed [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1 [&_a]:text-[#005f9e] [&_a]:underline [&_a]:font-semibold">
        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-40">
            <h2 id={`${s.id}-h`} className="text-xl sm:text-2xl font-bold text-[#0f3a5e] font-outfit">{s.title}</h2>
            {s.pending ? (
              <p>
                We are finalising the wording of this section. If you would like this information before you apply, email{' '}
                <a href={`mailto:${RECRUITMENT_EMAIL}?subject=${encodeURIComponent(`Candidate Privacy Notice: ${s.title}`)}`}>{RECRUITMENT_EMAIL}</a>{' '}
                and we will reply.
              </p>
            ) : (
              s.body
            )}
          </section>
        ))}
      </div>
    </div>
  </div>
);

export default CandidatePrivacyPage;
