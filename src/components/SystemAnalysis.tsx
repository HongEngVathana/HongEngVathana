import React from 'react';
import { DEV_PROCESS_STEPS } from '../data/portfolioData.ts';

export const SystemAnalysis: React.FC = () => {
  const analysisTools = [
    { name: 'Figma', role: 'Component Systems & High-Fidelity UI', icon: 'ri-palette-line' },
    { name: 'Miro', role: 'User Journey Mapping & Ideation Boards', icon: 'ri-shape-line' },
    { name: 'Balsamiq', role: 'Low-Fidelity Rapid Wireframing', icon: 'ri-layout-masonry-line' },
    { name: 'System Diagrams', role: 'Data Flow, Sequence & Component Modeling', icon: 'ri-flow-chart' },
    { name: 'User Flow', role: 'State Transition & Screen Navigation Graphs', icon: 'ri-route-line' },
    { name: 'Prototyping', role: 'Interactive Micro-Interactions & User Validation', icon: 'ri-cursor-line' },
  ];

  return (
    <section id="system-analysis" className="py-16 md:py-20 border-b border-slate-200/80 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
            09 &bull; Product Lifecycle
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            UI/UX & System Analysis Process
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            A disciplined, end-to-end engineering progression ensuring software meets exact functional specifications before lines of code are committed.
          </p>
        </div>

        {/* 9-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-10">
          {DEV_PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  {step.step}
                </span>
                <h3 className="font-bold text-sm text-slate-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-1">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tools and Artifacts */}
        <div className="bg-white p-5 rounded-lg border border-slate-200">
          <h3 className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase mb-4">
            Analysis & Prototyping Tooling
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {analysisTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-3 p-3 rounded-md border border-slate-100 bg-slate-50/50"
              >
                <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <i className={`${tool.icon} text-base text-blue-600`} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-xs text-slate-900 truncate">{tool.name}</p>
                  <p className="text-[11px] text-slate-500 truncate">{tool.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
