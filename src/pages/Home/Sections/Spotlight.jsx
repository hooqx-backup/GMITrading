import React from 'react'
import { motion } from 'framer-motion'
import { Home, TrendingUp } from 'lucide-react'
import '../../../styles/Spotlight.css'

const VIDEO_ID = '1JhajLAqNqk'

const stripStats = [
  { value: '10,000+', label: 'Customers Served'   },
  { value: '15+',     label: 'Years of Excellence' },
  { value: '500+',    label: 'Product SKUs'        },
  { value: '5',       label: 'Global Offices'      },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function Spotlight() {
  return (
    <motion.section 
      className="spotlight-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="spotlight-container">

        {/* ── Header ── */}
        <motion.div className="spotlight-header" variants={stagger}>
          <motion.span className="spotlight-eyebrow" variants={fadeUp}>
            <span className="spotlight-eyebrow-dot" />
            Company Spotlight
          </motion.span>

          <motion.h2 className="spotlight-title" variants={fadeUp}>
            Your Global Food<br />
            Production &amp; <em>Trade Partner</em>
          </motion.h2>

          <motion.p className="spotlight-subtitle" variants={fadeUp}>
            From farm to shelf — see how GMI Trading connects suppliers,
            distributors and retailers across the UAE and beyond with
            technology-driven precision.
          </motion.p>
        </motion.div>

        {/* ── Video ── */}
        <div className="spotlight-video-wrap">

          {/* Floating badge — left */}
          <motion.div 
            className="spotlight-badge spotlight-badge--left"
            variants={{
              hidden: { opacity: 0, x: -20, scale: 0.9 },
              visible: { opacity: 1, x: 0, scale: 1, transition: { delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <div className="spotlight-badge-icon">
              <Home size={20} strokeWidth={2} />
            </div>
            <div className="spotlight-badge-text">
              <strong>5 Offices</strong>
              <span>Across 3 continents</span>
            </div>
          </motion.div>

          {/* Floating badge — right */}
          <motion.div 
            className="spotlight-badge spotlight-badge--right"
            variants={{
              hidden: { opacity: 0, x: 20, scale: 0.9 },
              visible: { opacity: 1, x: 0, scale: 1, transition: { delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <div className="spotlight-badge-icon">
              <TrendingUp size={20} strokeWidth={2} />
            </div>
            <div className="spotlight-badge-text">
              <strong>10,000+ Customers</strong>
              <span>Retail · Wholesale · HORECA</span>
            </div>
          </motion.div>

          {/* Video card */}
          <motion.div 
            className="spotlight-video-card"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.98, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            {/* macOS-style top bar */}
            <div className="spotlight-video-bar">
              <div className="spotlight-video-bar-dots">
                <span /><span /><span />
              </div>
              <span className="spotlight-video-bar-label">GMI Trading — Company Spotlight</span>
              <span className="spotlight-video-bar-live">
                <span className="spotlight-live-dot" />
                Watch Now
              </span>
            </div>

            <div className="spotlight-iframe-wrap">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&color=white`}
                title="GMI Trading — Company Spotlight"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Stat strip below the video */}
          <motion.div 
            className="spotlight-strip"
            variants={stagger}
          >
            {stripStats.map((s, i) => (
              <motion.div 
                className="spotlight-strip-item" 
                key={i}
                variants={fadeUp}
              >
                <div className="spotlight-strip-value">{s.value}</div>
                <div className="spotlight-strip-label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </motion.section>
  )
}
