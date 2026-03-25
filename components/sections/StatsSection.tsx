"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const totalSteps = duration / step;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="relative py-16 overflow-hidden border-y border-white/5">
      {/* Ticker-style scrolling labels */}
      <div className="flex overflow-hidden whitespace-nowrap select-none">
        <div className="flex gap-16 animate-[marquee_20s_linear_infinite] pr-16 items-center">
          {["Social Media", "Design Criativo", "Estratégia Digital", "Branding", "Conteúdo", "Resultados Reais",
            "Social Media", "Design Criativo", "Estratégia Digital", "Branding", "Conteúdo", "Resultados Reais"].map(
            (text, i) => (
              <span key={i} className="inline-flex items-center gap-4 font-display font-semibold text-sm uppercase tracking-widest text-offwhite/20">
                <span className="w-1 h-1 rounded-full" style={{ background: "var(--color-neon-purple)" }} />
                {text}
              </span>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
