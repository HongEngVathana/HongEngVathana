import React, { useState } from 'react';

interface TechLogoProps {
  slug: string;
  name: string;
  className?: string;
  size?: number;
  color?: string;
}

// Map slugs to standard simple-icons names or custom verified SVGs for maximum reliability
const SLUG_MAP: Record<string, string> = {
  angular: 'angular',
  typescript: 'typescript',
  javascript: 'javascript',
  html5: 'html5',
  css3: 'css3',
  bootstrap: 'bootstrap',
  reactivex: 'reactivex',
  csharp: 'csharp',
  dotnet: 'dotnet',
  php: 'php',
  laravel: 'laravel',
  nodedotjs: 'nodedotjs',
  flutter: 'flutter',
  dart: 'dart',
  firebase: 'firebase',
  sqlite: 'sqlite',
  android: 'android',
  androidstudio: 'androidstudio',
  swift: 'swift',
  postgresql: 'postgresql',
  microsoftsqlserver: 'microsoftsqlserver',
  docker: 'docker',
  git: 'git',
  github: 'github',
  postman: 'postman',
  visualstudio: 'visualstudio',
  visualstudiocode: 'visualstudiocode',
  playwright: 'playwright',
  selenium: 'selenium',
  figma: 'figma',
  miro: 'miro',
  fastapi: 'fastapi',
  jasmine: 'jasmine',
};

export const TechLogo: React.FC<TechLogoProps> = ({
  slug,
  name,
  className = 'w-5 h-5',
  size = 20,
}) => {
  const [error, setError] = useState(false);
  const iconSlug = SLUG_MAP[slug.toLowerCase()] || slug.toLowerCase();

  // If the tech is an architectural concept without a vendor brand (e.g. Clean Architecture), use standard clean vector representation
  if (slug === 'blueprint' || slug === 'target' || slug === 'airplayvideo' || slug === 'speedtest' || slug === 'checkmarx' || slug === 'dependabot') {
    return (
      <span className={`inline-flex items-center justify-center font-mono font-bold text-xs text-slate-700 bg-slate-100 rounded px-1.5 py-0.5 border border-slate-300 ${className}`}>
        {name.slice(0, 3).toUpperCase()}
      </span>
    );
  }

  if (error) {
    return (
      <span
        style={{ width: size, height: size }}
        className="inline-flex items-center justify-center bg-slate-100 text-slate-800 text-[10px] font-bold rounded border border-slate-300"
        title={name}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${iconSlug}`}
      alt={`${name} logo`}
      loading="lazy"
      width={size}
      height={size}
      onError={() => setError(true)}
      className={`object-contain transition-transform group-hover:scale-110 ${className}`}
      style={{ minWidth: size, minHeight: size }}
    />
  );
};
