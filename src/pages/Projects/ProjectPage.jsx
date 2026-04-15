import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
}

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (delay = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ── Scroll-triggered wrapper ── */
function InView({ children, variants = fadeUp, delay = 0, style = {}, className = '', once = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
      variants={variants}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Section wrapper ── */
function Section({ children, dark, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative', left: '50%', right: '50%',
        marginLeft: '-50vw', marginRight: '-50vw',
        width: '100vw',
        background: dark ? '#080f0a' : '#ffffff',
        padding: '88px 0',
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}

/* ── Section label ── */
function Label({ text, color = '#2aa05a' }) {
  return (
    <span style={{
      display: 'inline-block', fontSize: 11, fontWeight: 700,
      letterSpacing: '2.5px', textTransform: 'uppercase',
      color, background: color + '18',
      border: `1px solid ${color}35`,
      borderRadius: 999, padding: '4px 16px', marginBottom: 16,
    }}>
      {text}
    </span>
  )
}

/* ══════════════════════════════════════════════
   MAIN ProjectPage COMPONENT
══════════════════════════════════════════════ */
export default function ProjectPage({ project }) {
  const {
    title, tagline, heroImage, accentColor = '#2aa05a',
    overview, stats, pillars, process, features, gallery, cta,
    category, year,
  } = project

  return (
    <>
      {/* ── 1. HERO ── */}
      <div style={{
        position: 'relative', left: '50%', right: '50%',
        marginLeft: '-50vw', marginRight: '-50vw',
        width: '100vw', height: 'auto', minHeight: 580,
        backgroundImage: `linear-gradient(135deg, rgba(4,14,8,0.92) 0%, rgba(8,22,13,0.80) 60%, rgba(4,10,6,0.88) 100%), url(${heroImage})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        overflow: 'hidden', display: 'flex', alignItems: 'center',
      }}>
        {/* grid lines */}
        {[20, 40, 60, 80].map((l, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
            style={{
              position: 'absolute', top: 0, bottom: 0, left: `${l}%`,
              width: 1, background: `rgba(${hexToRgb(accentColor)},0.07)`,
              pointerEvents: 'none', transformOrigin: 'top',
            }}
          />
        ))}

        {/* corner bracket — top left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            position: 'absolute', top: 32, left: 40,
            width: 48, height: 48,
            borderTop: `2px solid ${accentColor}60`,
            borderLeft: `2px solid ${accentColor}60`,
          }}
        />
        {/* corner bracket — bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            position: 'absolute', bottom: 32, right: 40,
            width: 48, height: 48,
            borderBottom: `2px solid ${accentColor}60`,
            borderRight: `2px solid ${accentColor}60`,
          }}
        />

        {/* glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{
            position: 'absolute', top: '20%', right: '10%',
            width: 400, height: 400, borderRadius: '50%',
            background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`,
            pointerEvents: 'none', animation: 'heroGlow 5s ease-in-out infinite',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
          {/* breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}
          >
            <Link to="/" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>/</span>
            <Link to="/products" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Projects</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>/</span>
            <span style={{ fontSize: 12, color: accentColor }}>{title}</span>
          </motion.div>

          {/* category + year pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}
          >
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
              color: accentColor, background: accentColor + '18',
              border: `1px solid ${accentColor}40`, borderRadius: 999, padding: '4px 14px',
            }}>
              {category}
            </span>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999, padding: '4px 14px',
            }}>
              Est. {year}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900,
              color: '#fff', margin: '0 0 16px', lineHeight: 1.0,
              letterSpacing: '-2px', maxWidth: 700,
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.58 }}
            style={{
              fontSize: 18, color: 'rgba(255,255,255,0.65)',
              maxWidth: 560, margin: '0 0 40px', lineHeight: 1.7,
            }}
          >
            {tagline}
          </motion.p>

          {/* stat chips */}
          {stats && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  custom={0.7 + i * 0.1}
                  whileHover={{ y: -4, scale: 1.04, background: 'rgba(255,255,255,0.10)', boxShadow: `0 12px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)` }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: `1px solid rgba(255,255,255,0.14)`,
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: 14, padding: '16px 24px',
                    textAlign: 'center', minWidth: 110,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 16px rgba(0,0,0,0.2)',
                  }}
                >
                  <div style={{ fontSize: 26, fontWeight: 800, color: accentColor, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <style>{`
          @keyframes heroGlow { 0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.12)} }
        `}</style>
      </div>

      {/* ── 2. OVERVIEW ── */}
      <Section dark>
        {/* dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(circle, ${accentColor}0f 1px, transparent 1px)`,
          backgroundSize: '32px 32px', pointerEvents: 'none',
        }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', gap: 56, alignItems: 'center', flexWrap: 'wrap' }}>
            {/* left */}
            <InView variants={slideLeft} style={{ flex: '1 1 400px' }}>
              <Label text="Overview" color={accentColor} />
              <h2 style={{
                fontSize: 'clamp(24px,3vw,40px)', fontWeight: 800,
                color: '#f0f8f4', margin: '0 0 20px', letterSpacing: '-0.5px', lineHeight: 1.2,
              }}>
                {overview.heading}
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, margin: '0 0 28px' }}>
                {overview.body}
              </p>
              {overview.bullets && (
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
                >
                  {overview.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      variants={staggerItem}
                      style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}
                    >
                      <span style={{
                        width: 20, height: 20, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                        background: accentColor + '22', border: `1px solid ${accentColor}50`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l2 2 3-3.5" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {b}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </InView>

            {/* right — glowing card */}
            <InView variants={slideRight} delay={0.15} style={{ flex: '0 0 320px' }}>
              <motion.div
                whileHover={{ y: -6, boxShadow: `0 32px 72px ${accentColor}30, inset 0 1px 0 rgba(255,255,255,0.12)` }}
                transition={{ type: 'spring', stiffness: 200 }}
                style={{
                  background: `linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)`,
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: `1px solid rgba(255,255,255,0.12)`,
                  borderRadius: 20, padding: '36px 32px',
                  boxShadow: `0 0 48px ${accentColor}14, inset 0 1px 0 rgba(255,255,255,0.08)`,
                }}
              >
                {overview.highlights?.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      paddingBottom: i < overview.highlights.length - 1 ? 20 : 0,
                      marginBottom: i < overview.highlights.length - 1 ? 20 : 0,
                      borderBottom: i < overview.highlights.length - 1 ? `1px solid ${accentColor}15` : 'none',
                    }}
                  >
                    <div style={{
                      fontSize: 28, fontWeight: 900, color: accentColor,
                      lineHeight: 1, minWidth: 80,
                    }}>
                      {h.value}
                    </div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                      {h.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </InView>
          </div>
        </div>
      </Section>

      {/* ── 3. THREE PILLARS ── */}
      <Section style={{ background: 'linear-gradient(135deg, #f0faf4 0%, #e8f5ee 50%, #f5fdf7 100%)' }}>
        <div className="container">
          <InView variants={fadeUp} style={{ textAlign: 'center', marginBottom: 52 }}>
            <Label text="Core Capabilities" color={accentColor} />
            <h2 style={{
              fontSize: 'clamp(24px,3vw,38px)', fontWeight: 800,
              color: '#0f1f18', margin: '0 0 12px', letterSpacing: '-0.5px',
            }}>
              {pillars.heading}
            </h2>
            <p style={{ maxWidth: 480, margin: '0 auto', fontSize: 15, color: '#6b7280', lineHeight: 1.7 }}>
              {pillars.subheading}
            </p>
          </InView>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 24 }}
          >
            {pillars.items.map((p, i) => (
              <PillarCard key={i} item={p} index={i} accent={accentColor} />
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── 4. PROCESS ── */}
      {process && (
        <Section dark style={{ padding: '88px 0' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <InView variants={fadeUp} style={{ textAlign: 'center', marginBottom: 56 }}>
              <Label text="How It Works" color={accentColor} />
              <h2 style={{
                fontSize: 'clamp(24px,3vw,38px)', fontWeight: 800,
                color: '#f0f8f4', margin: '0 0 12px', letterSpacing: '-0.5px',
              }}>
                {process.heading}
              </h2>
            </InView>

            <div style={{ display: 'flex', gap: 0, position: 'relative', flexWrap: 'wrap' }}>
              {/* connector line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                style={{
                  position: 'absolute', top: 28, left: '8%', right: '8%', height: 1,
                  background: `linear-gradient(90deg, transparent, ${accentColor}50, transparent)`,
                  transformOrigin: 'left',
                }}
              />
              {process.steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  style={{
                    flex: '1 1 160px', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', textAlign: 'center',
                    padding: '28px 16px 24px', position: 'relative', zIndex: 1,
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: `1px solid rgba(255,255,255,0.08)`,
                    borderRadius: 18,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    cursor: 'default',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.12, boxShadow: `0 12px 32px ${accentColor}55` }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{
                      width: 56, height: 56, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${accentColor}, ${accentColor}88)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 900, fontSize: 16, color: '#fff',
                      marginBottom: 20, boxShadow: `0 8px 24px ${accentColor}40`,
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </motion.div>
                  <h4 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: '#f0f8f4' }}>{s.title}</h4>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* ── 5. FEATURES ── */}
      {features && (
        <Section style={{ background: 'linear-gradient(160deg, #f5fdf7 0%, #eaf6ef 60%, #f0faf4 100%)' }}>
          <div className="container">
            <InView variants={fadeUp} style={{ textAlign: 'center', marginBottom: 48 }}>
              <Label text="Features" color={accentColor} />
              <h2 style={{
                fontSize: 'clamp(24px,3vw,38px)', fontWeight: 800,
                color: '#0f1f18', margin: '0', letterSpacing: '-0.5px',
              }}>
                {features.heading}
              </h2>
            </InView>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 20 }}
            >
              {features.items.map((f, i) => (
                <FeatureCard key={i} item={f} accent={accentColor} />
              ))}
            </motion.div>
          </div>
        </Section>
      )}

      {/* ── 6. CTA ── */}
      <div style={{
        position: 'relative', left: '50%', right: '50%',
        marginLeft: '-50vw', marginRight: '-50vw',
        width: '100vw', overflow: 'hidden',
        background: `linear-gradient(135deg, #060e08 0%, #0d2318 50%, #060e08 100%)`,
        padding: '88px 0',
      }}>
        {/* glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 600, height: 300, borderRadius: '50%',
            background: `radial-gradient(ellipse, ${accentColor}15 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <InView variants={fadeUp}>
            <div style={{
              display: 'inline-block', width: '100%',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 28, padding: '56px 40px 48px',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 40px rgba(0,0,0,0.2)',
            }}>
            <Label text="Partnership" color={accentColor} />
            <h2 style={{
              fontSize: 'clamp(24px,3.5vw,44px)', fontWeight: 800,
              color: '#fff', margin: '0 0 16px', letterSpacing: '-0.5px',
            }}>
              {cta.heading}
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.7 }}>
              {cta.body}
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <motion.div variants={staggerItem}>
                <motion.div whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link to="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 9,
                    background: `linear-gradient(135deg, ${accentColor}, #1f7a5a)`,
                    color: '#fff', padding: '15px 36px', borderRadius: 10,
                    fontWeight: 700, fontSize: 15, textDecoration: 'none',
                    boxShadow: `0 8px 32px ${accentColor}40`,
                  }}>
                    {cta.primary}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={staggerItem}>
                <motion.div whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <a href="tel:+97145095923" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 9,
                    background: 'rgba(255,255,255,0.07)', border: '1.5px solid rgba(255,255,255,0.18)',
                    color: '#fff', padding: '14px 28px', borderRadius: 10,
                    fontWeight: 600, fontSize: 15, textDecoration: 'none',
                  }}>
                    Request a Callback
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
            </div>
          </InView>
        </div>
      </div>
    </>
  )
}

/* ── Pillar Card ── */
function PillarCard({ item, index, accent }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      variants={staggerItem}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8, boxShadow: `0 28px 64px rgba(0,0,0,0.14), 0 0 0 1px ${accent}30` }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{
        background: hovered ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: `1.5px solid ${hovered ? accent + '50' : 'rgba(255,255,255,0.75)'}`,
        borderRadius: 20, padding: '32px 26px',
        position: 'relative', overflow: 'hidden',
        cursor: 'default',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      {/* top accent bar */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0.4 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${accent}, ${accent}66)`,
          transformOrigin: 'left',
        }}
      />

      {/* subtle glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', top: -40, right: -40,
          width: 140, height: 140, borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{
          background: hovered ? accent : accent + '14',
          color: hovered ? '#fff' : accent,
          boxShadow: hovered ? `0 8px 20px ${accent}40` : 'none',
        }}
        transition={{ duration: 0.3 }}
        style={{
          width: 52, height: 52, borderRadius: 14,
          border: `1px solid ${accent}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 18, fontSize: 24, position: 'relative', zIndex: 1,
        }}
      >
        {item.icon}
      </motion.div>

      <span style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '1.4px',
        textTransform: 'uppercase', color: accent,
        background: accent + '12', border: `1px solid ${accent}28`,
        borderRadius: 999, padding: '2px 10px', display: 'inline-block', marginBottom: 10,
        position: 'relative', zIndex: 1,
      }}>
        {item.tag}
      </span>
      <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 700, color: '#0f1f18', position: 'relative', zIndex: 1 }}>{item.title}</h3>
      <p style={{ margin: 0, fontSize: 13.5, color: '#6b7280', lineHeight: 1.65, position: 'relative', zIndex: 1 }}>{item.desc}</p>
    </motion.div>
  )
}

/* ── Feature Card ── */
function FeatureCard({ item, accent }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -5, boxShadow: `0 16px 40px rgba(0,0,0,0.10), 0 0 0 1px ${accent}30`, background: 'rgba(255,255,255,0.88)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1px solid rgba(255,255,255,0.7)`,
        borderRadius: 16, padding: '24px 22px',
        display: 'flex', gap: 14, alignItems: 'flex-start',
        cursor: 'default',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400 }}
        style={{
          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
          background: accent + '15', border: `1px solid ${accent}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: accent, fontSize: 16,
          backdropFilter: 'blur(8px)',
        }}
      >
        {item.icon}
      </motion.div>
      <div>
        <h4 style={{ margin: '0 0 5px', fontSize: 14, fontWeight: 700, color: '#0f1f18' }}>{item.title}</h4>
        <p style={{ margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{item.desc}</p>
      </div>
    </motion.div>
  )
}

/* ── Hex to RGB helper ── */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}
