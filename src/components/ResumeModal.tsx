import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_YEARS, SKILL_GROUPS } from '../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    const resumeText = `
HONG ENG VATHANA (HEV)
Software Engineer (100% Remote)
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

PERSONAL PHILOSOPHY
"${PERSONAL_INFO.philosophy}"
${PERSONAL_INFO.supportingPhilosophy}

PROFESSIONAL EXPERIENCE (1 YEAR - REMOTE)
Software Engineer (Remote) | Enterprise & Client Solutions
- Engineered responsive frontend web applications in Angular and TypeScript in a 100% remote setting.
- Developed mobile application modules in Flutter and Dart with offline persistence.
- Built RESTful backend APIs and micro-services in C# and ASP.NET Core.
- Designed relational schemas and managed migrations in PostgreSQL.
- Participated in remote Agile/Scrum sprints, backlog refinements, and asynchronous code reviews.

TECHNICAL TRAINING (2 YEARS - REMOTE & CONTINUING WITH DISTRIBUTED PROJECTS)
Software Development Student / Trainee (Remote) | Simpaz Training Center
- Completed 2 years of comprehensive remote software engineering curriculum spanning Entry, Junior, Middle, and Senior-Level topics.
- Currently continuing advanced training focused on distributed projects, microservices, and resilient systems.
- Rigorous practice in TDD (Jasmine/Karma), Clean Architecture, SOLID, Design Patterns, and Docker.

EDUCATION
Year 4 Computer Science Student
Cumulative GPA: 3.67 / 4.00
- Year 1: GPA 3.78 / 4.00
- Year 2: GPA 3.67 / 4.00
- Year 3: GPA 3.55 / 4.00
- Year 4: In Progress

TECHNICAL SKILLS
- Frontend: Angular, TypeScript, JavaScript, HTML5, CSS3, Bootstrap, RxJS
- Backend: C#, .NET, ASP.NET Core, REST API, Entity Framework, PHP, Laravel, Node.js
- Mobile: Flutter, Dart, Firebase, SQLite, Android Java, Swift
- Database: PostgreSQL, SQL Server, SQLite, Firestore
- Architecture: Clean Architecture, SOLID, Repository Pattern, Service Layer, Dependency Injection, MVVM, MVC
- Testing: xUnit, NUnit, Jasmine, Selenium, Playwright, TDD
- Tools: Git, GitHub, Docker, Postman, Visual Studio, VS Code
- UI/UX: Figma, Miro, Wireframing, Prototyping
    `.trim();

    try {
      await navigator.clipboard.writeText(resumeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Actions */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-50 border-b border-slate-200 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span className="text-xs font-mono font-bold text-slate-700 uppercase">
              Curriculum Vitae &bull; Hong Eng Vathana
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100 transition-colors"
            >
              <i className={copied ? 'ri-check-line text-emerald-600' : 'ri-file-copy-line'} />
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors"
            >
              <i className="ri-printer-line" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md transition-colors"
              aria-label="Close resume modal"
            >
              <i className="ri-close-line text-xl" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area */}
        <div className="p-6 sm:p-10 overflow-y-auto text-slate-800 space-y-6 text-sm print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-sans tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-semibold text-blue-700 mt-0.5">
              {PERSONAL_INFO.role} &bull; Year 4 Computer Science Student
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 mt-2 font-mono">
              <span>{PERSONAL_INFO.location}</span>
              <span>&bull;</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-900 underline">
                {PERSONAL_INFO.email}
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-slate-900 underline">
                github.com/HongEngVathana
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-900 underline">
                linkedin.com/in/hong-engvathana-154796321
              </a>
            </div>
            <p className="text-xs text-slate-500 italic mt-2 font-mono">
              "{PERSONAL_INFO.philosophy}" — {PERSONAL_INFO.supportingPhilosophy}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Education & Academic Record
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Bachelor of Science in Computer Science (Year 4, In Progress)
                  </h3>
                  <p className="text-xs text-slate-600">
                    Coursework: Algorithms, OOP, Database Systems, Software Architecture, Distributed Systems, Testing.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono font-bold text-xs text-slate-900">Cumulative GPA: 3.67 / 4.00</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs font-mono">
                {EDUCATION_YEARS.map((y) => (
                  <div key={y.year} className="p-2 bg-slate-50 border border-slate-200 rounded">
                    <span className="font-bold block text-slate-800">{y.year}</span>
                    <span className="text-slate-600">{y.gpa ? `GPA: ${y.gpa}` : 'In Progress'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Experience & Technical Training (100% Remote)
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-950 flex flex-wrap items-center gap-1.5">
                      <span>{exp.role}</span>
                      <span className="text-slate-500 font-normal">| {exp.organization}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded font-normal">
                        Remote
                      </span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 mb-2">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 pl-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
              {SKILL_GROUPS.map((grp) => (
                <div key={grp.category} className="flex gap-2">
                  <span className="font-bold text-slate-900 w-36 shrink-0">{grp.category}:</span>
                  <span className="text-slate-700">{grp.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-right print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
