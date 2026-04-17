import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Globe, CheckCircle2, Package, Zap, Search, Handshake, Sprout, Microscope, ClipboardList, Ship, ArrowRight, ArrowDown, MapPin, Star, Phone } from 'lucide-react'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import '../../styles/Products.css'
import cat1 from '../../assets/images/cat1.webp'
import cat2 from '../../assets/images/cat2.webp'
import cat3 from '../../assets/images/cat3.webp'
import proj1 from '../../assets/images/project-1.webp'
import proj2 from '../../assets/images/project-2.webp'
import proj3 from '../../assets/images/project-3.jpg'
import qualityImg from '../../assets/images/quality.png'

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
const EASE   = [0.16, 1, 0.3, 1]
const SPRING = { type: 'spring', stiffness: 280, damping: 28, mass: 1 }
const PRIMARY = '#1f7a5a'

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 40, filter: 'blur(4px)' },
  visible: (d = 0) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.75, ease: EASE, delay: d },
  }),
}
const fadeLeft = {
  hidden:  { opacity: 0, x: -48, filter: 'blur(4px)' },
  visible: (d = 0) => ({
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.75, ease: EASE, delay: d },
  }),
}
const fadeRight = {
  hidden:  { opacity: 0, x: 48, filter: 'blur(4px)' },
  visible: (d = 0) => ({
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.75, ease: EASE, delay: d },
  }),
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
/* NOTE: staggerItem defines its OWN transition — never put transition={SPRING}
   on the same element that uses variants={staggerItem}, or the spring
   will override the smooth ease and kill the stagger delays.
   Instead use the nested-wrapper pattern: outer div = entry, inner div = hover. */
const staggerItem = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(3px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.6, ease: EASE } },
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: 'grains',
    label: 'Grains',
    image: cat1,
    accent: '#16a34a',
    tagline: 'Staple commodities, global reach.',
    desc: "We source and trade premium-grade grains from the world's most fertile agricultural regions, ensuring consistent quality and reliable supply chains for our partners worldwide.",
    products: ['Premium Basmati Rice', 'Long Grain White Rice', 'Hard Red Wheat', 'Soft White Wheat', 'Raw Cane Sugar', 'Refined White Sugar', 'All-Purpose Flour', 'Semolina'],
    stat: { value: '200K+', label: 'MT Annual Volume' },
    origin: 'South Asia · East Africa · South America',
  },
  {
    id: 'oils',
    label: 'Edible Oils',
    image: cat2,
    accent: '#ca8a04',
    tagline: 'Pure, refined, world-class.',
    desc: 'From cold-pressed to fully refined, our edible oils portfolio covers every grade and specification. Sourced from certified producers and shipped to exact customer standards.',
    products: ['Refined Vegetable Oil', 'Sunflower Oil', 'Canola Oil', 'Soybean Oil', 'Mustard Oil', 'Palm Olein', 'Groundnut Oil', 'Coconut Oil'],
    stat: { value: '50K+', label: 'MT Oil Traded' },
    origin: 'Ukraine · Malaysia · Argentina · India',
  },
  {
    id: 'pulses',
    label: 'Pulses & Legumes',
    image: cat3,
    accent: '#dc2626',
    tagline: "Nature's protein, expertly traded.",
    desc: 'A comprehensive range of pulses, lentils and legumes sourced directly from farms. Our stringent grading and quality control ensures every shipment meets international food-safety standards.',
    products: ['Red Lentils (Masoor)', 'Green Moong Dal', 'Yellow Split Peas', 'Chickpeas (Kabuli)', 'Black Lentils (Urad)', 'Pigeon Peas (Toor)', 'Kidney Beans', 'Green Peas'],
    stat: { value: '80K+', label: 'MT Pulses Shipped' },
    origin: 'Canada · Australia · Ethiopia · India',
  },
]

