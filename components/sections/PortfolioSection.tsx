"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

// Portfolio items — easily swappable with real content
const portfolioItems = [
  {
    id: 1,
    type: "image",
    category: "Branding",
    title: "Marca Aurora — Identidade Visual Completa",
    description: "Criação de identidade visual para startup de wellness, incluindo logo, paleta e guia de marca.",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=70",
    tags: ["Branding", "Logo", "Guidelines"],
    color: "#A020F0",
  },
  {
    id: 2,
    type: "image",
    category: "Social Media",
    title: "Campanha Mês do Aniversário — Loja Âmbar",
    description: "Série de posts para campanha sazonal com aumento de 340% no engajamento.",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=70",
    tags: ["Instagram", "Stories", "Feed"],
    color: "#00FFFF",
  },
  {
    id: 3,
    type: "image",
    category: "Design",
    title: "Estúdio Lumina — Rebranding",
    description: "Reposicionamento visual completo para estúdio de fotografia premium.",
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&q=70",
    tags: ["Rebranding", "Motion", "Editorial"],
    color: "#A020F0",
  },
  {
    id: 4,
    type: "image",
    category: "Branding",
    title: "Arquiteto Renata Vaz — Presença Digital",
    description: "Desenvolvimento de presença digital sofisticada para escritório de arquitetura.",
    src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&q=70",
    tags: ["LinkedIn", "Instagram", "Conteúdo"],
    color: "#00FFFF",
  },
  {
    id: 5,
    type: "image",
    category: "Design",
    title: "FoodLab — Identidade & Embalagem",
    description: "Sistema visual completo para foodtech, do logo ao design de embalagem.",
    src: "https://images.unsplash.com/photo-1636761220639-88f7fa6a5af4?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1636761220639-88f7fa6a5af4?w=400&q=70",
    tags: ["Packaging", "Branding", "Tipografia"],
    color: "#A020F0",
  },
  {
    id: 6,
    type: "image",
    category: "Social Media",
    title: "EduTech Nexo — Lançamento de Produto",
    description: "Estratégia e criação para lançamento de plataforma EdTech com 12k novos seguidores.",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=70",
    tags: ["Lançamento", "Reels", "Estratégia"],
    color: "#00FFFF",
  },
];

const categories = ["Todos", "Branding", "Social Media", "Design"];

function PortfolioCard({ item, onClick }: { item: typeof portfolioItems[0]; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-surface-card">
        <motion.img
          src={item.thumb}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5"
        style={{ background: "linear-gradient(to top, rgba(13,13,13,0.92) 40%, rgba(13,13,13,0.3) 100%)" }}>
        <span className="font-mono text-xs tracking-widest uppercase mb-2"
          style={{ color: item.color }}>
          {item.category}
        </span>
        <h3 className="font-display font-bold text-base text-offwhite mb-1">{item.title}</h3>
        <div className="flex items-center gap-2 mt-2">
          {item.tags.slice(0, 2).map((t) => (
            <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-offwhite/60">{t}</span>
          ))}
        </div>

        {/* Play / View icon */}
        <div className="absolute top-4 right-4">
          {item.type === "video" ? (
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(0,255,255,0.2)", border: "1px solid rgba(0,255,255,0.4)" }}>
              <Play size={14} style={{ color: "var(--color-neon-cyan)" }} />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(160,32,240,0.2)", border: "1px solid rgba(160,32,240,0.4)" }}>
              <ExternalLink size={14} style={{ color: "var(--color-neon-purple)" }} />
            </div>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />
    </motion.div>
  );
}

function Lightbox({ item, onClose, onPrev, onNext }: {
  item: typeof portfolioItems[0];
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
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-5xl w-full"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-offwhite/50 hover:text-offwhite transition-colors z-10">
          <X size={24} />
        </button>

        <div className="rounded-2xl overflow-hidden card-glass">
          {item.type === "video" ? (
            <video src={item.src} autoPlay loop muted playsInline className="w-full aspect-video object-cover" />
          ) : (
            <img src={item.src} alt={item.title} className="w-full object-contain max-h-[65vh]" />
          )}

          <div className="p-6 border-t border-white/5">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: item.color }}>
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-xl text-offwhite mb-2">{item.title}</h3>
                <p className="text-offwhite/50 text-sm">{item.description}</p>
              </div>
              <div className="flex gap-2 ml-4">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(245,240,235,0.5)" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <button onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center card-glass hover:border-[var(--color-neon-purple)] transition-all">
          <ChevronLeft size={18} />
        </button>
        <button onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center card-glass hover:border-[var(--color-neon-purple)] transition-all">
          <ChevronRight size={18} />
        </button>
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
        style={{ background: "radial-gradient(ellipse, rgba(0,255,255,0.04) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <Reveal><span className="section-label">Portfólio</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-black text-display-lg text-offwhite">
                Trabalhos que{" "}
                <span style={{ color: "var(--color-neon-purple)", textShadow: "0 0 30px rgba(160,32,240,0.5)" }}>
                  falam
                </span>{" "}
                por si.
              </h2>
            </Reveal>
          </div>

          {/* Filter pills */}
          <Reveal delay={0.2} direction="left">
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300"
                  style={activeCategory === cat ? {
                    background: "var(--color-neon-purple)",
                    color: "white",
                    boxShadow: "0 0 20px rgba(160,32,240,0.4)",
                  } : {
                    background: "rgba(255,255,255,0.05)",
                    color: "rgba(245,240,235,0.5)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <PortfolioCard item={item} onClick={() => setLightboxIdx(idx)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
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
