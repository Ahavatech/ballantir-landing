import * as React from 'react';

// Cinematic Wireframe Basketball Icon
export function Basketball(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" {...props} fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="60" cy="60" r="54" strokeOpacity="0.35" />
      <path
        d="M60 6a54 54 0 110 108 54 54 0 010-108zm0 0c18 28 18 74 0 108m0-108C42 34 42 80 60 114"
        strokeOpacity="0.45"
      />
      <path d="M16 36c24 4 64 4 88 0M16 84c24-4 64-4 88 0" strokeOpacity="0.45" />
    </svg>
  );
}

// Circuit board/PCB Icon for AI context
export function CircuitBoard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" {...props} fill="none" stroke="currentColor" strokeWidth={1.3}>
      <rect x="14" y="14" width="92" height="92" rx="14" strokeOpacity="0.22" />
      <circle cx="60" cy="60" r="20" strokeOpacity="0.33" />
      <g strokeOpacity="0.2">
        <path d="M60 34V14" />
        <path d="M60 106V86" />
        <path d="M34 60H14" />
        <path d="M106 60H86" />
        <circle cx="60" cy="14" r="3.5" fill="currentColor" opacity="0.08" />
        <circle cx="60" cy="106" r="3.5" fill="currentColor" opacity="0.08" />
        <circle cx="14" cy="60" r="3.5" fill="currentColor" opacity="0.08" />
        <circle cx="106" cy="60" r="3.5" fill="currentColor" opacity="0.08" />
      </g>
      <g strokeOpacity="0.28">
        <path d="M60 60L94 26" />
        <path d="M60 60L26 94" />
        <path d="M60 60L94 94" />
        <path d="M60 60L26 26" />
      </g>
    </svg>
  );
}

// Sparkle/star/cinematic accent
export function Sparkle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" {...props} fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M20 3v7M20 37v-7M3 20h7M37 20h-7" strokeOpacity="0.6"/>
      <circle cx="20" cy="20" r="8" strokeOpacity="0.25" />
      <circle cx="20" cy="20" r="2.2" fill="currentColor" opacity="0.32" />
    </svg>
  );
}
