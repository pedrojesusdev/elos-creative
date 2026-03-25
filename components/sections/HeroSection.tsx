"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // Particles
    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; alpha: number;
    }[] = [];

    const colors = ["rgba(160,32,240,", "rgba(0,232,255,", "rgba(180,78,245,"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.1,
      });
    }

    let animId: number;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.005;

      // Background gradient orbs
      const orbs = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, r: 400, color: "rgba(160,32,240,0.06)" },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, r: 350, color: "rgba(0,232,255,0.04)" },
        { x: canvas.width * 0.5 + Math.sin(t) * 80, y: canvas.height * 0.5 + Math.cos(t * 0.7) * 60, r: 300, color: "rgba(160,32,240,0.04)" },
      ];

      orbs.forEach(({ x, y, r, color }) => {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, color);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Grid lines
      ctx.strokeStyle = "rgba(160,32,240,0.02)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 80) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 80) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.fill();

        // Connect nearby particles
        particles.slice(i + 1, i + 6).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(160,32,240,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-dark">
      <AnimatedBackground />

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,232,255,0.22), transparent)" }}
          animate={{ top: ["-1%", "101%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-mono text-xs tracking-widest uppercase"
          style={{
            background: "rgba(160,32,240,0.1)",
            border: "1px solid rgba(160,32,240,0.3)",
            color: "var(--color-neon-purple)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-purple)] animate-pulse" />
          Agência de Social Media & Design
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="font-display font-black mb-6 leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(3.2rem, 9vw, 7.5rem)" }}
        >
          <span className="block text-offwhite">Sua marca</span>
          <span className="block" style={{
            background: "linear-gradient(90deg, #A020F0, #00FFFF, #A020F0)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "textShimmer 4s linear infinite",
          }}>
            merece brilhar.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="max-w-2xl mx-auto text-offwhite/68 text-lg md:text-xl leading-relaxed mb-12 font-body"
        >
          Estratégia digital, design criativo e gestão de social media que transformam seguidores em clientes —
          e marcas em{" "}
          <span style={{ color: "var(--color-neon-cyan)" }}>referências.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="#contato" className="btn-primary text-white flex items-center gap-2">
            Começar agora
            <ArrowRight size={16} />
          </Link>
          <Link href="#portfolio" className="btn-outline flex items-center gap-2">
            <Play size={14} />
            Ver portfólio
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-12 mt-20 pt-10 border-t border-white/5"
        >
          {[
            { value: "150+", label: "Marcas atendidas" },
            { value: "3M+", label: "Alcance orgânico" },
            { value: "97%", label: "Satisfação dos clientes" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display font-black text-3xl md:text-4xl mb-1"
                style={{ color: "var(--color-neon-cyan)", textShadow: "0 0 10px rgba(0,232,255,0.3)" }}>
                {value}
              </p>
              <p className="text-offwhite/40 text-xs font-mono tracking-widest uppercase">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-surface-dark), transparent)" }} />
    </section>
  );
}
