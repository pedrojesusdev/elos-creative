"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "CEO, Marca Âmbar",
    avatar: "MC",
    text: "A Elos Creative transformou completamente nossa presença digital. Em 3 meses, nosso Instagram cresceu 280% e as vendas via social media dobraram. Design impecável, estratégia certeira.",
    stars: 5,
    highlight: "cresceu 280%",
    accentColor: "#A020F0",
  },
  {
    name: "Lucas Ferreira",
    role: "Fundador, FoodLab",
    avatar: "LF",
    text: "Contratamos a Elos para o lançamento da nossa plataforma e foi a melhor decisão. A identidade visual é exatamente o que a gente sonhava — e o engajamento no lançamento superou todas as nossas expectativas.",
    stars: 5,
    highlight: "melhor decisão",
    accentColor: "#00FFFF",
  },
  {
    name: "Renata Vaz",
    role: "Arquiteta & Designer",
    avatar: "RV",
    text: "Profissionalismo em outro nível. A equipe entendeu minha essência já na primeira reunião e entregou uma identidade que comunica exatamente quem eu sou para o meu público ideal.",
    stars: 5,
    highlight: "outro nível",
    accentColor: "#A020F0",
  },
  {
    name: "Pedro Alves",
    role: "Diretor, EduTech Nexo",
    avatar: "PA",
    text: "Além do design bonito, o que me impressionou foi a visão estratégica. Eles não apenas criam conteúdo — eles pensam no negócio como um todo e isso faz toda a diferença nos resultados.",
    stars: 5,
    highlight: "visão estratégica",
    accentColor: "#00FFFF",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const prev = () => { setAutoplay(false); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setAutoplay(false); setCurrent((c) => (c + 1) % testimonials.length); };

  const t = testimonials[current];

  return (
    <section id="depoimentos" className="relative py-32 bg-[#080808] overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(160,32,240,0.4), rgba(0,255,255,0.3), transparent)" }} />
      <div className="absolute inset-0 bg-grid opacity-15" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal><span className="section-label justify-center">Depoimentos</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-black text-display-md text-offwhite">
              O que nossos clientes dizem.
            </h2>
          </Reveal>
        </div>

        {/* Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="card-glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
            >
              {/* Accent glow */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-60 pointer-events-none rounded-full"
                style={{ background: `radial-gradient(ellipse, ${t.accentColor}18 0%, transparent 70%)` }} />

              {/* Quote icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${t.accentColor}18`, border: `1px solid ${t.accentColor}30` }}>
                  <Quote size={20} style={{ color: t.accentColor }} />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="fill-current" style={{ color: "#FFD700" }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-offwhite/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
                {t.text.split(t.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span style={{ color: t.accentColor, fontWeight: 600 }}>{t.highlight}</span>
                    )}
                  </span>
                ))}
              </blockquote>

              {/* Avatar */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm"
                  style={{ background: `linear-gradient(135deg, ${t.accentColor}, rgba(0,255,255,0.5))`, color: "white" }}>
                  {t.avatar}
                </div>
                <div className="text-left">
                  <p className="font-display font-semibold text-offwhite text-sm">{t.name}</p>
                  <p className="font-mono text-xs text-offwhite/35">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center card-glass hover:border-[var(--color-neon-purple)] transition-all text-offwhite/50 hover:text-offwhite">
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setAutoplay(false); setCurrent(i); }}
                  className="transition-all duration-300"
                  style={i === current ? {
                    width: "24px", height: "4px", borderRadius: "2px",
                    background: "var(--color-neon-purple)", boxShadow: "0 0 8px rgba(160,32,240,0.6)",
                  } : {
                    width: "4px", height: "4px", borderRadius: "2px",
                    background: "rgba(245,240,235,0.2)",
                  }} />
              ))}
            </div>

            <button onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center card-glass hover:border-[var(--color-neon-purple)] transition-all text-offwhite/50 hover:text-offwhite">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
