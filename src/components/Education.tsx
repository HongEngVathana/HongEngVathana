import React from 'react';
import { EDUCATION_YEARS, ACADEMIC_AREAS } from '../data/portfolioData.ts';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
              11 &bull; Academic Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Education & Academic Track Record
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Computer Science undergraduate program with rigorous theoretical and applied coursework.
            </p>
          </div>

          {/* Cumulative GPA Highlight Card */}
          <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-2xs self-start sm:self-auto min-w-[180px]">
            <span className="text-[11px] font-mono uppercase text-slate-500 block">
              Cumulative GPA
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-950 font-mono">
                3.67
              </span>
              <span className="text-xs font-mono text-slate-500">
                / 4.00
              </span>
            </div>
            <span className="text-[11px] text-emerald-700 font-medium block mt-0.5">
              Verified University Record
            </span>
          </div>
        </div>

        {/* Academic Progression Table / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {EDUCATION_YEARS.map((item) => (
            <div
              key={item.year}
              className="p-5 rounded-lg border border-slate-200 bg-white shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                    {item.year}
                  </span>

                  {/* Strictly enforce: No GPA for Year 4, no N/A, no 0.00 */}
                  {item.gpa ? (
                    <span className="text-xs font-mono font-bold text-slate-900 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      GPA: {item.gpa}
                    </span>
                  ) : (
                    <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      In Progress
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-sm text-slate-950 mb-1">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Status</span>
                <span className={item.status === 'In Progress' ? 'text-blue-600 font-semibold' : 'text-slate-600'}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Curriculum Topics */}
        <div className="p-5 rounded-lg border border-slate-200 bg-white">
          <h3 className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Core Academic Curricula & Disciplines
          </h3>
          <div className="flex flex-wrap gap-2">
            {ACADEMIC_AREAS.map((area) => (
              <span
                key={area}
                className="px-2.5 py-1 text-xs font-mono text-slate-700 bg-slate-50 border border-slate-200 rounded-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
