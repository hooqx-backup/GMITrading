import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import bannerWebm from '../../../assets/videos/banner_video.webm'
import Button from '../../../components/Button'
import '../../../styles/Hero.css'

/* ── per-word title reveal ── */
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
          {line.map((w, wi_in_line) => {
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
  const raw    = num.replace(/,/g, '')
  const numVal = parseInt(raw, 10)
  const suffix = raw.replace(/\d/g, '')
  const count  = useCountUp(numVal, 1600, delay)

  const display = isNaN(numVal)
    ? num
    : count.toLocaleString() + suffix

  return (
    <motion.div 
      className="hero-stat"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay / 1000 }}
    >
      <span className="hero-stat-num">{display}</span>
      <span className="hero-stat-label">{label}</span>
    </motion.div>
  )
}

const stats = [
  { num: '10,000+', label: 'Customers Served',   delay: 1500 },
  { num: '15+',     label: 'Years of Excellence', delay: 1650 },
  { num: '500+',    label: 'Product SKUs',         delay: 1800 },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "150px"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section className="hero-section" ref={sectionRef}>

      {/* ── Video background ── */}
      <motion.div className="hero-video-wrap" style={{ y: videoY, scale: videoScale }}>
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
      </motion.div>

      {/* ── Content ── */}
      <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>

        <motion.div 
          className="hero-eyebrow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-eyebrow-dot" />
          Feeding Progress, Delivering Quality
        </motion.div>

        <h1 className="hero-title">
          <TitleLines />
        </h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Trusted distribution and warehousing with digital-first tools for
          real-time stock, pricing and delivery tracking — serving retail,
          wholesale &amp; HORECA.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Button
            to="/contact"
            variant="primary"
            size="md"
            icon={<ArrowRight size={16} strokeWidth={2.5} />}
          >
            Get In Touch
          </Button>
          <Button to="/about" variant="outline-white" size="md">
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* ── Stats ── */}
      <div className="hero-stats mt-10">
        {stats.map((s, i) => (

          <StatItem key={i} {...s} />
        ))}
      </div>

      <div className="hero-scroll-indicator">
        <motion.div 
          className="hero-scroll-line"
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

    </section>
  )
}
