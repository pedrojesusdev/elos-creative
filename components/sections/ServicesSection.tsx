"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/animations/Reveal";
import { BarChart3, Palette, Megaphone, Camera, TrendingUp, Users } from "lucide-react";

const services = [
  {
    id: "social-media",
    icon: Users,
    number: "01",
    title: "Social Media Management",
    shortDesc: "Presença estratégica no Instagram, TikTok, LinkedIn e mais.",
    fullDesc:
      "Gerenciamos sua presença digital de ponta a ponta: calendário editorial, produção de conteúdo, agendamento, resposta de comentários e relatórios mensais detalhados. Sua marca sempre ativa e relevante.",
    features: ["Calendário editorial", "Copywriting nativo", "Gestão de comunidade", "Relatórios mensais"],
    accent: "var(--color-neon-purple)",
    accentAlpha: "rgba(160,32,240,",
  },
  {
    id: "design",
    icon: Palette,
    number: "02",
    title: "Design Criativo",
    shortDesc: "Identidade visual, posts, stories, reels e peças que param o scroll.",
    fullDesc:
      "Da identidade visual ao post do dia — criamos peças únicas com alta consistência estética. Motion design, templates exclusivos e uma linguagem visual que comunica quem você é antes das palavras.",
    features: ["Identidade visual", "Templates exclusivos", "Motion design", "Materiais impressos"],
    accent: "var(--color-neon-cyan)",
    accentAlpha: "rgba(0,255,255,",
  },
  {
    id: "estrategia",
    icon: TrendingUp,
    number: "03",
    title: "Estratégia Digital",
    shortDesc: "Planejamento orientado a dados para crescimento real e consistente.",
    fullDesc:
      "Auditorias completas, pesquisa de público, análise de concorrentes e mapeamento de oportunidades. Desenvolvemos um plano personalizado para cada marca, com metas claras e entregas mensuráveis.",
    features: ["Auditoria de marca", "Análise de concorrentes", "Plano de conteúdo", "Metas e KPIs"],
    accent: "var(--color-neon-purple)",
    accentAlpha: "rgba(160,32,240,",
  },
  {
    id: "foto-video",
    icon: Camera,
    number: "05",
    title: "Foto & Vídeo",
    shortDesc: "Produção visual profissional alinhada à sua identidade de marca.",
    fullDesc:
      "Desde briefing até entrega final: direção criativa, captura e edição de fotos e vídeos para redes sociais, anúncios e branding. Conteúdo que comunica qualidade e profissionalismo.",
    features: ["Ensaios de marca", "Reels & TikToks", "Vídeos institucionais", "Edição avançada"],
    accent: "var(--color-neon-purple)",
    accentAlpha: "rgba(160,32,240,",
  }
];

export function ServicesSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="servicos" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <Reveal><span className="section-label">Serviços</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-black text-display-lg text-offwhite max-w-2xl">
              Tudo que sua marca precisa para{" "}
              <span style={{ color: "var(--color-neon-cyan)", textShadow: "0 0 30px rgba(0,255,255,0.5)" }}>
                crescer online.
              </span>
            </h2>
          </Reveal>
        </div>

        <StaggerReveal staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <StaggerItem key={s.id}>
              <motion.div
                className="card-glass rounded-2xl p-7 cursor-pointer group relative overflow-hidden transition-all duration-300"
                onClick={() => setActive(active === s.id ? null : s.id)}
                whileHover={{ y: -4 }}
                layout
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top left, ${s.accentAlpha}0.05) 0%, transparent 60%)` }} />

                <div className="relative">
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${s.accentAlpha}0.12)`, border: `1px solid ${s.accentAlpha}0.2)` }}>
                      <s.icon size={20} style={{ color: s.accent }} />
                    </div>
                    <span className="font-mono text-xs text-offwhite/20">{s.number}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-offwhite mb-2 group-hover:text-white transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-offwhite/45 text-sm leading-relaxed">{s.shortDesc}</p>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {active === s.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-offwhite/55 text-sm leading-relaxed mt-4 mb-4">{s.fullDesc}</p>
                        <ul className="flex flex-wrap gap-2">
                          {s.features.map((f) => (
                            <li key={f} className="px-3 py-1 rounded-full text-xs font-mono"
                              style={{ background: `${s.accentAlpha}0.1)`, color: s.accent, border: `1px solid ${s.accentAlpha}0.2)` }}>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle indicator */}
                  <div className="mt-4 flex items-center gap-1">
                    <span className="text-xs font-mono transition-colors"
                      style={{ color: active === s.id ? s.accent : "rgba(245,240,235,0.3)" }}>
                      {active === s.id ? "Fechar" : "Ver mais"}
                    </span>
                    <motion.span
                      animate={{ rotate: active === s.id ? 180 : 0 }}
                      className="text-xs"
                      style={{ color: active === s.id ? s.accent : "rgba(245,240,235,0.3)" }}
                    >
                      ↓
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
