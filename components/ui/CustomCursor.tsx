"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.transform = `translate(${followerX - 16}px, ${followerY - 16}px)`;
      raf = requestAnimationFrame(animateFollower);
    };

    const onMouseEnterLink = () => {
      cursor.classList.add("scale-0");
      follower.classList.add("!w-12", "!h-12", "!border-[var(--color-neon-cyan)]", "!bg-[rgba(0,255,255,0.1)]");
    };

    const onMouseLeaveLink = () => {
      cursor.classList.remove("scale-0");
      follower.classList.remove("!w-12", "!h-12", "!border-[var(--color-neon-cyan)]", "!bg-[rgba(0,255,255,0.1)]");
    };

    document.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(animateFollower);

    const links = document.querySelectorAll("a, button, [data-cursor]");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999] transition-transform duration-75"
        style={{ background: "var(--color-neon-purple)", boxShadow: "0 0 8px rgba(160,32,240,0.8)" }}
      />
      {/* Ring follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99998] transition-[width,height,background,border-color] duration-300"
        style={{ border: "1px solid rgba(160,32,240,0.5)", background: "rgba(160,32,240,0.05)" }}
      />
    </>
  );
}
