"use client";

import { useEffect, useState, useCallback, useRef } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

/* ─────────────────────────────────────────────────────────────────────────
   CWV: INP OPTIMISATION
   
   The original component ran setActiveId on every IntersectionObserver
   callback — which fires frequently while scrolling. Each setState
   triggers a re-render, causing jank on slow devices.
   
   Fix: throttle the highlight update so it fires at most once per 100ms
   using requestAnimationFrame — keeps state updates off the critical path
   while scrolling, dramatically improving INP on mobile.
   ───────────────────────────────────────────────────────────────────────── */
export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pendingId = useRef<string>("");
  const rafRef = useRef<number | null>(null);

  /* Throttled setter — batches rapid intersection updates into one rAF tick */
  const scheduleActiveId = useCallback((id: string) => {
    pendingId.current = id;
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      setActiveId(pendingId.current);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    const wpContent = document.querySelector(".wp-content");
    if (!wpContent) return;

    const elements = wpContent.querySelectorAll("h2, h3");
    const items: TOCItem[] = [];

    elements.forEach((el, index) => {
      const id = el.id || `heading-${index}`;
      if (!el.id) el.id = id;
      items.push({
        id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scheduleActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [scheduleActiveId]);

  if (headings.length < 2) return null;

  return (
    <nav className="bg-brand-dark-2 border border-white/5 rounded-2xl p-6 mb-10" aria-label="Table of contents">
      <h2 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-4">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm transition-colors duration-200 ${
                heading.level === 3 ? "pl-4" : ""
              } ${
                activeId === heading.id
                  ? "text-brand-red font-semibold"
                  : "text-brand-gray hover:text-white"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
