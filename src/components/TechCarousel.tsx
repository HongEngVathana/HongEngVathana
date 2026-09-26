import React, { useState, useRef, useEffect } from 'react';
import { TECHNOLOGIES } from '../data/portfolioData.ts';
import { TechLogo } from './TechLogo.tsx';

export const TechCarousel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Dragging state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Mobile',
    'Database',
    'Architecture',
    'Testing',
    'Tools',
    'UI/UX',
  ];

  const filteredTech =
    activeCategory === 'All'
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((t) => t.category === activeCategory);

  // Auto scroll effect
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.6; // slow, subtle, professional movement

    const step = () => {
      if (!isPaused && el) {
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += speed;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, activeCategory]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftStart.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  const handleScrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const handleScrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <section id="technologies" className="py-16 md:py-20 border-b border-slate-200/80 bg-slate-50/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
              05 &bull; Technology Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Verified Technologies & Real Logos
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Interactive carousel with real recognizable technology logos, drag, touch swipe, and category filters.
            </p>
          </div>

          {/* Carousel Manual Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handleScrollPrev}
              aria-label="Scroll previous technologies"
              className="p-2 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors shadow-2xs"
            >
              <i className="ri-arrow-left-s-line text-lg" />
            </button>
            <button
              onClick={handleScrollNext}
              aria-label="Scroll next technologies"
              className="p-2 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors shadow-2xs"
            >
              <i className="ri-arrow-right-s-line text-lg" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                if (scrollRef.current) scrollRef.current.scrollLeft = 0;
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Drag/Swipe Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleMouseUpOrLeave();
          }}
        >
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-3 overflow-x-auto no-scrollbar py-2 cursor-grab active:cursor-grabbing select-none"
            style={{ scrollBehavior: 'auto' }}
          >
            {filteredTech.map((tech) => (
              <div
                key={tech.name}
                className="group shrink-0 flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all w-56 sm:w-60"
              >
                <div className="w-8 h-8 rounded-md bg-slate-50 flex items-center justify-center p-1.5 border border-slate-100 shrink-0">
                  <TechLogo slug={tech.slug} name={tech.name} size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {tech.category}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Subtext info */}
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>&larr; Drag or swipe to explore &rarr;</span>
            <span>{isPaused ? 'Auto-scroll: Paused' : 'Auto-scroll: Active'}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
