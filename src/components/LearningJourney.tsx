import React from 'react';
import { LEARNING_JOURNEY_STEPS } from '../data/portfolioData.ts';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-16 md:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
            12 &bull; Growth Trajectory
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Learning Journey & Progression
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            From algorithmic foundations and intensive software training to professional engineering delivery.
          </p>
        </div>

        {/* Visual Progression Steps */}
        <div className="space-y-4">
          {LEARNING_JOURNEY_STEPS.map((step, idx) => {
            const isLast = idx === LEARNING_JOURNEY_STEPS.length - 1;
            const isSimpaz = step.title.includes('Simpaz');
            const isProfessional = step.title.includes('Professional');

            return (
              <div key={step.number} className="relative">
                <div
                  className={`p-4 sm:p-5 rounded-lg border transition-all ${
                    isProfessional
                      ? 'bg-blue-50/40 border-blue-200'
                      : isSimpaz
                      ? 'bg-amber-50/30 border-amber-200/80'
                      : 'bg-slate-50/50 border-slate-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                        {step.number}
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        {step.title}
                      </h3>
                    </div>

                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded w-fit ${
                        isProfessional
                          ? 'bg-blue-100 text-blue-800'
                          : isSimpaz
                          ? 'bg-amber-100 text-amber-800 font-semibold'
                          : 'bg-slate-200/70 text-slate-700'
                      }`}
                    >
                      {step.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
                    {step.description}
                  </p>
                </div>

                {!isLast && (
                  <div className="flex justify-center py-1">
                    <i className="ri-arrow-down-line text-slate-300 text-sm" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Notice of distinction */}
        <div className="mt-8 p-3.5 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
          <i className="ri-shield-check-line text-slate-500 text-sm shrink-0" />
          <span>
            Simpaz Training Center represents focused software engineering educational development, distinct from subsequent industry employment.
          </span>
        </div>

      </div>
    </section>
  );
};