const ALL_PRODUCTS = [
  { id: 1, name: 'Basmati Rice',          cat: 'grains', img: proj2, grade: 'Premium A',  origin: 'India / Pakistan',   tag: 'Best Seller'  },
  { id: 2, name: 'Refined Sunflower Oil', cat: 'oils',   img: proj1, grade: 'Grade 1',    origin: 'Ukraine',            tag: 'Popular'      },
  { id: 3, name: 'Red Lentils',           cat: 'pulses', img: proj3, grade: 'Premium',    origin: 'Canada / Australia', tag: 'High Demand'  },
  { id: 4, name: 'White Sugar ICUMSA 45', cat: 'grains', img: cat1,  grade: 'ICUMSA 45',  origin: 'Brazil',             tag: 'Export Ready' },
  { id: 5, name: 'Palm Olein RBD',        cat: 'oils',   img: cat2,  grade: 'RBD Grade',  origin: 'Malaysia',           tag: 'Bulk'         },
  { id: 6, name: 'Chickpeas Kabuli',      cat: 'pulses', img: cat3,  grade: '9mm+',       origin: 'Australia',          tag: 'Premium'      },
  { id: 7, name: 'Hard Red Wheat',        cat: 'grains', img: proj2, grade: 'No. 1 HRW',  origin: 'USA / Canada',       tag: 'Export Ready' },
  { id: 8, name: 'Canola Oil',            cat: 'oils',   img: proj1, grade: 'Grade A',    origin: 'Canada',             tag: 'Organic Opt.' },
  { id: 9, name: 'Green Moong Dal',       cat: 'pulses', img: proj3, grade: 'Bold Grade', origin: 'India',              tag: 'Premium'      },
]

const STATS = [
  { value: 35,  suffix: '+',  label: 'Countries Served'    },
  { value: 20,  suffix: '+',  label: 'Years Experience'    },
  { value: 500, suffix: 'K+', label: 'MT Traded Annually'  },
  { value: 150, suffix: '+',  label: 'Global Partners'     },
]

const WHY_ITEMS = [
  { icon: <Globe size={20} />,       title: 'Global Sourcing Network',  desc: 'Direct relationships with certified farms and producers across 30+ countries ensuring the best origin pricing.'         },
  { icon: <CheckCircle2 size={20} />,title: 'Quality Assurance',         desc: 'Every shipment undergoes rigorous third-party testing at origin and destination. ISO & HACCP certified processes.'     },
  { icon: <Package size={20} />,     title: 'Flexible Packaging',        desc: 'From 1kg retail packs to 50MT bulk containers — we handle every specification, label, and branding requirement.'      },
  { icon: <Zap size={20} />,         title: 'Fast Execution',             desc: 'Streamlined logistics with pre-arranged freight and documentation ensures on-time delivery, every time.'              },
  { icon: <Search size={20} />,      title: 'Full Traceability',          desc: 'Farm-to-port traceability with documented chain of custody, phytosanitary certificates, and COAs.'                  },
  { icon: <Handshake size={20} />,   title: 'Long-Term Partnership',      desc: 'We build lasting relationships — with transparent pricing, consistent quality, and dedicated account management.'    },
]

const REGIONS = [
  { name: 'Middle East',        markets: ['UAE', 'Saudi Arabia', 'Kuwait', 'Qatar'],             accent: '#f59e0b' },
  { name: 'Sub-Saharan Africa', markets: ['Nigeria', 'Kenya', 'Ethiopia', 'Tanzania'],           accent: '#22c55e' },
  { name: 'South & East Asia',  markets: ['India', 'Pakistan', 'Sri Lanka', 'Bangladesh'],       accent: '#3b82f6' },
  { name: 'Europe',             markets: ['UK', 'Netherlands', 'Germany', 'Spain'],              accent: '#8b5cf6' },
]

