import { useState } from 'react'
import { Link } from 'react-router-dom'

const NAV = [
  { label: 'Home',       to: '/' },
  { label: 'About',      to: '/about' },
  { label: 'Products',   to: '/products' },
  { label: 'Services',   to: '/services' },
  { label: 'Contact',    to: '/contact' },
]

const EXPLORE = [
  { label: 'Sustainability',     to: '/sustainability' },
  { label: 'AI Implementations', to: '/ai' },
  { label: 'Career',             to: '/career' },
  { label: 'Privacy Policy',     to: '/privacy' },
]

const LOCATIONS = [
  { city: 'Dubai',     detail: 'Warehouse #10, Eternity Warehouses, Ras Al Khor Industrial Area' },
  { city: 'Abu Dhabi', detail: 'Building #145, Musaffah Industrial Area, Musaffah 37' },
  { city: 'Ajman',     detail: 'Al Jurf Industrial Area, Bahia, Ajman' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer style={{
      position: 'relative',
      left: '50%', right: '50%',
      marginLeft: '-50vw', marginRight: '-50vw',
      width: '100vw',
      background: '#0a1510',
      color: '#fff',
      overflow: 'hidden',
    }}>

      {/* top green line */}
      <div style={{
        height: 3,
        background: 'linear-gradient(90deg, transparent, #2aa05a, #7ee8a2, #2aa05a, transparent)',
      }}/>

      {/* background dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(42,160,90,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none', zIndex: 0,
      }}/>

      {/* glow orb */}
      <div style={{
        position: 'absolute', top: -100, left: '50%',
        transform: 'translateX(-50%)',
        width: 500, height: 300, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(42,160,90,0.1) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }}/>

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Main grid ── */}
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.4fr',
          gap: '48px 40px',
          padding: '64px 16px 48px',
          textAlign: 'left',
        }}>

          {/* Col 1 — Brand */}
          <div>
            <div style={{
              fontSize: 32, fontWeight: 800, letterSpacing: '-0.5px',
              color: '#fff', marginBottom: 14,
            }}>
              gmi
              <span style={{
                display: 'inline-block', width: 6, height: 6,
                borderRadius: '50%', background: '#2aa05a',
                marginLeft: 3, verticalAlign: 'middle', marginBottom: 6,
              }}/>
            </div>

            <p style={{
              fontSize: 14, color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75, maxWidth: 300, margin: '0 0 24px',
            }}>
              UAE's leading tech-enabled food distribution powerhouse — connecting global supply chains with local markets.
            </p>

            {/* contact chips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="mailto:info@gmitrading.me" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                fontSize: 13, transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#7ee8a2'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <span style={{
                  width: 30, height: 30, borderRadius: 8,
                  background: 'rgba(42,160,90,0.15)',
                  border: '1px solid rgba(42,160,90,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2aa05a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                info@gmitrading.me
              </a>

              <a href="tel:+97145095923" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                fontSize: 13, transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#7ee8a2'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <span style={{
                  width: 30, height: 30, borderRadius: 8,
                  background: 'rgba(42,160,90,0.15)',
                  border: '1px solid rgba(42,160,90,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2aa05a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.13 6.13l1.17-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                +971 4 509 5923
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h5 style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '2px',
              textTransform: 'uppercase', color: '#2aa05a',
              margin: '0 0 20px',
            }}>
              Navigation
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} style={{
                    color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
                    fontSize: 14, transition: 'color 0.2s',
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Explore */}
          <div>
            <h5 style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '2px',
              textTransform: 'uppercase', color: '#2aa05a',
              margin: '0 0 20px',
            }}>
              Explore
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {EXPLORE.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} style={{
                    color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
                    fontSize: 14, transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Locations */}
          <div>
            <h5 style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '2px',
              textTransform: 'uppercase', color: '#2aa05a',
              margin: '0 0 20px',
            }}>
              Our Locations
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {LOCATIONS.map((loc, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: 7, flexShrink: 0, marginTop: 1,
                    background: 'rgba(42,160,90,0.12)',
                    border: '1px solid rgba(42,160,90,0.22)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2aa05a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 3, textAlign: 'left' }}>
                      {loc.city}
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55, textAlign: 'left' }}>
                      {loc.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          margin: '0 16px',
        }}/>

        {/* ── Bottom bar ── */}
        <div className="container" style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: 12, padding: '20px 16px',
        }}>
          <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} GMI General Trading LLC. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Use'].map((t, i) => (
              <a key={i} href="#" style={{
                fontSize: 12, color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >
                {t}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
