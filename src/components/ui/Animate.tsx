"use client";
import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "scale" | "fade";
  threshold?: number;
  as?: "div" | "section" | "article";
}

export default function Animate({
  children,
  className = "",
  delay = 0,
  from = "up",
  threshold = 0.08,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("in-view");
          io.unobserve(el);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold]);

  return (
    <Tag ref={ref as React.RefObject<HTMLElement & HTMLDivElement>} className={`anim-${from} ${className}`}>
      {children}
    </Tag>
  );
}
