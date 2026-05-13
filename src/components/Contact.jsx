import React from 'react';
import MotionSection from './MotionSection';

const Contact = () => {
  return (
    <MotionSection as="section" className="py-24 bg-white relative w-full overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            For recruitment enquiries, project support, or partnership discussions, please contact our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">

          {/* Left Side: Contact Directory */}
          <div className="space-y-6 w-full">
            {/* Contact Directory Card */}
            <div className="rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm w-full overflow-hidden divide-y divide-slate-200">
              {[
                { role: "Public / Website", email: "info@bluegridutilities.com" },
                { role: "Recruitment & Workforce", email: "recruitment@bluegridutilities.com" },
                // { role: "Operations", email: "operations@bluegridutilities.com" },
                {role: "Public Enquiries", email: "enquiries@bluegridutilities.com"},
                { role: "Director", email: "selbert@bluegridutilities.com" },
                { role: "Project Manager", email: "raj.g@bluegridutilities.com" },
                { role: "Assistant PM", email: "dsilva.a@bluegridutilities.com" },
              ].map((contact, i) => (
                <div key={i} className="flex items-center justify-between gap-4 px-8 py-5 hover:bg-white transition-colors duration-200 group">
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-800 mb-1">{contact.role}</p>
                    {contact.email ? (
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-gray-500 hover:text-brand-primary transition-colors break-all text-sm"
                      >
                        {contact.email}
                      </a>
                    ) : null}
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-gray-300 group-hover:text-brand-primary group-hover:border-brand-primary/20 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="p-8 rounded-[2rem] bg-brand-dark text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
                  

                  <div className="min-w-0 md:w-1/2">
                    <h4 className="text-xl font-bold mb-2">Office Address</h4>
                    <p className="text-blue-100/80 text-sm leading-relaxed">
                      Stuart House, St Johns Street,
                      <br />
                      Peterborough, PE1 5DD,
                      <br />
                      United Kingdom
                    </p>
                  </div>
                  <div className="min-w-0 md:w-1/2">
                    <h4 className="text-xl font-bold mb-2">Office Number</h4>
                    <a
                      href="tel:+441442957500"
                      className="text-blue-100/80 text-sm block hover:text-white transition-colors"
                    >
                      +44 1442 957500
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="p-8 rounded-[2rem] bg-brand-dark text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                <h4 className="text-xl font-bold mb-2">Office Address</h4>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  Stuart House, St Johns Street,
                  <br />
                  Peterborough, PE1 5DD,
                  <br />
                  United Kingdom
                </p>
              </div> */}
            </div>
          </div>

          {/* Right Side: Simple Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none appearance-none">
                  <option>Recruitment Enquiry</option>
                  <option>Project Support</option>
                  <option>Partnership Discussion</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand-primary/20">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </MotionSection>
  );
};

export default Contact;
