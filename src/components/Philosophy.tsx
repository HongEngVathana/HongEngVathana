import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 md:py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
            13 &bull; Guiding Mindset
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Personal Philosophy & Continuous Growth
          </h2>
        </div>

        {/* Philosophy Card */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-2xs mb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-2">
              Core Creed
            </span>
            <blockquote className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight leading-snug mb-4">
              {PERSONAL_INFO.philosophy}
            </blockquote>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Knowledge is my priority. I believe continuous learning is the foundation of growth.
              I value practical experience, technical curiosity, and steady daily improvement. Every project, codebase,
              and code review is an opportunity to understand deeper systems and refine craftsmanship.
            </p>
          </div>

          {/* Continuous Improvement Cycle: Learn -> Practice -> Build -> Improve -> Become Better */}
          <div className="pt-6 border-t border-slate-100">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-3 font-semibold">
              The Daily Iteration Cycle
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono">
              {PERSONAL_INFO.philosophyCycle.map((stage, idx) => (
                <React.Fragment key={stage}>
                  <span className="px-3 py-1.5 rounded-md bg-slate-100 font-semibold text-slate-800 border border-slate-200">
                    {stage}
                  </span>
                  {idx < PERSONAL_INFO.philosophyCycle.length - 1 && (
                    <i className="ri-arrow-right-line text-slate-400 text-xs shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Steady Work ethic footnote */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="p-3.5 bg-white border border-slate-200/80 rounded-md">
            <strong className="block text-slate-900 font-bold mb-1">Knowledge First</strong>
            Understanding underlying protocols and architectural principles before writing code.
          </div>
          <div className="p-3.5 bg-white border border-slate-200/80 rounded-md">
            <strong className="block text-slate-900 font-bold mb-1">Deliberate Practice</strong>
            Refining test coverage, edge cases, and design patterns systematically.
          </div>
          <div className="p-3.5 bg-white border border-slate-200/80 rounded-md">
            <strong className="block text-slate-900 font-bold mb-1">Honest Reflection</strong>
            Welcoming critical feedback, peer reviews, and objective benchmark measurements.
          </div>
        </div>

      </div>
    </section>
  );
};
