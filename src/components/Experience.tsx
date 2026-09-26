import React from 'react';
import { EXPERIENCES } from '../data/portfolioData.ts';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
            04 &bull; Timeline & Track Record
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Experience & Training
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Clear distinction between verified professional engineering practice and intensive technical training — all completed 100% remotely.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-0.5 before:bg-slate-200 before:content-['']">
          {EXPERIENCES.map((exp, idx) => {
            const isProfessional = exp.type === 'Professional Experience';

            return (
              <div key={idx} className="relative pl-9 sm:pl-11">
                {/* Node Indicator */}
                <div
                  className={`absolute left-1.5 sm:left-2 top-1.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center -translate-x-1/2 ${
                    isProfessional ? 'border-blue-600 ring-4 ring-blue-50' : 'border-slate-400'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isProfessional ? 'bg-blue-600' : 'bg-slate-500'
                    }`}
                  />
                </div>

                {/* Content Box */}
                <div className="p-5 sm:p-6 rounded-lg border border-slate-200 bg-slate-50/40 hover:bg-slate-50/80 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        <span
                          className={`inline-block text-[11px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${
                            isProfessional
                              ? 'text-blue-700 bg-blue-50 border border-blue-200'
                              : 'text-slate-700 bg-slate-200/80 border border-slate-300'
                          }`}
                        >
                          {exp.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                          Remote
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-950">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-700">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 tracking-wider mb-2">
                      Key Responsibilities & Deliverables
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                          <i className="ri-arrow-right-s-line text-slate-400 mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 tracking-wider mb-2">
                      Core Technologies Utilized
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono text-slate-700 bg-white border border-slate-200 rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
