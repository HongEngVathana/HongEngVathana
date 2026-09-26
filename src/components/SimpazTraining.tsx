import React, { useState } from 'react';
import { SIMPAZ_CURRICULUM, PERSONAL_INFO } from '../data/portfolioData.ts';

export const SimpazTraining: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'entry' | 'junior' | 'middle' | 'seniorTopics'>('all');

  const levels = [
    { key: 'entry', title: SIMPAZ_CURRICULUM.entry.title, items: SIMPAZ_CURRICULUM.entry.items, badge: 'Foundational' },
    { key: 'junior', title: SIMPAZ_CURRICULUM.junior.title, items: SIMPAZ_CURRICULUM.junior.items, badge: 'Application' },
    { key: 'middle', title: SIMPAZ_CURRICULUM.middle.title, items: SIMPAZ_CURRICULUM.middle.items, badge: 'Architecture' },
    { key: 'seniorTopics', title: SIMPAZ_CURRICULUM.seniorTopics.title, items: SIMPAZ_CURRICULUM.seniorTopics.items, badge: 'Advanced Systems' },
  ];

  const filteredLevels = activeTab === 'all' ? levels : levels.filter((l) => l.key === activeTab);

  return (
    <section id="training" className="py-16 md:py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
              03 &bull; Technical Curriculum
            </span>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Simpaz Software Development Training
              </h2>
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                2 Years &bull; 100% Remote
              </span>
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Continuing w/ Distributed Projects
              </span>
            </div>
          </div>
          <a
            href={PERSONAL_INFO.simpazUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:border-slate-400 px-3 py-1.5 rounded-md transition-colors w-fit"
          >
            <span>Visit Simpaz Training Center</span>
            <i className="ri-external-link-line text-xs" />
          </a>
        </div>

        {/* Overview Box */}
        <div className="p-4 sm:p-5 rounded-lg bg-white border border-slate-200 mb-8 shadow-2xs">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
            Practical software development training focused on programming fundamentals, software engineering practices,
            real-world development workflows, testing, architecture, Agile/Scrum, and modern software development technologies.
          </p>
          <div className="flex items-start gap-2.5 text-xs text-amber-800 bg-amber-50/80 border border-amber-200/80 p-2.5 rounded-md">
            <i className="ri-information-line text-amber-600 mt-0.5 text-sm" />
            <span>
              <strong>Curriculum Notice:</strong> The progressive stages below illustrate the comprehensive curriculum and technical topics
              taught at Simpaz Training Center. They reflect structured learning benchmarks, not job titles or employment claims.
            </span>
          </div>
        </div>

        {/* Level Filters */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
            }`}
          >
            All Curriculum Levels
          </button>
          {levels.map((lvl) => (
            <button
              key={lvl.key}
              onClick={() => setActiveTab(lvl.key as any)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                activeTab === lvl.key
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {lvl.title}
            </button>
          ))}
        </div>

        {/* Curriculum Cards */}
        <div className="space-y-6">
          {filteredLevels.map((lvl) => (
            <div
              key={lvl.key}
              className="bg-white rounded-lg border border-slate-200/90 p-5 shadow-2xs transition-shadow hover:shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <h3 className="font-bold text-base text-slate-900">{lvl.title}</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {lvl.badge}
                </span>
              </div>

              {/* Items Grid */}
              <div className="flex flex-wrap gap-2">
                {lvl.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-700 bg-slate-50 border border-slate-200 rounded-sm"
                  >
                    <i className="ri-checkbox-blank-circle-fill text-[6px] text-slate-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
