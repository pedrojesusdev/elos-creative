"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

type PortfolioItem = {
  id: number;
  type: "image" | "video";
  category: "Fotos" | "Videos";
  title: string;
  description: string;
  src: string;
  thumb?: string;
  tags: string[];
  color: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    type: "image",
    category: "Fotos",
    title: "Festa de 15 anos — Direção Criativa",
    description: "Cobertura visual com foco em storytelling para debutante, cenografia e conteúdo para redes sociais.",
    src: "./media/aniversario-15-retrato.jpg",
    thumb: "./media/aniversario-15-retrato.jpg",
    tags: ["Evento", "Cobertura", "Storytelling"],
    color: "#A020F0",
  },
  {
    id: 2,
    type: "image",
    category: "Fotos",
    title: "Teaser Debutante",
    description: "Imagem representativa dos melhores momentos de um evento de 15 anos, otimizada para engajamento em redes sociais.",
    src: "./media/imagem-aniversario.png",
    thumb: "./media/imagem-aniversario.png",
    tags: ["Reels", "Meta Ads", "Motion"],
    color: "#00E8FF",
  },
  {
    id: 3,
    type: "image",
    category: "Fotos",
    title: "Família em branco — Ensaio lifestyle",
    description: "Ensaio familiar para conteúdo emocional e humanizado com foco em conexão e naturalidade.",
    src: "./media/familia-branco.jpg",
    thumb: "/media/familia-branco.jpg",
    tags: ["Rebranding", "Editorial", "Digital"],
    color: "#A020F0",
  },
  {
    id: 4,
    type: "image",
    category: "Fotos",
    title: "Cenografia roxa — Mesa principal",
    description: "Captação do cenário completo com paleta roxa e elementos decorativos para peças de divulgação.",
    src: "./media/cenario-roxo-15.jpg",
    thumb: "/media/cenario-roxo-15.jpg",
    tags: ["Instagram", "Conteúdo", "Estética"],
    color: "#00E8FF",
  },
  {
    id: 5,
    type: "image",
    category: "Fotos",
    title: "Chá revelação — ensaio gestante",
    description: "Registro sensível do casal em cenário clean para narrativa de maternidade e família.",
    src: "./media/cha-revelacao-casal.jpg",
    thumb: "/media/cha-revelacao-casal.jpg",
    tags: ["Vídeo", "Storytelling", "Branding"],
    color: "#A020F0",
  },
  {
    id: 6,
    type: "image",
    category: "Fotos",
    title: "Teaser casamento",
    description: "Imagem com foco em impacto inicial para impulsionamento nas redes sociais.",
    src: "./media/imagem-noiva.png",
    thumb: "./media/imagem-noiva.png",
    tags: ["Lançamento", "Reels", "Estratégia"],
    color: "#00E8FF",
  },
];

const categories = ["Todos", "Fotos", "Videos"];

const fallbackMedia = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'%3E%3Crect width='1200' height='900' fill='%231A1A1A'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23F5F5F5' font-family='Arial' font-size='40'%3EM%C3%ADdia%20Elos%3C/text%3E%3C/svg%3E";

function PortfolioCard({ item, onClick }: { item: PortfolioItem; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10"
      onClick={onClick}
      whileHover={{ y: -4 }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-card">
        {item.type === "video" ? (
          <VideoPlayer src={item.src} poster={item.thumb} autoPlay muted loop className="h-full" />
        ) : (
          <motion.img
            src={item.thumb}
            alt={item.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.45 }}
            loading="lazy"
            onError={(e) => { e.currentTarget.src = fallbackMedia; }}
          />
        )}
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5"
        style={{ background: "linear-gradient(to top, rgba(18,18,18,0.88) 30%, rgba(18,18,18,0.2) 100%)" }}>
        <span className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: item.color }}>{item.category}</span>
        <h3 className="font-display font-bold text-base text-offwhite mb-1">{item.title}</h3>
      </div>

      <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: "rgba(26,26,26,0.65)", border: "1px solid rgba(245,245,245,0.25)" }}>
        {item.type === "video" ? <Play size={14} style={{ color: item.color }} /> : <ExternalLink size={14} style={{ color: item.color }} />}
      </div>
    </motion.div>
  );
}

function Lightbox({ item, onClose, onPrev, onNext }: {
  item: PortfolioItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ background: "rgba(10,10,10,0.88)", backdropFilter: "blur(14px)" }} onClick={onClose}>
      <motion.div className="relative max-w-5xl w-full" initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 p-2 text-offwhite/60 hover:text-offwhite transition-colors z-10"><X size={24} /></button>

        <div className="rounded-2xl overflow-hidden card-glass">
          {item.type === "video" ? (
            <VideoPlayer src={item.src} poster={item.thumb} autoPlay loop muted={false} showControls className="max-h-[65vh]" />
          ) : (
            <img src={item.src} alt={item.title} className="w-full object-contain max-h-[65vh]" onError={(e) => { e.currentTarget.src = fallbackMedia; }} />
          )}

          <div className="p-6 border-t border-white/10">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: item.color }}>{item.category}</span>
            <h3 className="font-display font-bold text-xl text-offwhite mb-2">{item.title}</h3>
            <p className="text-offwhite/60 text-sm">{item.description}</p>
          </div>
        </div>

        <button onClick={onPrev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center card-glass transition-all"><ChevronLeft size={18} /></button>
        <button onClick={onNext} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center card-glass transition-all"><ChevronRight size={18} /></button>
      </motion.div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeCategory === "Todos"
    ? portfolioItems
    : portfolioItems.filter((i) => i.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,232,255,0.05) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <Reveal><span className="section-label">Portfólio</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-black text-display-lg text-offwhite">
                Projetos em <span style={{ color: "var(--color-neon-purple)" }}>foto</span> e <span style={{ color: "var(--color-neon-cyan)" }}>vídeo</span>.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2} direction="left">
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300"
                  style={activeCategory === cat ? {
                    background: "rgba(160,32,240,0.85)",
                    color: "#F5F5F5",
                  } : {
                    background: "rgba(245,245,245,0.07)",
                    color: "rgba(245,245,245,0.7)",
                    border: "1px solid rgba(245,245,245,0.1)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.3 }}>
                <PortfolioCard item={item} onClick={() => setLightboxIdx(idx)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && filtered[lightboxIdx] && (
          <Lightbox
            item={filtered[lightboxIdx]}
            onClose={() => setLightboxIdx(null)}
            onPrev={() => setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length)}
            onNext={() => setLightboxIdx((lightboxIdx + 1) % filtered.length)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
