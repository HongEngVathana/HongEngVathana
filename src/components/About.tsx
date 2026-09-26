import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const technicalInterests = [
    { name: 'Web Development', desc: 'Single-page web applications with Angular and modern JavaScript/TypeScript.' },
    { name: 'Mobile Development', desc: 'Cross-platform mobile apps with Flutter, Dart, and offline-first persistence.' },
    { name: 'Backend Development', desc: 'RESTful APIs, controllers, and service layers with C# and ASP.NET Core.' },
    { name: 'Databases & Storage', desc: 'Relational design with PostgreSQL & SQL Server; NoSQL with Firebase Firestore.' },
    { name: 'Software Architecture', desc: 'Clean Architecture, SOLID design principles, MVVM, and Repository Pattern.' },
    { name: 'UI/UX & System Analysis', desc: 'Translating requirements through wireframing, user flows, and Figma prototyping.' },
    { name: 'Agile / Scrum', desc: 'Sprint planning, daily stand-ups, backlog refinement, and disciplined code reviews.' },
    { name: 'Continuous Learning', desc: 'Exploring modern frameworks, performance techniques, and software craftsmanship.' },
  ];

  return (
    <section id="about" className="py-16 md:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
            02 &bull; Background & Interests
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            About Me
          </h2>
        </div>

        {/* Narrative */}
        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-10">
          <p>
            I am a <strong className="font-semibold text-slate-950">Year 4 Computer Science student</strong> with{' '}
            <strong className="font-semibold text-slate-950">2 years of intensive software development training at Simpaz Training Center</strong> (currently continuing advanced training on distributed projects), and{' '}
            <strong className="font-semibold text-slate-950">1 year of professional software engineering experience</strong>.
          </p>
          <p>
            <strong className="font-semibold text-slate-900">All of my technical training and professional work experience are 100% remote.</strong> Operating in a remote engineering environment has developed my strong self-discipline, clear asynchronous communication, rigorous Git/GitHub version control workflows, and effective participation in distributed Agile/Scrum ceremonies.
          </p>
          <p>
            My engineering work emphasizes building robust, maintainable digital products across web, mobile, and backend platforms.
            Rather than jumping straight to syntax, I approach systems by first analyzing domain requirements, structuring decoupled
            architecture, and implementing clean code with verified automated tests.
          </p>
          <p>
            Continuous improvement is at the core of my daily routine: I consistently invest time in studying design patterns, refining
            refactoring practices, and collaborating closely with engineering peers to deliver reliable software.
          </p>
        </div>

        {/* Technical Focus Areas */}
        <div>
          <h3 className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase mb-4">
            Areas of Focus & Technical Interest
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {technicalInterests.map((item) => (
              <div
                key={item.name}
                className="p-3.5 rounded-md border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-check-line text-blue-600 text-sm font-bold" />
                  <span className="font-semibold text-sm text-slate-900">{item.name}</span>
                </div>
                <p className="text-xs text-slate-600 pl-5 leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles Footnote */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            <span>Based in </span>
            <span className="font-medium text-slate-800">{PERSONAL_INFO.location}</span>
            <span> &bull; Open for software engineering discussions & collaboration</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700"
          >
            <span>Get in touch</span>
            <i className="ri-arrow-right-line" />
          </a>
        </div>

      </div>
    </section>
  );
};
