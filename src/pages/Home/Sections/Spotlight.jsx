import React from 'react'
import '../../../styles/Spotlight.css'

const VIDEO_ID = '1JhajLAqNqk'

const stripStats = [
  { value: '10,000+', label: 'Customers Served'   },
  { value: '15+',     label: 'Years of Excellence' },
  { value: '500+',    label: 'Product SKUs'        },
  { value: '5',       label: 'Global Offices'      },
]

export default function Spotlight() {
  return (
    <section className="spotlight-section">
      <div className="spotlight-container">

        {/* ── Header ── */}
        <div className="spotlight-header">
          <span className="spotlight-eyebrow">
            <span className="spotlight-eyebrow-dot" />
            Company Spotlight
          </span>

          <h2 className="spotlight-title">
            Your Global Food<br />
            Production &amp; <em>Trade Partner</em>
          </h2>

          <p className="spotlight-subtitle">
            From farm to shelf — see how GMI Trading connects suppliers,
            distributors and retailers across the UAE and beyond with
            technology-driven precision.
          </p>
        </div>

        {/* ── Video ── */}
        <div className="spotlight-video-wrap">

          {/* Floating badge — left */}
          <div className="spotlight-badge spotlight-badge--left">
            <div className="spotlight-badge-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="spotlight-badge-text">
              <strong>5 Offices</strong>
              <span>Across 3 continents</span>
            </div>
          </div>

          {/* Floating badge — right */}
          <div className="spotlight-badge spotlight-badge--right">
            <div className="spotlight-badge-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
              </svg>
            </div>
            <div className="spotlight-badge-text">
              <strong>10,000+ Customers</strong>
              <span>Retail · Wholesale · HORECA</span>
            </div>
          </div>

          {/* Video card */}
          <div className="spotlight-video-card">
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
          </div>

          {/* Stat strip below the video */}
          <div className="spotlight-strip">
            {stripStats.map((s, i) => (
              <div className="spotlight-strip-item" key={i}>
                <div className="spotlight-strip-value">{s.value}</div>
                <div className="spotlight-strip-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
