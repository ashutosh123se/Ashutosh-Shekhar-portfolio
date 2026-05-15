"use client";

import { useEffect } from "react";

const marqueeItems = [
  "REACT.JS", "NODE.JS", "PYTHON", "POSTGRESQL", "NEXT.JS", "AWS", "DOCKER",
  "MACHINE LEARNING", "TYPESCRIPT", "TENSORFLOW", "REDIS", "KUBERNETES",
  "GRAPHQL", "PRISMA ORM", "FRAMER MOTION", "OPENAI API",
];

export function MarqueeBand() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative py-6 overflow-hidden border-y border-border-subtle bg-bg-deep/50 backdrop-blur-sm my-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg-void to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg-void to-transparent pointer-events-none" />

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-4">
              <span className="section-label text-[11px] whitespace-nowrap text-text-secondary hover:text-gold-bright transition-colors cursor-default">
                {item}
              </span>
              <span className="text-gold-bright/40 text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
