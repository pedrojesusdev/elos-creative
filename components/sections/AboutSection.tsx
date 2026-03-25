"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/animations/Reveal";
import { Zap, Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Zap, label: "Criatividade sem limites", desc: "Cada projeto é único, construído do zero com identidade própria." },
  { icon: Target, label: "Estratégia orientada a dados", desc: "Decisões guiadas por métricas reais, não por achismos." },
  { icon: Eye, label: "Estética de alto impacto", desc: "Design que para o scroll e comunica em segundos." },
  { icon: Heart, label: "Relacionamento verdadeiro", desc: "Parceria de longo prazo, não apenas entrega de serviço." },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(160,32,240,0.06) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: text */}
          <div>
            <Reveal>
              <span className="section-label">Sobre a Elos</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-black text-display-lg text-offwhite mb-6">
                Conexões que{" "}
                <span style={{ color: "var(--color-neon-purple)", textShadow: "0 0 30px rgba(160,32,240,0.5)" }}>
                  transformam
                </span>
                <br />marcas em movimento.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-offwhite/55 text-lg leading-relaxed mb-6">
                A Elos Creative nasceu da crença de que toda marca tem uma história poderosa para contar.
                Nossa missão é ser o elo entre sua visão e o público certo — com design, estratégia e
                criatividade que geram impacto real.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-offwhite/40 leading-relaxed mb-10">
                Trabalhamos com marcas que querem sair do óbvio, crescer com consistência e se destacar
                em um feed cada vez mais saturado. Não entregamos posts — entregamos presença.
              </p>
            </Reveal>

            {/* Progress bars */}
            <div className="space-y-5" ref={ref}>
              {[
                { label: "Gestão de Social Media", pct: 95 },
                { label: "Design & Branding", pct: 92 },
                { label: "Estratégia de Conteúdo", pct: 88 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-offwhite/60">{label}</span>
                    <span style={{ color: "var(--color-neon-cyan)" }}>{pct}%</span>
                  </div>
                  <div className="h-px bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #A020F0, #00FFFF)" }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${pct}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: values grid */}
          <StaggerReveal staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, label, desc }) => (
              <StaggerItem key={label}>
                <div className="card-glass p-6 rounded-2xl group cursor-default transition-all duration-300 hover:-translate-y-1 border-gradient">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-glow-purple"
                    style={{ background: "rgba(160,32,240,0.15)", border: "1px solid rgba(160,32,240,0.2)" }}>
                    <Icon size={18} style={{ color: "var(--color-neon-purple)" }} />
                  </div>
                  <p className="font-display font-semibold text-sm text-offwhite mb-2">{label}</p>
                  <p className="text-offwhite/40 text-xs leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
