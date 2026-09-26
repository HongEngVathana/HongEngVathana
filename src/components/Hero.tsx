import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Identifier Badge / Status */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            {PERSONAL_INFO.name} &bull; {PERSONAL_INFO.location}
          </span>
        </div>

        {/* Main Heading & Subheading */}
        <div className="space-y-2 mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 font-sans">
            {PERSONAL_INFO.heroHeading}
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-slate-700 tracking-tight">
            {PERSONAL_INFO.heroSubheading}
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
          {PERSONAL_INFO.heroDescription}
        </p>

        {/* Personal Philosophy Box */}
        <div className="p-4 sm:p-5 rounded-lg bg-slate-50 border border-slate-200/90 mb-8 max-w-3xl">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-slate-400">
              <i className="ri-double-quotes-l text-xl text-slate-400" />
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900 tracking-tight">
                {PERSONAL_INFO.philosophy}
              </p>
              <p className="text-sm text-slate-600 mt-1">
                {PERSONAL_INFO.supportingPhilosophy}
              </p>
            </div>
          </div>
        </div>

        {/* Information Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 py-4 border-y border-slate-200/80 mb-8 max-w-3xl text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-slate-700">
            <i className="ri-briefcase-line text-base text-slate-500" />
            <div>
              <span className="font-semibold text-slate-900 block">{PERSONAL_INFO.experienceDuration}</span>
              <span className="text-[11px] font-mono text-emerald-700">100% Remote Delivery</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-slate-700">
            <i className="ri-book-open-line text-base text-slate-500" />
            <div>
              <span className="font-medium text-slate-900 block">Simpaz Training Center</span>
              <span className="text-[11px] font-mono text-blue-700">Remote Technical Training</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-slate-700">
            <i className="ri-graduation-cap-line text-base text-slate-500" />
            <div>
              <span className="font-medium text-slate-900 block">Year 4 Computer Science</span>
              <span className="text-[11px] font-mono text-slate-500">Undergraduate Degree</span>
            </div>
          </div>
        </div>

        {/* Primary and Secondary Links */}
        <div className="space-y-4 max-w-3xl">
          {/* Primary Action Links */}
          <div className="flex flex-wrap items-center gap-5 pt-1">
            <a
              href="#experience"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors group"
            >
              <span>View Experience</span>
              <i className="ri-arrow-down-line group-hover:translate-y-0.5 transition-transform" />
            </a>

            <span className="text-slate-300">|</span>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors group"
            >
              <span>Download Resume</span>
              <i className="ri-download-line group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Secondary External Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 pt-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-950 transition-colors"
            >
              <i className="ri-github-fill text-sm" />
              <span>GitHub</span>
              <i className="ri-arrow-right-up-line text-slate-400 text-xs" />
            </a>

            <span className="text-slate-300">&bull;</span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-950 transition-colors"
            >
              <i className="ri-linkedin-box-fill text-sm text-[#0077B5]" />
              <span>LinkedIn</span>
              <i className="ri-arrow-right-up-line text-slate-400 text-xs" />
            </a>

            <span className="text-slate-300">&bull;</span>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1 hover:text-slate-950 transition-colors"
            >
              <i className="ri-mail-line text-sm" />
              <span>Email</span>
              <i className="ri-arrow-right-up-line text-slate-400 text-xs" />
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
              <i className="ri-arrow-right-up-line text-slate-400 text-xs" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
