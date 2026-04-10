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

const fallbackMedia = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'%3E%3Crect width='1200' height='900' fill='%231A1A1A'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23F5F5F5' font-family='Arial' font-size='40'%3EM%C3%ADdia%20Elos%3C/text%3E%3C/svg%3E";

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(160,32,240,0.05) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <Reveal>
              <span className="section-label text-[10px] tracking-[0.14em]">Sobre a Elos</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-black text-5xl text-offwhite mb-6">
                Conexões que <span style={{ color: "var(--color-neon-purple)" }}>transformam</span>
                <br />momentos em conteúdo.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-offwhite/60 text-lg leading-relaxed mb-6">
                Produzimos cobertura visual para eventos e famílias com estética consistente,
                narrativa emocional e linguagem de marca pronta para redes sociais.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-offwhite/50 leading-relaxed mb-10">
                Do briefing à edição final, organizamos captação de foto e vídeo para entregar
                material estratégico, sensível e com alto potencial de engajamento.
              </p>
            </Reveal>

            <div className="space-y-5" ref={ref}>
              {[
                { label: "Captação de eventos", pct: 95 },
                { label: "Direção criativa", pct: 92 },
                { label: "Edição para social", pct: 88 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-offwhite/65">{label}</span>
                    <span style={{ color: "var(--color-neon-cyan)" }}>{pct}%</span>
                  </div>
                  <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #A020F0, #00E8FF)" }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${pct}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="./media/aniversario-15-retrato.jpg"
                alt="Aniversariante em festa de 15 anos"
                className="w-full h-44 object-cover rounded-2xl border border-white/10"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = fallbackMedia; }}
              />
              <img
                src="./media/familia-branco.jpg"
                alt="Família reunida em ensaio"
                className="w-full h-44 object-cover rounded-2xl border border-white/10"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = fallbackMedia; }}
              />
            </div>

            <img
              src="./media/cenario-roxo-15.jpg"
              alt="Cenário decorado em tons roxos"
              className="w-full h-56 object-cover rounded-2xl border border-white/10"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = fallbackMedia; }}
            />

            <img
              src="./media/cha-revelacao-casal.jpg"
              alt="Casal em ensaio de gestação"
              className="w-full h-56 object-cover rounded-2xl border border-white/10"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = fallbackMedia; }}
            />

            <img
              src="./media/imagem-noiva.png"
              alt="Noiva em retrato editorial"
              className="w-full h-56 object-cover rounded-2xl border border-white/10"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = fallbackMedia; }}
            />

            <StaggerReveal staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map(({ icon: Icon, label, desc }) => (
                <StaggerItem key={label}>
                  <div className="card-glass p-5 rounded-2xl group cursor-default transition-all duration-300 hover:-translate-y-1 border-gradient">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "rgba(160,32,240,0.12)", border: "1px solid rgba(160,32,240,0.2)" }}>
                      <Icon size={18} style={{ color: "var(--color-neon-purple)" }} />
                    </div>
                    <p className="font-display font-semibold text-sm text-offwhite mb-2">{label}</p>
                    <p className="text-offwhite/45 text-xs leading-relaxed">{desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
