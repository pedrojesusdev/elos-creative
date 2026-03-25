"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

type PortfolioItem = {
  id: number;
  type: "image" | "video";
  category: "Branding" | "Social Media" | "Design";
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
    category: "Branding",
    title: "Marca Aurora — Identidade Visual Completa",
    description: "Criação de identidade visual para startup de wellness, incluindo logo, paleta e guia de marca.",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&q=80",
    thumb: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&q=75",
    tags: ["Branding", "Logo", "Guidelines"],
    color: "#A020F0",
  },
  {
    id: 2,
    type: "video",
    category: "Social Media",
    title: "Reels de Conversão — Campanha Beauty",
    description: "Série de vídeos curtos para campanha de performance, com foco em retenção nos primeiros 3 segundos.",
    src: "https://player.vimeo.com/external/368763602.sd.mp4?s=3368e63efef8f34f97a6bca40d0132f31f3e3f9d&profile_id=139&oauth2_token_id=57447761",
    thumb: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&q=80",
    tags: ["Reels", "Meta Ads", "Motion"],
    color: "#00E8FF",
  },
  {
    id: 3,
    type: "image",
    category: "Design",
    title: "Estúdio Lumina — Rebranding",
    description: "Reposicionamento visual completo para estúdio de fotografia premium.",
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1400&q=80",
    thumb: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=700&q=75",
    tags: ["Rebranding", "Editorial", "Digital"],
    color: "#A020F0",
  },
  {
    id: 4,
    type: "image",
    category: "Branding",
    title: "Arquiteta Renata Vaz — Presença Digital",
    description: "Direção visual e planejamento de conteúdo para arquitetura autoral.",
    src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1400&q=80",
    thumb: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=700&q=75",
    tags: ["Instagram", "Conteúdo", "Estética"],
    color: "#00E8FF",
  },
  {
    id: 5,
    type: "video",
    category: "Design",
    title: "Behind the Brand — Captação & Edição",
    description: "Vídeo manifesto para reforçar posicionamento e autoridade de marca no digital.",
    src: "https://player.vimeo.com/external/434045526.sd.mp4?s=f7e7aa3ef7db4be6d26f737e7981c2f7f2369d6d&profile_id=139&oauth2_token_id=57447761",
    thumb: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900&q=80",
    tags: ["Vídeo", "Storytelling", "Branding"],
    color: "#A020F0",
  },
  {
    id: 6,
    type: "image",
    category: "Social Media",
    title: "EduTech Nexo — Lançamento de Produto",
    description: "Estratégia e criação para lançamento de plataforma EdTech com alta conversão de leads.",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1400&q=80",
    thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&q=75",
    tags: ["Lançamento", "Reels", "Estratégia"],
    color: "#00E8FF",
  },
];

const categories = ["Todos", "Branding", "Social Media", "Design"];

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
            <img src={item.src} alt={item.title} className="w-full object-contain max-h-[65vh]" />
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
