import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
            06 &bull; Technical Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Structured Skills & Specializations
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Domain breakdown spanning client interfaces, distributed backend engines, testing suites, and architecture.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3 border-b border-slate-200/70 pb-2.5">
                  <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-700">
                    <i className={`${group.icon} text-sm`} />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs font-mono text-slate-700 bg-white border border-slate-200/90 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>{group.skills.length} items</span>
                <span className="text-emerald-700 font-medium">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
