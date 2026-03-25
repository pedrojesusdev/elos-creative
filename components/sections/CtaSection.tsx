"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { Send, ArrowRight, CheckCircle } from "lucide-react";

export function CtaSection() {
  const [form, setForm] = useState({ name: "", email: "", brand: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/8 rounded-xl px-5 py-4 text-sm text-offwhite placeholder-offwhite/25 font-body focus:outline-none focus:border-[var(--color-neon-purple)] focus:bg-white/[0.06] transition-all duration-300";

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
                  <p className="text-sm font-semibold text-offwhite">+150 marcas já transformaram</p>
                  <p className="text-xs text-offwhite/40 font-mono">sua presença digital com a Elos</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal delay={0.2} direction="left">
            <div className="card-glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Card glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(160,32,240,0.08) 0%, transparent 70%)" }} />

              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5 relative">
                  <div>
                    <label className="block font-mono text-xs tracking-widest uppercase text-offwhite/30 mb-2">
                      Seu nome
                    </label>
                    <input
                      className={inputClass}
                      placeholder="Como podemos te chamar?"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs tracking-widest uppercase text-offwhite/30 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs tracking-widest uppercase text-offwhite/30 mb-2">
                      Sua marca
                    </label>
                    <input
                      className={inputClass}
                      placeholder="Nome da empresa ou projeto"
                      value={form.brand}
                      onChange={(e) => setForm({ ...form, brand: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs tracking-widest uppercase text-offwhite/30 mb-2">
                      Como podemos ajudar?
                    </label>
                    <textarea
                      className={`${inputClass} resize-none`}
                      rows={4}
                      placeholder="Fale sobre seus objetivos, desafios ou o que você precisa..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(0,255,255,0.1)", border: "1px solid rgba(0,255,255,0.3)" }}>
                    <CheckCircle size={28} style={{ color: "var(--color-neon-cyan)" }} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-offwhite mb-3">
                    Mensagem recebida!
                  </h3>
                  <p className="text-offwhite/50 text-sm leading-relaxed">
                    Obrigada pelo contato. Nossa equipe vai analisar suas informações e
                    retornar em até <span style={{ color: "var(--color-neon-cyan)" }}>24 horas úteis</span>.
                  </p>
                </motion.div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