/* ─────────────────────────────────────────────
   SHARED HELPERS
───────────────────────────────────────────── */
function InView({ children, variants = fadeUp, delay = 0, className = '', style = {} }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-72px' })
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

function SectionLabel({ text }) {
  return (
    <span className="prod-section-label">
      <span className="prod-section-label-dot" />
      {text}
    </span>
  )
}

/* Animated counter hook */
function useCounter(target, inView, duration = 1.6) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

/* ─────────────────────────────────────────────
   3D TILT CARD
───────────────────────────────────────────── */
function TiltCard({ children, className = '', style = {} }) {
  const ref    = useRef(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const sX     = useSpring(mouseX, SPRING)
  const sY     = useSpring(mouseY, SPRING)
  const rotX   = useTransform(sY, [0, 1], [5, -5])
  const rotY   = useTransform(sX, [0, 1], [-6, 6])

  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mouseX.set((e.clientX - r.left) / r.width)
    mouseY.set((e.clientY - r.top)  / r.height)
  }
  const handleLeave = () => { mouseX.set(0.5); mouseY.set(0.5) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ══════════════════════════════════════════════
   SECTION 1 — HERO
══════════════════════════════════════════════ */
function HeroSection() {
  return (
    <div className="prod-hero">
      <div className="prod-hero-bg" />
      <div className="prod-hero-dots" />

      <motion.div className="prod-orb prod-orb--1"
        animate={{ y: [0, -28, 0], x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="prod-orb prod-orb--2"
        animate={{ y: [0, 22, 0], x: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div className="prod-orb prod-orb--3"
        animate={{ y: [0, -16, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="prod-particle"
          style={{
            left:   `${8 + (i * 7.5) % 88}%`,
            top:    `${12 + (i * 13) % 76}%`,
            width:  `${3 + (i % 3)}px`,
            height: `${3 + (i % 3)}px`,
            opacity: 0.25 + (i % 4) * 0.1,
          }}
          animate={{ y: [0, -24, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      <div className="container prod-hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="prod-hero-eyebrow"
        >
          <span className="prod-hero-eyebrow-dot" />
          Premium Commodities · Global Trade
        </motion.div>

        <div className="prod-hero-headline-wrap">
          {['Our', 'Product', 'Portfolio.'].map((word, i) => (
            <div key={word} style={{ overflow: 'hidden', display: 'inline-block' }}>
              <motion.span
                className="prod-hero-word"
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.25 + i * 0.14 }}
              >
                {word}&nbsp;
              </motion.span>
            </div>
          ))}
        </div>

        <motion.p
          className="prod-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.7, ease: EASE }}
        >
          From fertile farmlands to global ports — we trade, process and deliver premium<br className="prod-hero-br" />
          agricultural commodities across 35+ countries with unmatched reliability.
        </motion.p>

        <motion.div
          className="prod-hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
        >
          <motion.a
            href="#categories"
            className="prod-btn-primary"
            whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(31,122,90,0.40)' }}
            whileTap={{ scale: 0.96 }}
            transition={SPRING}
          >
            Explore Categories
            <ArrowDown size={14} strokeWidth={2.5} />
          </motion.a>

          <motion.div
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.96 }}
            transition={SPRING}
          >
            <Link to="/contact" className="prod-btn-ghost">
              Request a Quote
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </motion.div>

        {/* ── hero stat cards ──
            outer motion.div = stagger entry (uses staggerItem's own transition)
            inner motion.div = hover lift (uses SPRING, no conflict)              */}
        <motion.div
          className="prod-hero-stats"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {[
            { n: '35+',   t: 'Countries'  },
            { n: '20+',   t: 'Years'      },
            { n: '500K+', t: 'MT / Year'  },
            { n: '150+',  t: 'Partners'   },
          ].map((s, i) => (
            <motion.div key={i} variants={staggerItem}>
              <motion.div
                className="prod-hero-stat-card"
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(31,122,90,0.18)' }}
                transition={SPRING}
              >
                <div className="prod-hero-stat-n">{s.n}</div>
                <div className="prod-hero-stat-t">{s.t}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="prod-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.div
          className="prod-scroll-dot"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   SECTION 2 — CATEGORY SHOWCASE
══════════════════════════════════════════════ */
function CategoriesSection() {
  const [active, setActive] = useState(0)
  const cat = CATEGORIES[active]

  return (
    <div id="categories" className="prod-section prod-section--alt">
      <div className="container">
        <InView variants={fadeUp} style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel text="Product Categories" />
          <h2 className="prod-section-title">
            Three Core<br /><span className="prod-title-accent">Commodity Lines</span>
          </h2>
          <p className="prod-section-sub">
            Carefully curated product lines covering the world's most essential food commodities.
          </p>
        </InView>

        <InView variants={fadeUp} delay={0.1} style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <div className="prod-tabs">
            {CATEGORIES.map((c, i) => (
              <motion.button
                key={c.id}
                className={`prod-tab ${active === i ? 'prod-tab--active' : ''}`}
                onClick={() => setActive(i)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={SPRING}
                style={active === i ? { '--tab-accent': c.accent } : {}}
              >
                {active === i && (
                  <motion.div
                    className="prod-tab-bg"
                    layoutId="tab-bg"
                    style={{ background: c.accent + '18', border: `1.5px solid ${c.accent}35` }}
                    transition={SPRING}
                  />
                )}
                <span className="prod-tab-label">{c.label}</span>
              </motion.button>
            ))}
          </div>
        </InView>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="prod-cat-panel"
          >
            <TiltCard className="prod-cat-image-wrap">
              <img src={cat.image} alt={cat.label} className="prod-cat-image" />
              <div className="prod-cat-image-overlay" style={{ background: `linear-gradient(160deg, transparent 30%, ${cat.accent}33 100%)` }} />
              <div className="prod-cat-badge" style={{ background: cat.accent + '18', border: `1.5px solid ${cat.accent}40`, color: cat.accent }}>
                {cat.stat.value}
                <span>{cat.stat.label}</span>
              </div>
            </TiltCard>

            <div className="prod-cat-content">
              <span className="prod-cat-tagline" style={{ color: cat.accent }}>— {cat.tagline}</span>
              <h3 className="prod-cat-title">{cat.label}</h3>
              <p className="prod-cat-desc">{cat.desc}</p>

              <div className="prod-cat-origin">
                <MapPin size={14} color={cat.accent} strokeWidth={2} />
                <span>{cat.origin}</span>
              </div>

              <div className="prod-cat-products-label">Products Include:</div>
              <motion.div
                className="prod-cat-products"
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                {cat.products.map((p) => (
                  <motion.div
                    key={p}
                    variants={staggerItem}
                    whileHover={{ x: 4 }}
                    className="prod-cat-product-item"
                    style={{ '--item-accent': cat.accent }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="prod-cat-product-dot" style={{ background: cat.accent }} />
                    {p}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                whileHover={{ y: -3, boxShadow: `0 16px 40px ${cat.accent}40` }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING}
                style={{ display: 'inline-block', marginTop: 32 }}
              >
                <Link to="/contact" className="prod-btn-accent" style={{ background: cat.accent }}>
                  Enquire About {cat.label}
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   SECTION 3 — PRODUCTS GRID
══════════════════════════════════════════════ */
function ProductsGrid() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.cat === filter)

  const FILTERS = [
    { key: 'all',    label: 'All Products' },
    { key: 'grains', label: 'Grains'       },
    { key: 'oils',   label: 'Edible Oils'  },
    { key: 'pulses', label: 'Pulses'       },
  ]

  return (
    <div className="prod-section">
      <div className="container">
        <div className="prod-grid-header">
          <InView variants={fadeLeft}>
            <SectionLabel text="Full Range" />
            <h2 className="prod-section-title" style={{ marginBottom: 0 }}>
              Browse All<br /><span className="prod-title-accent">Products</span>
            </h2>
          </InView>

          <InView variants={fadeRight} delay={0.1}>
            <div className="prod-filters">
              {FILTERS.map(f => (
                <motion.button
                  key={f.key}
                  className={`prod-filter-btn ${filter === f.key ? 'prod-filter-btn--active' : ''}`}
                  onClick={() => setFilter(f.key)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={SPRING}
                >
                  {filter === f.key && (
                    <motion.div className="prod-filter-bg" layoutId="filter-bg" transition={SPRING} />
                  )}
                  <span className="prod-filter-label">{f.label}</span>
                </motion.button>
              ))}
            </div>
          </InView>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="prod-products-grid"
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ── ProductCard ──────────────────────────────
   Effect: cursor-tracked spotlight glare + dark magazine-cover reveal
   ZERO layout impact — no scale, no y, no height change.
   CTA lives in an absolutely-positioned overlay on the image.
   ─ outer motion.div → stagger entry only
   ─ inner motion.div → box-shadow / border glow via animate (state-driven, no whileHover)
   ─ glare → cursor-tracked radial spotlight
   ─ reveal panel → dark gradient slides up over image (position:absolute)            */

function ProductCard({ product }) {
  const ref       = useRef(null)
  const [hovered, setHovered] = useState(false)
  const catAccent = CATEGORIES.find(c => c.id === product.cat)?.accent || PRIMARY

  /* cursor position 0–1 for glare only (no tilt) */
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const sX     = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.6 })
  const sY     = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.6 })
  const glareX = useTransform(sX, [0, 1], ['0%', '100%'])
  const glareY = useTransform(sY, [0, 1], ['0%', '100%'])
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 40%, transparent 68%)`

  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mouseX.set((e.clientX - r.left) / r.width)
    mouseY.set((e.clientY - r.top)  / r.height)
  }
  const handleLeave = () => {
    setHovered(false)
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <motion.div variants={staggerItem}>
      <motion.div
        ref={ref}
        className="prod-product-card"
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        animate={{
          boxShadow: hovered
            ? `0 0 0 1.5px ${catAccent}60, 0 16px 52px rgba(0,0,0,0.13), 0 6px 18px ${catAccent}18`
            : '0 0 0 1.5px #eef0f3, 0 2px 16px rgba(0,0,0,0.05)',
        }}
        transition={{ duration: 0.35, ease: EASE }}
        style={{ height: '100%' }}
      >
        {/* cursor-tracked glare — no layout impact */}
        <motion.div
          className="prod-card-glare"
          style={{ background: glareBg }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* ── image area (fixed height, all hover content is absolute here) ── */}
        <div className="prod-product-img-wrap">
          <motion.img
            src={product.img}
            alt={product.name}
            className="prod-product-img"
            animate={{
              scale:  hovered ? 1.09 : 1,
              filter: hovered
                ? 'brightness(1.08) saturate(1.15)'
                : 'brightness(0.94) saturate(0.88)',
            }}
            transition={{ duration: 0.65, ease: EASE }}
          />

          {/* dark magazine-cover reveal — slides up, position:absolute → zero layout shift */}
          <motion.div
            className="prod-product-reveal-bg"
            style={{ background: `linear-gradient(to top, rgba(8,18,12,0.97) 0%, rgba(8,18,12,0.72) 55%, transparent 100%)` }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.38, ease: EASE }}
          />

          {/* reveal content — slides up from bottom edge of image */}
          <motion.div
            className="prod-product-reveal-content"
            animate={{ y: hovered ? 0 : 18, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.38, delay: 0.04, ease: EASE }}
          >
            <p className="prod-product-reveal-name">{product.name}</p>
            <Link
              to="/contact"
              className="prod-product-reveal-cta"
              style={{ borderColor: catAccent + '90', color: catAccent }}
            >
              Request Spec Sheet
              <ArrowRight size={11} strokeWidth={2.5} />
            </Link>
          </motion.div>

          {/* tag */}
          <div className="prod-product-tag" style={{ background: catAccent + '22', color: catAccent, border: `1px solid ${catAccent}40` }}>
            {product.tag}
          </div>
        </div>

        {/* ── static card body — NEVER changes size ── */}
        <div className="prod-product-body">
          <motion.div
            className="prod-product-accentline"
            animate={{ scaleX: hovered ? 1 : 0 }}
            style={{ background: catAccent }}
            transition={{ duration: 0.4, ease: EASE }}
          />

          <div className="prod-product-cat-chip" style={{ color: catAccent, background: catAccent + '12', border: `1px solid ${catAccent}22` }}>
            {product.cat.charAt(0).toUpperCase() + product.cat.slice(1)}
          </div>

          <motion.h4
            className="prod-product-name"
            animate={{ color: hovered ? catAccent : '#0f172a' }}
            transition={{ duration: 0.3 }}
          >
            {product.name}
          </motion.h4>

          <div className="prod-product-meta">
            <div className="prod-product-meta-row">
              <span className="prod-product-meta-label">Grade</span>
              <span className="prod-product-meta-value">{product.grade}</span>
            </div>
            <div className="prod-product-meta-row">
              <span className="prod-product-meta-label">Origin</span>
              <span className="prod-product-meta-value">{product.origin}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════
   SECTION 4 — STATS STRIP
══════════════════════════════════════════════ */
function StatsSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="prod-stats-section" ref={ref}>
      <div className="prod-stats-bg" />
      <motion.div
        className="prod-stats-circle prod-stats-circle--1"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: EASE }}
      />
      <motion.div
        className="prod-stats-circle prod-stats-circle--2"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.15, ease: EASE }}
      />

      <div className="container prod-stats-inner">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="prod-stats-grid"
        >
          {STATS.map((s, i) => (
            <StatCard key={i} stat={s} inView={inView} index={i} />
          ))}
        </motion.div>

        <InView variants={fadeUp} delay={0.3} style={{ textAlign: 'center', marginTop: 56 }}>
          <div className="prod-cert-strip">
            {['ISO 22000', 'HACCP', 'Organic Certified', 'Halal Certified', 'Non-GMO'].map((c) => (
              <motion.div
                key={c}
                className="prod-cert-badge"
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(31,122,90,0.15)' }}
                transition={SPRING}
              >
                <Star size={14} color={PRIMARY} strokeWidth={2} />
                {c}
              </motion.div>
            ))}
          </div>
        </InView>
      </div>
    </div>
  )
}

/* ── StatCard ─────────────────────────────────
   outer = stagger entry, inner = hover         */
function StatCard({ stat, inView, index }) {
  const count = useCounter(stat.value, inView, 1.8 + index * 0.1)
  return (
    <motion.div variants={staggerItem}>
      <motion.div
        className="prod-stat-card"
        whileHover={{ y: -8, boxShadow: '0 24px 56px rgba(255,255,255,0.1)' }}
        transition={SPRING}
      >
        <div className="prod-stat-value">{count}{stat.suffix}</div>
        <div className="prod-stat-label">{stat.label}</div>
        <div className="prod-stat-line" />
      </motion.div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════
   SECTION 5 — SOURCING PROCESS
══════════════════════════════════════════════ */
const STEPS = [
  { num: '01', icon: <Sprout size={20} />,       title: 'Origin Sourcing',     desc: 'Direct relationships with certified farms and cooperatives across prime agricultural regions worldwide.'            },
  { num: '02', icon: <Microscope size={20} />,   title: 'Quality Testing',     desc: 'Independent third-party laboratory analysis for pesticides, mycotoxins, moisture, and grade specifications.'        },
  { num: '03', icon: <ClipboardList size={20} />,title: 'Documentation',       desc: 'Full COA, phytosanitary certificates, certificates of origin, and all import/export documentation prepared.'       },
  { num: '04', icon: <Ship size={20} />,         title: 'Freight & Logistics', desc: 'Pre-arranged freight contracts with trusted carriers ensuring cost-effective, on-time delivery globally.'           },
  { num: '05', icon: <CheckCircle2 size={20} />, title: 'Delivery & Support',  desc: 'Port-to-warehouse coordination with post-delivery support and full traceability documentation retained.'            },
]

function SourcingSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div className="prod-section prod-section--alt">
      <div className="container" ref={ref}>
        <InView variants={fadeUp} style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionLabel text="From Farm to Port" />
          <h2 className="prod-section-title">
            Our Sourcing<br /><span className="prod-title-accent">Process</span>
          </h2>
          <p className="prod-section-sub" style={{ maxWidth: 520 }}>
            A rigorous, transparent end-to-end supply chain process that guarantees quality at every step.
          </p>
        </InView>

        <div className="prod-process-wrap" style={{ position: 'relative' }}>
          <motion.div
            className="prod-process-line"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.6, ease: EASE, delay: 0.3 }}
          />
          <div className="prod-process-grid">
            {STEPS.map((s, i) => (
              <ProcessCard key={i} step={s} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── ProcessCard ──────────────────────────────
   outer = timed entry (own transition with delay — no whileHover conflict)
   inner = whileHover + SPRING + state-driven children                       */
function ProcessCard({ step, index, inView }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      style={{ flex: '1 1 160px' }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.12, ease: EASE }}
    >
      <motion.div
        className="prod-process-card"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -10, boxShadow: `0 28px 64px rgba(31,122,90,0.12), 0 0 0 1.5px ${PRIMARY}25` }}
        transition={SPRING}
        style={{ height: '100%' }}
      >
        <motion.div
          className="prod-process-accent"
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        />
        <div className="prod-process-num">{step.num}</div>
        <motion.div
          animate={{
            background: hovered ? PRIMARY : PRIMARY + '12',
            boxShadow:  hovered ? `0 12px 32px ${PRIMARY}40` : 'none',
          }}
          transition={{ duration: 0.3 }}
          className="prod-process-icon"
        >
          <span style={{ fontSize: 22 }}>{step.icon}</span>
        </motion.div>
        <h4 className="prod-process-title">{step.title}</h4>
        <p className="prod-process-desc">{step.desc}</p>
      </motion.div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════
   SECTION 6 — WHY CHOOSE US
══════════════════════════════════════════════ */
function WhySection() {
  return (
    <div className="prod-section prod-why">
      <div className="container">
        <div className="prod-why-layout">
          <InView variants={fadeLeft} style={{ flex: '0 0 360px', maxWidth: 360 }}>
            <SectionLabel text="Why GMI Trading" />
            <h2 className="prod-section-title" style={{ marginBottom: 20 }}>
              Built on<br /><span className="prod-title-accent">Trust &<br />Excellence</span>
            </h2>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.8, marginBottom: 32 }}>
              For over two decades, GMI Trading has been the preferred commodity partner for importers and distributors across 35+ countries.
            </p>
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING}
              style={{ display: 'inline-block' }}
            >
              <Link to="/about" className="prod-btn-outline">
                Learn About Us
                <ArrowRight size={13} strokeWidth={2.5} />
              </Link>
            </motion.div>

            <div className="prod-why-image-wrap">
              <img src={qualityImg} alt="Quality" className="prod-why-image" />
              <div className="prod-why-image-badge">
                <div className="prod-why-badge-num">20+</div>
                <div className="prod-why-badge-text">Years of<br />Excellence</div>
              </div>
            </div>
          </InView>

          <motion.div
            className="prod-why-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {WHY_ITEMS.map((item, i) => (
              <WhyCard key={i} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ── WhyCard ──────────────────────────────────
   outer = stagger entry, inner = hover         */
function WhyCard({ item }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div variants={staggerItem}>
      <motion.div
        className="prod-why-card"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -8, boxShadow: `0 24px 60px rgba(31,122,90,0.10), 0 0 0 1.5px ${PRIMARY}25` }}
        transition={SPRING}
        style={{ height: '100%' }}
      >
        <motion.div
          className="prod-why-card-line"
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: EASE }}
        />
        <motion.div
          animate={{
            background: hovered ? PRIMARY : PRIMARY + '12',
            boxShadow:  hovered ? `0 10px 28px ${PRIMARY}40` : 'none',
          }}
          transition={{ duration: 0.3 }}
          className="prod-why-icon"
        >
          <span style={{ fontSize: 20 }}>{item.icon}</span>
        </motion.div>
        <h4 className="prod-why-title">{item.title}</h4>
        <p className="prod-why-desc">{item.desc}</p>
      </motion.div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════
   SECTION 7 — GLOBAL REACH
══════════════════════════════════════════════ */
function GlobalSection() {
  return (
    <div className="prod-section prod-section--alt prod-global">
      <div className="container">
        <InView variants={fadeUp} style={{ textAlign: 'center', marginBottom: 60 }}>
          <SectionLabel text="Global Reach" />
          <h2 className="prod-section-title">
            Serving Markets<br /><span className="prod-title-accent">Worldwide</span>
          </h2>
          <p className="prod-section-sub">
            Our distribution network spans four continents with strong footholds in the world's fastest-growing food-import markets.
          </p>
        </InView>

        <motion.div
          className="prod-regions-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {REGIONS.map((r, i) => (
            <RegionCard key={i} region={r} />
          ))}
        </motion.div>

        <InView variants={fadeUp} delay={0.2} style={{ marginTop: 52 }}>
          <div className="prod-ticker-wrap">
            <motion.div
              className="prod-ticker"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            >
              {[...Array(2)].map((_, si) => (
                <span key={si} className="prod-ticker-inner">
                  {['UAE', 'Saudi Arabia', 'Nigeria', 'Kenya', 'India', 'Pakistan', 'UK', 'Netherlands', 'Qatar', 'Ethiopia', 'Bangladesh', 'Malaysia'].map(m => (
                    <span key={m} className="prod-ticker-item">
                      <span className="prod-ticker-dot" />
                      {m}
                    </span>
                  ))}
                </span>
              ))}
            </motion.div>
          </div>
        </InView>
      </div>
    </div>
  )
}

/* ── RegionCard ───────────────────────────────
   outer = stagger entry, inner = hover         */
function RegionCard({ region }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div variants={staggerItem}>
      <motion.div
        className="prod-region-card"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -10, boxShadow: `0 28px 64px rgba(0,0,0,0.09), 0 0 0 1.5px ${region.accent}30` }}
        transition={SPRING}
        style={{ height: '100%' }}
      >
        <motion.div
          className="prod-region-accent-top"
          animate={{ scaleX: hovered ? 1 : 0 }}
          style={{ background: `linear-gradient(90deg, ${region.accent}, ${region.accent}77)` }}
          transition={{ duration: 0.4, ease: EASE }}
        />
        <motion.div
          animate={{ background: hovered ? region.accent : region.accent + '16' }}
          transition={{ duration: 0.3 }}
          className="prod-region-icon"
          style={{ border: `1.5px solid ${region.accent}30` }}
        >
          <Globe size={18} color={hovered ? '#fff' : region.accent} strokeWidth={2} />
        </motion.div>
        <h4 className="prod-region-title" style={{ color: hovered ? region.accent : '#0f172a' }}>
          {region.name}
        </h4>
        <div className="prod-region-markets">
          {region.markets.map(m => (
            <span key={m} className="prod-region-market" style={{ background: region.accent + '12', color: region.accent + 'cc', border: `1px solid ${region.accent}22` }}>
              {m}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════
   SECTION 8 — CTA BANNER
══════════════════════════════════════════════ */
function CtaSection() {
  return (
    <div className="prod-cta-section">
      <div className="prod-cta-bg" />
      <div className="prod-cta-dots" />

      <motion.div className="prod-cta-ring prod-cta-ring--1"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      />
      <motion.div className="prod-cta-ring prod-cta-ring--2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.15 }}
      />
      <motion.div className="prod-cta-ring prod-cta-ring--3"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.3 }}
      />

      <motion.div className="prod-cta-orb prod-cta-orb--1"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="prod-cta-orb prod-cta-orb--2"
        animate={{ y: [0, 18, 0], x: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container prod-cta-inner">
        <InView variants={fadeUp}>
          <motion.span
            className="prod-cta-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Trade?
          </motion.span>

          <h2 className="prod-cta-title">
            Let's Build a<br />Lasting Partnership
          </h2>
          <p className="prod-cta-sub">
            Whether you're an importer, retailer, or distributor — GMI Trading has the product, the quality,<br className="prod-br" />
            and the logistics capability to meet your needs at scale.
          </p>

          <motion.div
            className="prod-cta-btns"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem}>
              <motion.div
                whileHover={{ y: -5, scale: 1.04, boxShadow: '0 24px 56px rgba(0,0,0,0.25)' }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING}
              >
                <Link to="/contact" className="prod-cta-btn-primary">
                  Get in Touch
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <motion.div
                whileHover={{ y: -5, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING}
              >
                <a href="tel:+97145095923" className="prod-cta-btn-ghost">
                  <Phone size={15} strokeWidth={2} />
                  Call Us Now
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </InView>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════ */
export default function ProductsPage() {
  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden' }}>
      <HeroSection />
      <CategoriesSection />
      <ProductsGrid />
      <StatsSection />
      <SourcingSection />
      <WhySection />
      <GlobalSection />
      <CtaSection />
    </div>
  )
}
