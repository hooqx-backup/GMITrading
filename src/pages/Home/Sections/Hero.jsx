import { useEffect, useRef, useState } from 'react'
import bannerWebm from '../../../assets/videos/banner_video.webm'
import Button from '../../../components/Button'
import '../../../styles/Hero.css'

/* ── per-word title reveal ── */
// Each line is overflow:hidden; each word slides up with --w index delay
const titleLines = [
  [
    { text: 'Tech-powered', accent: false },
    { text: 'distribution',  accent: false },
  ],
  [
    { text: 'of',             accent: false },
    { text: 'soft',           accent: true  },
    { text: 'commodities',    accent: true  },
  ],
  [
    { text: 'across',         accent: false },
    { text: 'the',            accent: false },
    { text: 'UAE',            accent: false },
  ],
]

function TitleLines() {
  let wordIndex = 0
  return (
    <>
      {titleLines.map((line, li) => (
        <span key={li} className="hero-title-line">
          {line.map((w) => {
            const wi = wordIndex++
            return (
              <span
                key={wi}
                className={`hero-title-word${w.accent ? ' accent' : ''}`}
                style={{ '--w': wi }}
              >
                {w.text}
              </span>
            )
          })}
        </span>
      ))}
    </>
  )
}

/* ── counter-up hook ── */
function useCountUp(target, duration = 1800, startDelay = 600) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        // ease-out expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setValue(Math.round(eased * target))
        if (progress < 1) rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }, startDelay)

    return () => { clearTimeout(timer); cancelAnimationFrame(rafRef.current) }
  }, [target, duration, startDelay])

  return value
}

/* ── stat item with counter ── */
function StatItem({ num, label, delay }) {
  // parse e.g. "10,000+" → 10000, suffix "+"
  const raw    = num.replace(/,/g, '')
  const numVal = parseInt(raw, 10)
  const suffix = raw.replace(/\d/g, '')
  const count  = useCountUp(numVal, 1600, delay)

  const display = isNaN(numVal)
    ? num
    : count.toLocaleString() + suffix

  return (
    <div className="hero-stat">
      <span className="hero-stat-num">{display}</span>
      <span className="hero-stat-label">{label}</span>
    </div>
  )
}

const stats = [
  { num: '10,000+', label: 'Customers Served',   delay: 700 },
  { num: '15+',     label: 'Years of Excellence', delay: 850 },
  { num: '500+',    label: 'Product SKUs',         delay: 1000 },
]

export default function Hero() {
  return (
    <section className="hero-section">

      {/* ── Video background ── */}
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
        >
          <source src={bannerWebm} type="video/webm" />
        </video>
        <div className="hero-overlay" />
      </div>

      {/* ── Content ── */}
      <div className="hero-content">

        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Feeding Progress, Delivering Quality
        </div>

        <h1 className="hero-title">
          <TitleLines /></h1>

        <p className="hero-subtitle">
          Trusted distribution and warehousing with digital-first tools for
          real-time stock, pricing and delivery tracking — serving retail,
          wholesale &amp; HORECA.
        </p>

        <div className="hero-actions">
          <Button
            to="/contact"
            variant="primary"
            size="md"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            }
          >
            Get In Touch
          </Button>
          <Button to="/about" variant="outline-white" size="md">
            Learn More
          </Button>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="hero-scroll">
        <div className="hero-scroll-mouse">
          <span className="hero-scroll-wheel" />
        </div>
        <span className="hero-scroll-label">Scroll</span>
      </div>

    </section>
  )
}
