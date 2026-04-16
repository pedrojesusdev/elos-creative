"use client";

import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CtaSection() {
  const whatsappUrl = "https://wa.me/557996471730";

  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(160,32,240,0.07) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0,255,255,0.04) 0%, transparent 50%)" }} />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(160,32,240,0.5), rgba(0,255,255,0.4), transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: Copy */}
          <div>
            <Reveal><span className="section-label">Vamos conversar</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-black text-display-lg text-offwhite mb-6">
                Pronto para sua marca{" "}
                <span className="text-shimmer">ir além?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-offwhite/50 text-lg leading-relaxed mb-10">
                Conta pra gente sobre sua marca, seus objetivos e desafios.
                Nossa equipe entra em contato em até 24h com uma proposta personalizada.
              </p>
            </Reveal>

            {/* Benefits list */}
            <Reveal delay={0.3}>
              <ul className="space-y-4">
                {[
                  "Diagnóstico gratuito da sua presença digital",
                  "Proposta personalizada sem compromisso",
                  "Resposta em até 24 horas úteis",
                  "Time especializado em cada área",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-offwhite/60">
                    <ArrowRight size={14} style={{ color: "var(--color-neon-cyan)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Social proof */}
            <Reveal delay={0.4}>
              <div className="mt-12 flex items-center gap-4 p-5 rounded-2xl"
                style={{ background: "rgba(160,32,240,0.06)", border: "1px solid rgba(160,32,240,0.15)" }}>
                <div className="flex -space-x-2">
                  {["MC", "LF", "RV", "PA"].map((initials, i) => (
                    <div key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-[#0D0D0D]"
                      style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #A020F0, #7B00C4)" : "linear-gradient(135deg, #00CCCC, #007A7A)" }}>
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-offwhite">25 marcas já transformaram</p>
                  <p className="text-xs text-offwhite/40 font-mono">sua presença digital com a Elos</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Helena Contact Card */}
          <Reveal delay={0.2} direction="left">
            <div className="card-glass rounded-3xl p-12 md:p-10 relative overflow-hidden">
              {/* Card glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(160,32,240,0.08) 0%, transparent 70%)" }} />

              <div className="relative space-y-8 text-center">
                {/* Profile Photo */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-56 rounded-2xl overflow-hidden border border-white/10"
                      style={{ boxShadow: "0 0 30px rgba(160,32,240,0.2)" }}>
                      <img
                        src="/media/helena.jpg"
                        alt="Helena - Elos Creative"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #A020F0, #00FFFF)", boxShadow: "0 0 20px rgba(160,32,240,0.6)" }}>
                      <MessageCircle size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-offwhite mb-2">
                    Helena
                  </h3>
                  <p className="font-mono text-sm tracking-widest uppercase text-offwhite/50">
                    Elos Creative
                  </p>
                </div>

                {/* Description */}
                <p className="text-offwhite/60 text-sm leading-relaxed">
                  Conectamos marcas com pessoas certas através de estratégia digital, design criativo e histórias que transformam.
                </p>

                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-offwhite transition-all duration-300 hover:-translate-y-1 w-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(37, 211, 102, 0.2), rgba(37, 211, 102, 0.08))",
                    border: "1px solid rgba(37, 211, 102, 0.4)",
                    boxShadow: "0 0 20px rgba(37, 211, 102, 0.15)"
                  }}
                >
                  <MessageCircle size={20} style={{ color: "#25D366" }} />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
