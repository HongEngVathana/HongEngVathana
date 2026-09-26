import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Strict validation
    if (!name.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a message of at least 10 characters.');
      return;
    }

    // Direct authentic email client dispatch without fake backend claims
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Hi Hong Eng Vathana,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
            14 &bull; Direct Communication
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Let's Work Together
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Interested in software engineering, enterprise applications, mobile development, technical collaboration, or building digital products?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Links */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50/60">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                Verified Channels
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm">
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                      <i className="ri-mail-line" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono text-slate-400">Direct Email</span>
                      <span className="font-medium text-slate-900 truncate block">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                      <i className="ri-github-fill" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono text-slate-400">GitHub</span>
                      <span className="font-medium text-slate-900 truncate block">
                        github.com/HongEngVathana
                      </span>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                      <i className="ri-linkedin-box-fill text-[#0077b5]" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono text-slate-400">LinkedIn</span>
                      <span className="font-medium text-slate-900 truncate block">
                        linkedin.com/in/hong-engvathana-154796321
                      </span>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={PERSONAL_INFO.simpazUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                      <i className="ri-external-link-line" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono text-slate-400">Training Institute</span>
                      <span className="font-medium text-slate-900 truncate block">
                        Simpaz Training Center (Remote)
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/30 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <p className="font-medium text-slate-900">Current Availability &bull; 100% Remote</p>
              </div>
              <p>Available for Remote Software Engineering positions, asynchronous collaboration, and distributed team projects.</p>
            </div>
          </div>

          {/* Validated Contact Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 rounded-lg border border-slate-200 bg-slate-50/40 space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-700 mb-1">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sokha Meng"
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-700 mb-1">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project, question, or engineering opportunity..."
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900 transition-colors resize-y"
                />
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-700 flex items-center gap-2">
                  <i className="ri-error-warning-line text-sm" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md text-xs text-emerald-800 flex items-center gap-2">
                  <i className="ri-check-double-line text-sm text-emerald-600" />
                  <span>Your email client has been prepared with your message to <strong>{PERSONAL_INFO.email}</strong>.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
              >
                <span>Send Message</span>
                <i className="ri-send-plane-fill text-xs" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
