"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Vanessa Cabral",
    role: "Magic Trip Viagens",
    avatar: "VC",
    text: "O trabalho de filmmaker realizado por Helena tem sido essencial para fortalecer a imagem da minha agência, transmitir emoção e valorizar cada experiência que entregamos aos nossos clientes. A qualidade dos vídeos, o olhar criativo nas captações e a forma como cada detalhe é transformado em conteúdo fazem toda a diferença na apresentação. O serviço dela é muito especial, pois ela consegue fazer a gente transmitir tudo da forma correta e essencial para os meus clientes. É um trabalho que não mostra apenas imagens, mas desperta desejo, transmite confiança e aproxima ainda mais os clientes da nossa proposta.",
    accentColor: "#A020F0",
  },
  {
    name: "Day Araújo",
    role: "D'comfort Ortobom",
    avatar: "DA",
    text: "Helena, eu precisava te falar isso… Tô gostando MUITO do teu trabalho! Você tá conseguindo transformar exatamente o que eu penso em vídeo, e isso faz toda diferença. Obrigada pelo cuidado e dedicação, de verdade",
    accentColor: "#00FFFF",
  },
  {
    name: "Helida Vinhas",
    role: "salão el shammah",
    avatar: "HV",
    text: "Helena parabéns pela paciência,os vídeos que vc fez pra mim ,ficaram ótimas tanto às edições como as imagens,muito obrigada.",
    accentColor: "#A020F0",
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

              {/* Text */}
              <p className="font-text font-medium text-offwhite text-lg italic">
                "{t.text}"
              </p>

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
