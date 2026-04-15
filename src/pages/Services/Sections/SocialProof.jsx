import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const CLIENTS = [
  { name: 'Carrefour',              initials: 'CR', color: '#003da5' },
  { name: 'Choithrams',             initials: 'CH', color: '#e31837' },
  { name: 'Emirates Flight Catering', initials: 'EF', color: '#c8a84b' },
  { name: 'Al-Dar Roastery',        initials: 'AD', color: '#2aa05a' },
]

const STATS = [
  { value: '30%',  label: 'Stock-out reduction' },
  { value: '18%',  label: 'Landed cost saving'  },
  { value: '1 Qtr', label: 'Time to results'    },
]

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

export default function SocialProof() {
  const [sectionRef, sectionVisible] = useReveal(0.1)
  const [quoteRef,   quoteVisible]   = useReveal(0.2)
  const [statsRef,   statsVisible]   = useReveal(0.2)
  const [clientsRef, clientsVisible] = useReveal(0.2)

  return (
    <section style={{ padding: 0 }}>
      <div
        ref={sectionRef}
        style={{
          position: 'relative',
          left: '50%', right: '50%',
          marginLeft: '-50vw', marginRight: '-50vw',
          width: '100vw',
          background: '#f4f7f5',
          padding: '96px 0 88px',
          overflow: 'hidden',
        }}
      >
        {/* background grid */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(circle, rgba(42,160,90,0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          pointerEvents: 'none',
        }}/>

        {/* top glow */}
        <div style={{
          position: 'absolute', top: -120, left: '50%',
          transform: 'translateX(-50%)',
          width: 600, height: 300, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(42,160,90,0.12) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}/>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* ── Header ── */}
          <div style={{
            textAlign: 'center', marginBottom: 56,
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'all 0.65s ease',
          }}>
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              color: '#2aa05a', background: 'rgba(42,160,90,0.12)',
              border: '1px solid rgba(42,160,90,0.28)',
              borderRadius: 999, padding: '4px 16px', marginBottom: 16,
            }}>
              Social Proof
            </span>
            <h2 style={{
              margin: '0', color: '#0f1f18',
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 700, letterSpacing: '-0.5px',
            }}>
              Trusted By Industry Leaders
            </h2>
          </div>

          {/* ── Two-column: quote + stats ── */}
          <div style={{
            display: 'flex', gap: 24, alignItems: 'stretch',
            marginBottom: 52, flexWrap: 'wrap',
          }}>

            {/* Quote card */}
            <div
              ref={quoteRef}
              style={{
                flex: '1 1 420px',
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(255,255,255,0.8)',
                borderRadius: 20,
                padding: '40px 40px 36px',
                boxShadow: '0 8px 40px rgba(42,160,90,0.1), inset 0 1px 0 rgba(255,255,255,0.95)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                opacity: quoteVisible ? 1 : 0,
                transform: quoteVisible ? 'translateY(0)' : 'translateY(32px)',
                transition: 'all 0.6s ease',
              }}
            >
              {/* big quote mark */}
              <div style={{
                fontSize: 80, lineHeight: 0.7, color: '#2aa05a',
                fontFamily: 'Georgia, serif', marginBottom: 20, opacity: 0.6,
              }}>
                "
              </div>

              <p style={{
                flex: 1, fontSize: 20, lineHeight: 1.75,
                color: '#1a2e26',
                fontStyle: 'italic', margin: '0 0 28px',
                fontWeight: 400,
              }}>
                GMI cut our sugar stock-outs by 30% and saved 18% on landed cost in one quarter.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2aa05a, #174b36)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#fff', flexShrink: 0,
                }}>
                  M
                </div>
                <div>
                  <div style={{ color: '#0f1f18', fontSize: 14, fontWeight: 700 }}>
                    Mohamed R.
                  </div>
                  <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2 }}>
                    Procurement Lead — Nationwide Bakery Chain
                  </div>
                </div>
              </div>
            </div>

            {/* Stats column */}
            <div
              ref={statsRef}
              style={{
                flex: '0 0 220px',
                display: 'flex', flexDirection: 'column', gap: 16,
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? 'translateX(0)' : 'translateX(28px)',
                transition: 'all 0.6s ease 0.15s',
              }}
            >
              {STATS.map((s, i) => (
                <div key={i} style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.62)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1.5px solid rgba(255,255,255,0.78)',
                  boxShadow: i === 0
                    ? '0 6px 24px rgba(42,160,90,0.1), inset 0 1px 0 rgba(255,255,255,0.9)'
                    : i === 1
                    ? '0 6px 24px rgba(26,127,181,0.1), inset 0 1px 0 rgba(255,255,255,0.9)'
                    : '0 6px 24px rgba(124,58,237,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
                  borderRadius: 16, padding: '24px 24px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', bottom: -10, right: -4,
                    fontSize: 52, fontWeight: 900,
                    color: i === 0 ? 'rgba(42,160,90,0.1)' : i === 1 ? 'rgba(26,127,181,0.1)' : 'rgba(124,58,237,0.1)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: 36, fontWeight: 800,
                    color: i === 0 ? '#2aa05a' : i === 1 ? '#1a7fb5' : '#7c3aed',
                    lineHeight: 1, marginBottom: 6,
                  }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Client logos ── */}
          <div
            ref={clientsRef}
            style={{
              opacity: clientsVisible ? 1 : 0,
              transform: clientsVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            <p style={{
              textAlign: 'center', fontSize: 11, fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              color: '#9ca3af', marginBottom: 20,
            }}>
              Serving leading brands across the UAE
            </p>

            <div style={{
              display: 'flex', gap: 14, justifyContent: 'center',
              flexWrap: 'wrap', marginBottom: 48,
            }}>
              {CLIENTS.map((c, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1.5px solid rgba(255,255,255,0.75)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)',
                  borderRadius: 12, padding: '12px 20px',
                  transition: 'border-color 0.25s, background 0.25s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = c.color + '60'
                    e.currentTarget.style.background = c.color + '10'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e2e8f0'
                    e.currentTarget.style.background = '#fff'
                  }}
                >
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: c.color + '22',
                    border: `1px solid ${c.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 800, color: c.color,
                    flexShrink: 0,
                  }}>
                    {c.initials}
                  </div>
                  <span style={{
                    fontSize: 13, fontWeight: 600,
                    color: '#374151',
                    letterSpacing: '0.2px',
                  }}>
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'linear-gradient(135deg, #2aa05a, #1f7a5a)',
                color: '#fff', padding: '15px 36px',
                borderRadius: 10, fontWeight: 700, fontSize: 14,
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(42,160,90,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                letterSpacing: '0.2px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(42,160,90,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(42,160,90,0.35)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download 2025 Service Catalogue PDF
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
