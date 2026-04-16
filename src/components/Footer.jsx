import { useState } from 'react'
import { Link } from 'react-router-dom'
import gmiLogo from '../assets/logos/gmi-logo.png'

const NAV = [
  { label: 'Home',       to: '/' },
  { label: 'About',      to: '/about' },
  { label: 'Products',   to: '/products' },
  { label: 'Services',   to: '/services' },
  { label: 'Contact',    to: '/contact' },
]

const EXPLORE = [
 
 {label:'Terms and conditions', to:'/terms'},
  { label: 'Privacy Policy',     to: '/privacy' },
]

const LOCATIONS = [
  { city: 'Dubai',     detail: 'Warehouse #10, Eternity Warehouses, Ras Al Khor Industrial Area' },
  { city: 'Abu Dhabi', detail: 'Building #145, Musaffah Industrial Area, Musaffah 37' },
  { city: 'Ajman',     detail: 'Al Jurf Industrial Area, Bahia, Ajman' },
]

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const SOCIALS = [
  { label: 'LinkedIn',  href: '#', Icon: LinkedInIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'X',         href: '#', Icon: XIcon },
]

const FOOTER_STYLES = `
  .footer-root {
    position: relative;
    left: 50%; right: 50%;
    margin-left: -50vw; margin-right: -50vw;
    width: 100vw;
    background: #050e09;
    color: #fff;
    overflow: hidden;
    font-family: inherit;
  }

  /* ── top accent bar ── */
  .footer-accent-bar {
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(42,160,90,0.4) 20%, #7ee8a2 50%, rgba(42,160,90,0.4) 80%, transparent 100%);
    position: relative;
  }
  .footer-accent-bar::after {
    content: '';
    position: absolute;
    inset: -4px 20% -4px 20%;
    background: linear-gradient(90deg, transparent, rgba(126,232,162,0.35), transparent);
    filter: blur(6px);
  }

  /* ── newsletter strip ── */
  .footer-newsletter {
    position: relative;
    margin: 0 auto;
    max-width: 1280px;
    padding: 48px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;
  }
  .footer-newsletter::before {
    content: '';
    position: absolute;
    inset: 12px 0;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(42,160,90,0.08) 0%, rgba(16,48,28,0.6) 50%, rgba(42,160,90,0.05) 100%);
    border: 1px solid rgba(42,160,90,0.18);
    box-shadow: 0 0 60px rgba(42,160,90,0.08) inset, 0 1px 0 rgba(126,232,162,0.12) inset;
  }
  .footer-nl-left { position: relative; }
  .footer-nl-badge {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 4px 12px; border-radius: 20px;
    background: rgba(42,160,90,0.12);
    border: 1px solid rgba(42,160,90,0.3);
    font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
    text-transform: uppercase; color: #7ee8a2;
    margin-bottom: 12px;
  }
  .footer-nl-badge-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #2aa05a;
    box-shadow: 0 0 8px #2aa05a;
    animation: footer-pulse 2s ease-in-out infinite;
  }
  .footer-nl-title {
    font-size: 22px; font-weight: 700; color: #fff;
    margin: 0 0 4px; line-height: 1.25;
  }
  .footer-nl-sub {
    font-size: 13px; color: rgba(255,255,255,0.45); margin: 0;
  }
  .footer-nl-form {
    position: relative;
    display: flex; gap: 0; align-items: center;
    flex-shrink: 0;
  }
  .footer-nl-input {
    width: 280px; height: 46px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(42,160,90,0.22);
    border-right: none;
    border-radius: 12px 0 0 12px;
    color: #fff; font-size: 13px;
    padding: 0 16px;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
  }
  .footer-nl-input::placeholder { color: rgba(255,255,255,0.3); }
  .footer-nl-input:focus {
    border-color: rgba(42,160,90,0.5);
    background: rgba(42,160,90,0.06);
  }
  .footer-nl-btn {
    height: 46px; padding: 0 22px;
    background: linear-gradient(135deg, #2aa05a 0%, #1d7a43 100%);
    border: none; border-radius: 0 12px 12px 0;
    color: #fff; font-size: 13px; font-weight: 700;
    cursor: pointer; letter-spacing: 0.3px;
    transition: opacity 0.2s, box-shadow 0.2s;
    white-space: nowrap;
    box-shadow: 0 0 20px rgba(42,160,90,0.3);
  }
  .footer-nl-btn:hover {
    opacity: 0.88;
    box-shadow: 0 0 32px rgba(42,160,90,0.5);
  }

  /* ── divider ── */
  .footer-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 20%, rgba(255,255,255,0.07) 80%, transparent);
    margin: 0 40px;
  }

  /* ── main grid ── */
  .footer-grid {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 56px 48px;
    padding: 56px 40px 48px;
    text-align: left;
  }
  @media (max-width: 1024px) {
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .footer-newsletter { padding: 40px 24px; }
    .footer-nl-input { width: 220px; }
  }
  @media (max-width: 640px) {
    .footer-grid { grid-template-columns: 1fr; }
    .footer-nl-form { flex-direction: column; width: 100%; }
    .footer-nl-input { width: 100%; border-right: 1px solid rgba(42,160,90,0.22); border-radius: 12px; }
    .footer-nl-btn { width: 100%; border-radius: 12px; }
  }

  /* ── section label ── */
  .footer-section-label {
    display: flex; align-items: center; gap: 8px;
    font-size: 10px; font-weight: 800; letter-spacing: 2.5px;
    text-transform: uppercase; color: #2aa05a;
    margin: 0 0 22px;
  }
  .footer-section-label::before {
    content: '';
    display: block; width: 16px; height: 2px;
    background: linear-gradient(90deg, #2aa05a, #7ee8a2);
    border-radius: 2px;
    flex-shrink: 0;
  }

  /* ── nav links ── */
  .footer-link {
    display: inline-flex; align-items: center; gap: 0;
    color: rgba(255,255,255,0.5); text-decoration: none;
    font-size: 14px; font-weight: 450; line-height: 1;
    transition: color 0.2s, gap 0.2s;
    position: relative;
  }
  .footer-link::after {
    content: '→';
    opacity: 0;
    transform: translateX(-6px);
    transition: opacity 0.2s, transform 0.2s;
    font-size: 12px;
    margin-left: 0;
  }
  .footer-link:hover { color: #fff; gap: 4px; }
  .footer-link:hover::after { opacity: 1; transform: translateX(0); }

  /* ── contact chips ── */
  .footer-contact-link {
    display: inline-flex; align-items: center; gap: 10px;
    color: rgba(255,255,255,0.6); text-decoration: none;
    font-size: 13px; transition: color 0.2s, transform 0.2s;
  }
  .footer-contact-link:hover { color: #7ee8a2; transform: translateX(2px); }
  .footer-contact-icon {
    width: 32px; height: 32px; border-radius: 10px; flex-shrink: 0;
    background: rgba(42,160,90,0.1);
    border: 1px solid rgba(42,160,90,0.2);
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .footer-contact-link:hover .footer-contact-icon {
    background: rgba(42,160,90,0.2);
    border-color: rgba(42,160,90,0.4);
    box-shadow: 0 0 12px rgba(42,160,90,0.25);
  }

  /* ── social icons ── */
  .footer-social-btn {
    width: 36px; height: 36px; border-radius: 10px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.45);
    text-decoration: none;
    transition: background 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
  }
  .footer-social-btn:hover {
    background: rgba(42,160,90,0.15);
    border-color: rgba(42,160,90,0.4);
    color: #7ee8a2;
    box-shadow: 0 0 16px rgba(42,160,90,0.3);
    transform: translateY(-2px);
  }

  /* ── location card ── */
  .footer-loc-card {
    display: flex; gap: 12px; align-items: flex-start;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid transparent;
    transition: background 0.2s, border-color 0.2s;
    cursor: default;
    margin: 0 -12px;
  }
  .footer-loc-card:hover {
    background: rgba(42,160,90,0.05);
    border-color: rgba(42,160,90,0.12);
  }
  .footer-loc-icon {
    width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0; margin-top: 1px;
    background: rgba(42,160,90,0.1);
    border: 1px solid rgba(42,160,90,0.2);
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s, box-shadow 0.2s;
  }
  .footer-loc-card:hover .footer-loc-icon {
    background: rgba(42,160,90,0.18);
    box-shadow: 0 0 10px rgba(42,160,90,0.2);
  }

  /* ── bottom bar ── */
  .footer-bottom {
    max-width: 1280px;
    margin: 0 auto;
    display: flex; align-items: center;
    justify-content: space-between; flex-wrap: wrap;
    gap: 16px; padding: 22px 40px 28px;
  }
  .footer-bottom-copy {
    margin: 0; font-size: 12px; color: rgba(255,255,255,0.25);
    letter-spacing: 0.2px;
  }
  .footer-bottom-badge {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 5px 12px; border-radius: 20px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    font-size: 11px; color: rgba(255,255,255,0.3);
    letter-spacing: 0.5px;
  }
  .footer-bottom-badge-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: #2aa05a;
    box-shadow: 0 0 6px #2aa05a;
  }
  .footer-bottom-links { display: flex; gap: 24px; align-items: center; }
  .footer-bottom-link {
    font-size: 12px; color: rgba(255,255,255,0.28);
    text-decoration: none;
    transition: color 0.2s;
    letter-spacing: 0.2px;
  }
  .footer-bottom-link:hover { color: rgba(255,255,255,0.7); }
  .footer-bottom-sep {
    width: 1px; height: 12px;
    background: rgba(255,255,255,0.1);
  }

  /* ── logo card ── */
  .footer-logo-card {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 12px 20px; border-radius: 16px;
    background: linear-gradient(135deg, rgba(42,160,90,0.1) 0%, rgba(5,14,9,0.8) 100%);
    border: 1px solid rgba(42,160,90,0.22);
    box-shadow: 0 0 32px rgba(42,160,90,0.12), inset 0 1px 0 rgba(126,232,162,0.1);
    position: relative; overflow: hidden; margin-bottom: 20px;
    transition: box-shadow 0.3s;
  }
  .footer-logo-card:hover {
    box-shadow: 0 0 48px rgba(42,160,90,0.22), inset 0 1px 0 rgba(126,232,162,0.15);
  }
  .footer-logo-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(126,232,162,0.5), transparent);
  }

  @keyframes footer-pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 8px #2aa05a; }
    50%       { opacity: 0.6; box-shadow: 0 0 4px #2aa05a; }
  }
`

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setEmail('')
  }

  return (
    <>
      <style>{FOOTER_STYLES}</style>

      <footer className="footer-root">

        {/* ── decorative background layers ── */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(42,160,90,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none', zIndex: 0,
        }}/>
        {/* primary glow — top center */}
        <div style={{
          position: 'absolute', top: -120, left: '50%',
          transform: 'translateX(-50%)',
          width: 700, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(42,160,90,0.09) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}/>
        {/* secondary glow — bottom left */}
        <div style={{
          position: 'absolute', bottom: -80, left: -100,
          width: 400, height: 300, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(42,160,90,0.06) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}/>
        {/* tertiary glow — bottom right */}
        <div style={{
          position: 'absolute', bottom: -60, right: -80,
          width: 350, height: 250, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(126,232,162,0.04) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}/>

        <div style={{ position: 'relative', zIndex: 1 }}>

          {/* ── Top accent line ── */}
          <div className="footer-accent-bar"/>

          {/* ── Newsletter strip ── */}
          <div className="footer-newsletter">
            <div className="footer-nl-left">
              <div className="footer-nl-badge">
                <span className="footer-nl-badge-dot"/>
                Stay Updated
              </div>
              <h3 className="footer-nl-title">Get industry insights, direct to your inbox.</h3>
              <p className="footer-nl-sub">No spam. Unsubscribe anytime.</p>
            </div>
            <form className="footer-nl-form" onSubmit={handleSubmit}>
              <input
                className="footer-nl-input"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button className="footer-nl-btn" type="submit">
                {sent ? '✓ Subscribed' : 'Subscribe'}
              </button>
            </form>
          </div>

          {/* ── Divider ── */}
          <div className="footer-divider"/>

          {/* ── Main grid ── */}
          <div className="footer-grid">

            {/* Col 1 — Brand */}
            <div>
              <div className="footer-logo-card">
                <img
                  src={gmiLogo}
                  alt="GMI Trading"
                  style={{
                    height: 46, width: 'auto', objectFit: 'contain', display: 'block',
                    filter: 'brightness(1.08) drop-shadow(0 0 10px rgba(42,160,90,0.45))',
                  }}
                />
              </div>

              <p style={{
                fontSize: 13.5, color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.8, maxWidth: 290, margin: '0 0 28px',
              }}>
                UAE's leading tech-enabled food distribution powerhouse — connecting global supply chains with local markets.
              </p>

              {/* contact */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                <a href="mailto:info@gmitrading.me" className="footer-contact-link">
                  <span className="footer-contact-icon">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2aa05a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  info@gmitrading.me
                </a>
                <a href="tel:+97145095923" className="footer-contact-link">
                  <span className="footer-contact-icon">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2aa05a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.13 6.13l1.17-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </span>
                  +971 4 509 5923
                </a>
              </div>

              {/* socials */}
              <div style={{ display: 'flex', gap: 8 }}>
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a key={label} href={href} aria-label={label} className="footer-social-btn">
                    <Icon/>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <h5 className="footer-section-label">Navigation</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {NAV.map((l, i) => (
                  <li key={i}>
                    <Link to={l.to} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Explore */}
            <div>
              <h5 className="footer-section-label">Explore</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {EXPLORE.map((l, i) => (
                  <li key={i}>
                    <Link to={l.to} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Locations */}
            <div>
              <h5 className="footer-section-label">Our Locations</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {LOCATIONS.map((loc, i) => (
                  <div key={i} className="footer-loc-card">
                    <span className="footer-loc-icon">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2aa05a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                        {loc.city}
                      </div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 }}>
                        {loc.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom divider ── */}
          <div className="footer-divider"/>

          {/* ── Bottom bar ── */}
          <div className="footer-bottom">
            <p className="footer-bottom-copy">
              © {new Date().getFullYear()} GMI General Trading LLC. All rights reserved.
            </p>

            <div className="footer-bottom-badge">
              <span className="footer-bottom-badge-dot"/>
              Trusted UAE Distributor
            </div>

            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <span className="footer-bottom-sep"/>
              <Link to="/terms" className="footer-bottom-link">Terms and Conditions</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}
