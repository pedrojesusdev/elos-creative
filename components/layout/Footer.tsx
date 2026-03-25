import Link from "next/link";
import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const services = ["Social Media Management", "Design Criativo", "Estratégia Digital", "Branding", "Identidade Visual"];
const links = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "E-mail", href: "mailto:oi@eloscreative.com.br", icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0A0A0A]">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(160,32,240,0.6), rgba(0,255,255,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-sm flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #A020F0, #00FFFF)" }}>
                <span className="font-display font-black text-white">E</span>
              </div>
              <span className="font-display font-bold text-xl">
                Elos<span style={{ color: "var(--color-neon-purple)" }}>.</span>
              </span>
            </div>
            <p className="text-offwhite/50 text-sm leading-relaxed max-w-xs">
              Conectamos marcas às pessoas certas. Design com estratégia, resultados com propósito.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-xs tracking-widest text-offwhite/30 uppercase mb-4">Serviços</p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-offwhite/50 hover:text-offwhite transition-colors cursor-pointer">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs tracking-widest text-offwhite/30 uppercase mb-4">Contato</p>
            <ul className="space-y-3">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-offwhite/50 hover:text-offwhite group transition-colors">
                    <Icon size={14} className="group-hover:text-[var(--color-neon-cyan)] transition-colors" />
                    {label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-offwhite/25 font-mono">
            © {new Date().getFullYear()} Elos Creative. Todos os direitos reservados.
          </p>
          <p className="text-xs text-offwhite/25 font-mono">
            Feito com <span style={{ color: "var(--color-neon-purple)" }}>■</span> e muita estratégia.
          </p>
        </div>
      </div>
    </footer>
  );
}
