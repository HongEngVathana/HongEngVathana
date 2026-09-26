import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80">
          
          {/* Brand & Philosophy */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center font-mono text-xs font-bold">
                {PERSONAL_INFO.brand}
              </span>
              <span className="font-bold text-slate-900 text-sm">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-slate-400">&bull;</span>
              <span className="text-slate-600 font-medium">
                {PERSONAL_INFO.role} (Remote)
              </span>
            </div>
            <p className="text-slate-500 font-mono text-[11px]">
              {PERSONAL_INFO.philosophy}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-950 transition-colors"
            >
              <i className="ri-github-fill text-sm" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-300">&bull;</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-950 transition-colors"
            >
              <i className="ri-linkedin-box-fill text-sm text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-300">&bull;</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1 hover:text-slate-950 transition-colors"
            >
              <i className="ri-mail-line text-sm" />
              <span>Email</span>
            </a>
            <span className="text-slate-300">&bull;</span>
            <a
              href={PERSONAL_INFO.simpazUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-950 transition-colors"
            >
              <i className="ri-external-link-line text-sm" />
              <span>Simpaz Training</span>
            </a>
          </div>

        </div>

        {/* Bottom Credits & Integrity */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px] font-mono">
          <p>
            &copy; {currentYear} {PERSONAL_INFO.name}. All credentials verified and accurately documented.
          </p>
          <div className="flex items-center gap-3">
            <a href="#hero" className="hover:text-slate-900 transition-colors">
              Back to Top &uarr;
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
