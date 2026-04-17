import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import techVideo from '../../../assets/videos/tech-video.mp4'
import '../../../styles/TechVideo.css'

const features = [
  'Instant product discovery & dynamic real-time pricing',
  'Live stock visibility, credit terms & promotions',
  'One-click reordering, e-invoices & delivery tracking',
]

const cubicBezier = [0.16, 1, 0.3, 1]

export default function TechVideo() {
  return (
    <section className="techvideo-section">
      {/* Background video */}
      <video
        className="techvideo-bg"
        src={techVideo}
        autoPlay
        muted
        loop
        playsInline
        tabIndex={-1}
      />

      <div className="techvideo-overlay" />
      <div className="techvideo-glow" />

      <div className="techvideo-container">

        {/* ── Left: copy ── */}
        <motion.div 
          className="techvideo-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: cubicBezier }}
        >
          <motion.span 
            className="techvideo-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: cubicBezier }}
          >
            Technology Edge
          </motion.span>

          <motion.h2 
            className="techvideo-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: cubicBezier }}
          >
            Powered by the
            <span>Bongo™ B2B App</span>
          </motion.h2>

          <motion.p 
            className="techvideo-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: cubicBezier }}
          >
            A purpose-built platform connecting buyers and sellers in real time —
            cutting friction at every step of the trade workflow.
          </motion.p>

          <ul className="techvideo-features">
            {features.map((f, i) => (
              <motion.li 
                key={i} 
                className="techvideo-feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.1), ease: cubicBezier }}
              >
                <span className="techvideo-feature-icon">
                  <Check size={11} strokeWidth={2.5} />
                </span>
                {f}
              </motion.li>
            ))}
          </ul>

          <motion.div 
            className="techvideo-badge"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease: cubicBezier }}
          >
            <span className="techvideo-badge-dot" />
            Phase 2 — 2026: Consumer-facing B2C rollout
          </motion.div>
        </motion.div>

        {/* ── Right: video card ── */}
        <motion.div 
          className="techvideo-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: cubicBezier }}
        >
          <div className="techvideo-card">
            <video
              className="techvideo-card-video"
              src={techVideo}
              autoPlay
              muted
              loop
              playsInline
              tabIndex={-1}
            />

            <div className="techvideo-card-bar">
              <span className="techvideo-card-bar-label">Bongo™ Platform</span>
              <span className="techvideo-card-bar-status">
                <span className="techvideo-card-bar-dot" />
                Live Demo
              </span>
            </div>
          </div>

          {/* Floating stat pill */}
          <motion.div 
            className="techvideo-stat"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: cubicBezier }}
          >
            <span className="techvideo-stat-value">10×</span>
            <span className="techvideo-stat-label">Faster order<br />processing</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
