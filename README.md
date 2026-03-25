# Elos Creative — Website Institucional

Website institucional completo para agência de social media, construído com Next.js 14 App Router, Tailwind CSS e Framer Motion.

---

## 🚀 Quick Start

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura de Pastas

```
elos-creative/
├── app/
│   ├── globals.css          # CSS global, variáveis, utilitários
│   ├── layout.tsx           # Root layout com Navbar, Footer, Cursor
│   └── page.tsx             # Home page
│
├── components/
│   ├── animations/
│   │   ├── PageTransition.tsx   # Transição suave entre páginas
│   │   └── Reveal.tsx           # Scroll reveal com Framer Motion
│   │
│   ├── layout/
│   │   ├── Navbar.tsx           # Navegação com glassmorphism
│   │   └── Footer.tsx           # Footer moderno
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero com canvas animado + partículas
│   │   ├── StatsSection.tsx     # Ticker marquee com serviços
│   │   ├── AboutSection.tsx     # Sobre com progress bars animadas
│   │   ├── ServicesSection.tsx  # Cards de serviços expansíveis
│   │   ├── PortfolioSection.tsx # Grid com filtros + lightbox
│   │   ├── TestimonialsSection.tsx # Carrossel de depoimentos
│   │   └── CtaSection.tsx       # Formulário de contato + CTA
│   │
│   └── ui/
│       ├── CustomCursor.tsx     # Cursor personalizado com neon
│       ├── VideoPlayer.tsx      # Player de vídeo sem som
│       ├── MagneticButton.tsx   # Botão com efeito magnético
│       └── GlowOrb.tsx          # Orb decorativo animado
│
├── lib/
│   └── utils.ts             # Helpers (cn, formatNumber)
│
└── public/
    ├── images/              # Imagens estáticas
    └── videos/              # Vídeos para o portfólio
```

---

## 🎨 Identidade Visual

| Token | Valor | Uso |
|-------|-------|-----|
| `offwhite` | `#F5F0EB` | Texto principal |
| `graphite` | `#1A1A1A` | Backgrounds secundários |
| `neon.purple` | `#A020F0` | Cor primária de destaque |
| `neon.cyan` | `#00FFFF` | Cor secundária de destaque |
| `surface.dark` | `#0D0D0D` | Background principal |
| `surface.card` | `#161616` | Cards e superfícies elevadas |

**Fontes:**
- `Syne` — Display / headings (futurista, geométrica)
- `DM Sans` — Body text (legível, moderna)
- `Space Mono` — Labels, badges, código (monospace com personalidade)

---

## ✨ Animações Implementadas

- **Canvas particles** — Hero section com partículas conectadas e orbs flutuantes
- **Scan line** — Efeito futurista de varredura no hero
- **Scroll reveal** — `Reveal` e `StaggerReveal` com Intersection Observer
- **Page transition** — Fade + slide suave entre páginas
- **Marquee ticker** — Texto correndo horizontal na seção de stats
- **Progress bars** — Animadas ao entrar na viewport
- **Lightbox** — Modal com spring animation para o portfólio
- **Portfolio filter** — Transição fluida com `AnimatePresence`
- **Testimonials carousel** — Auto-play com fade transition
- **Text shimmer** — Gradiente animado nos títulos principais
- **Magnetic button** — Efeito de atração no hover
- **Custom cursor** — Cursor com dot + ring seguidor suave
- **Glow pulse** — Efeitos neon em ícones e bordas

---

## 🔧 Adicionando Conteúdo

### Portfólio
Edite o array `portfolioItems` em `components/sections/PortfolioSection.tsx`:

```ts
{
  id: 7,
  type: "image",           // "image" | "video"
  category: "Branding",    // Filtra pelos botões
  title: "Nome do projeto",
  description: "Descrição do projeto.",
  src: "/images/projeto-full.jpg",  // Imagem full-res para lightbox
  thumb: "/images/projeto-thumb.jpg", // Thumbnail para o grid
  tags: ["Tag1", "Tag2"],
  color: "#A020F0",        // Cor do badge de categoria
}
```

### Depoimentos
Edite o array `testimonials` em `components/sections/TestimonialsSection.tsx`.

### Serviços
Edite o array `services` em `components/sections/ServicesSection.tsx`.

---

## 📹 Vídeos

Para adicionar vídeos ao portfólio, use o componente `VideoPlayer`:

```tsx
import { VideoPlayer } from "@/components/ui/VideoPlayer";

<VideoPlayer
  src="/videos/meu-projeto.mp4"
  poster="/images/poster.jpg"
  autoPlay       // muted por padrão
  loop
  showControls   // botão play/pause opcional
  aspectRatio="16/9"
/>
```

Os vídeos são sempre `muted` — conformidade com políticas de autoplay dos browsers.

---

## 🚢 Deploy (Vercel)

```bash
# 1. Push para GitHub
git init && git add . && git commit -m "feat: elos creative website"
git remote add origin SEU_REPO && git push -u origin main

# 2. Importar no Vercel
# https://vercel.com/new → selecione o repo → Deploy
```

Variáveis de ambiente necessárias para produção:
```
# Nenhuma por padrão — adicione conforme integrar serviços externos
# Ex: NEXT_PUBLIC_EMAILJS_KEY, RESEND_API_KEY, etc.
```

---

## 🧩 Decisões Técnicas

| Decisão | Motivo |
|---------|--------|
| **Next.js App Router** | Server Components, layout aninhados, melhor performance |
| **Tailwind CSS** | Desenvolvimento rápido, purge automático, design tokens |
| **Framer Motion** | Animações físicas (spring), `AnimatePresence`, `useInView` |
| **Canvas API** | Partículas no hero sem dependências extras, performance nativa |
| **`useInView` + `once`** | Animações de scroll triggadas uma vez → sem re-trigger |
| **`AnimatePresence`** | Filtro de portfólio e lightbox com exit animations fluidas |
| **Fontes via Google Fonts** | Syne + DM Sans — caráter editorial sem peso de bundle |
| **CSS Variables** | Consistência de cores, fácil theming futuro (dark/light) |
| **Cursor customizado** | Diferencial visual de agência premium, sem libs externas |
