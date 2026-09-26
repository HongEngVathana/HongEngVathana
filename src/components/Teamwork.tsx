import React from 'react';
import { AGILE_CEREMONIES, TEAMWORK_FACETS } from '../data/portfolioData.ts';

export const Teamwork: React.FC = () => {
  return (
    <section id="teamwork" className="py-16 md:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
            10 &bull; Collaboration & Delivery
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Team Collaboration & Agile/Scrum
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Reliable engineering requires structured team synchronization, transparent sprint cadences, and open technical communication.
          </p>
        </div>

        {/* Team Collaboration Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {TEAMWORK_FACETS.map((facet) => (
            <div
              key={facet.title}
              className="p-5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-blue-600 mb-3">
                <i className={`${facet.icon} text-base`} />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1.5">
                {facet.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {facet.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Agile / Scrum Ceremonies Breakdown */}
        <div className="p-6 rounded-lg border border-slate-200 bg-slate-50/40">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h3 className="font-bold text-sm sm:text-base text-slate-900">
              Agile & Scrum Execution Cadence
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {AGILE_CEREMONIES.map((ceremony) => (
              <div
                key={ceremony.title}
                className="p-3.5 bg-white rounded-md border border-slate-200/90 text-xs"
              >
                <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                  <i className="ri-check-line text-emerald-600 text-xs" />
                  <span>{ceremony.title}</span>
                </div>
                <p className="text-slate-600 leading-normal pl-4">
                  {ceremony.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/70 text-xs text-slate-500 flex items-center justify-between">
            <span>Engineering practice grounded in realistic peer delivery</span>
            <span className="font-mono">Iterate &bull; Inspect &bull; Adapt</span>
          </div>
        </div>

      </div>
    </section>
  );
};
