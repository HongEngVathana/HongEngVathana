/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { SimpazTraining } from './components/SimpazTraining.tsx';
import { Experience } from './components/Experience.tsx';
import { TechCarousel } from './components/TechCarousel.tsx';
import { Skills } from './components/Skills.tsx';
import { Architecture } from './components/Architecture.tsx';
import { SystemAnalysis } from './components/SystemAnalysis.tsx';
import { Teamwork } from './components/Teamwork.tsx';
import { Education } from './components/Education.tsx';
import { LearningJourney } from './components/LearningJourney.tsx';
import { Philosophy } from './components/Philosophy.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#0f172a] font-sans flex flex-col selection:bg-slate-200 selection:text-slate-900">
      {/* Top Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Area strictly ordered according to Section 32 */}
      <main className="flex-1">
        {/* 01 — Hero */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 02 — About Me */}
        <About />

        {/* 03 — Simpaz Software Development Training */}
        <SimpazTraining />

        {/* 04 — Professional Experience */}
        <Experience />

        {/* 05 — Technologies */}
        <TechCarousel />

        {/* 06 — Skills */}
        <Skills />

        {/* 07 — Architecture */}
        <Architecture />

        {/* 09 — UI/UX & System Analysis */}
        <SystemAnalysis />

        {/* 10 — Teamwork & Agile/Scrum */}
        <Teamwork />

        {/* 11 — Education */}
        <Education />

        {/* 12 — Learning Journey */}
        <LearningJourney />

        {/* 13 — Personal Philosophy */}
        <Philosophy />

        {/* 14 — Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Complete Professional Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
