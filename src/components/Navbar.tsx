import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Training', href: '#training' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'training', 'experience', 'technologies', 'skills', 'architecture', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-slate-900 font-bold text-lg tracking-tight focus:outline-hidden"
          >
            <span className="w-8 h-8 rounded-md bg-slate-900 text-white flex items-center justify-center font-mono text-sm tracking-tighter group-hover:bg-slate-800 transition-colors">
              {PERSONAL_INFO.brand}
            </span>
            <span className="font-semibold text-slate-900 text-sm hidden sm:inline-block">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-wide transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-slate-950 font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Resume */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-300 rounded-md transition-colors"
            >
              <i className="ri-file-text-line text-sm text-slate-600" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-medium text-slate-800 bg-slate-100 border border-slate-300 rounded-md"
            >
              Resume
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              <i className={mobileMenuOpen ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                activeSection === link.href.substring(1)
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-md flex items-center justify-between"
            >
              <span>View Full Resume</span>
              <i className="ri-arrow-right-line text-slate-500" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
