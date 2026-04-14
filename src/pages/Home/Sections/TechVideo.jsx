import React from 'react'
import techVideo from '../../../assets/videos/tech-video.mp4'
import '../../../styles/TechVideo.css'

const features = [
  'Instant product discovery & dynamic real-time pricing',
  'Live stock visibility, credit terms & promotions',
  'One-click reordering, e-invoices & delivery tracking',
]

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
        <div className="techvideo-left">
          <span className="techvideo-eyebrow">Technology Edge</span>

          <h2 className="techvideo-title">
            Powered by the
            <span>Bongo™ B2B App</span>
          </h2>

          <p className="techvideo-desc">
            A purpose-built platform connecting buyers and sellers in real time —
            cutting friction at every step of the trade workflow.
          </p>

          <ul className="techvideo-features">
            {features.map((f, i) => (
              <li key={i} className="techvideo-feature">
                <span className="techvideo-feature-icon">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2,6 5,9 10,3" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="techvideo-badge">
            <span className="techvideo-badge-dot" />
            Phase 2 — 2026: Consumer-facing B2C rollout
          </div>
        </div>

        {/* ── Right: video card ── */}
        <div className="techvideo-right">
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
          <div className="techvideo-stat">
            <span className="techvideo-stat-value">10×</span>
            <span className="techvideo-stat-label">Faster order<br />processing</span>
          </div>
        </div>

      </div>
    </section>
  )
}
