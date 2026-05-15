"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [label, setLabel] = useState("");
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 4}px`;
        dotRef.current.style.top = `${e.clientY - 4}px`;
      }
    };

    const onMouseEnterInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor]")
      ) {
        setIsExpanded(true);
        const cursorLabel = target.getAttribute("data-cursor") ||
          target.closest("[data-cursor]")?.getAttribute("data-cursor") || "VIEW";
        setLabel(cursorLabel);
      }
    };

    const onMouseLeaveInteractive = () => {
      setIsExpanded(false);
      setLabel("");
    };

    const animate = () => {
      const ease = 0.12;
      ringPos.current.x += (pos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        const size = isExpanded ? 60 : 40;
        ringRef.current.style.left = `${ringPos.current.x - size / 2}px`;
        ringRef.current.style.top = `${ringPos.current.y - size / 2}px`;
      }

      animRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseEnterInteractive);
    document.addEventListener("mouseout", onMouseLeaveInteractive);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseEnterInteractive);
      document.removeEventListener("mouseout", onMouseLeaveInteractive);
      cancelAnimationFrame(animRef.current);
    };
  }, [isExpanded]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div
        ref={ringRef}
        className={`cursor-ring hidden md:flex items-center justify-center ${isExpanded ? "expanded" : ""}`}
      >
        {isExpanded && label && (
          <span className="text-[8px] font-mono text-gold-bright font-bold tracking-widest">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
