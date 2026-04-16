import React, { useState, useEffect, useRef } from 'react'

const SERVICES = [
  {
    num: '01',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    tag: 'Sourcing',
    title: 'Global Sourcing & Procurement',
    desc: 'Secure, cost-optimised supply from 25 countries with 500+ vetted mills and plantations.',
    features: ['500+ vetted mills & plantations', 'Forward contracts & hedging', 'ESG & ethical-trade audits'],
    cta: 'Download spec sheet',
    accent: '#2aa05a',
    featured: true,
    stat: '25', statLabel: 'Countries',
  },
  {
    num: '02',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
      </svg>
    ),
    tag: 'Quality',
    title: 'Quality Assurance & Compliance',
    desc: 'Food safety you can prove — in-house lab testing, HACCP & Halal on every batch.',
    features: ['Aflatoxin, moisture, gluten testing', 'HACCP │ ISO 22000 Q4 2025', 'Halal verification on every batch'],
    cta: 'See test certificates',
    accent: '#1a7fb5',
    stat: '100%', statLabel: 'Batch Tested',
  },
  {
    num: '03',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    tag: 'Warehousing',
    title: 'Warehousing & Inventory',
    desc: 'Stock when you need it — 8,000 m² bonded, temperature-controlled, zero hidden cost.',
    features: ['8,000 m² temp-controlled space', 'FIFO & batch cloud WMS tracking', 'Re-pack & kitting lines'],
    cta: 'Book a call',
    accent: '#7c3aed',
    stat: '8,000m²', statLabel: 'Warehouse',
  },
  {
    num: '04',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    tag: 'Logistics',
    title: 'Smart Logistics & Last-Mile',
    desc: 'From dock to door in 24 hours — GPS-tracked, mixed fleet, GCC cross-border.',
    features: ['Mixed fleet: chiller, dry, tanker', 'GPS tracking & e-POD real time', 'GCC cross-border in 72 h'],
    cta: 'Track a shipment',
    accent: '#d97706',
    stat: '24 h', statLabel: 'Delivery',
  },
  {
    num: '05',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
    tag: 'Packaging',
    title: 'Private-Label & Re-Packaging',
    desc: 'Turn commodity into brand equity — design-to-shelf with metal detection lines.',
    features: ['Bags, tins, pouch design-to-shelf', 'MOQ from 5 t per artwork', 'Nitrogen flushing lines'],
    cta: 'View options',
    accent: '#db2777',
    stat: '5t', statLabel: 'Min. Order',
  },
  {
    num: '06',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
        <path d="M9 6h6M9 10h6M9 14h4"/>
      </svg>
    ),
    tag: 'Digital',
    title: 'Digital B2B Platform',
    desc: "Live stock, dynamic pricing, 30-second re-orders. API hooks for SAP, Oracle, Zoho.",
    features: ['Live stock & dynamic pricing', '30-second mobile re-order', 'API / EDI for SAP, Oracle, Zoho'],
    cta: 'Request demo',
    accent: '#0891b2',
    stat: '30s', statLabel: 'Re-order',
  },
  {
    num: '07',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    tag: 'Finance',
    title: 'Trade Finance & Credit',
    desc: "30 / 60 / 90-day terms, Islamic finance, LC handling. KYC approved in under 6 hours.",
    features: ['Flexible 30–90 day terms', 'Islamic finance & LC handling', 'KYC in under 6 hours'],
    cta: 'Learn about financing',
    accent: '#059669',
    stat: '6 h', statLabel: 'KYC Approval',
  },
  {
    num: '08',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><path d="M2 20h20"/>
      </svg>
    ),
    tag: 'Intelligence',
    title: 'Market Intelligence & Advisory',
    desc: 'Weekly price indices, demand-forecast dashboards, route-to-market consulting.',
    features: ['Weekly sugar, rice, oil indices', 'Demand-forecast by Emirate', 'Route-to-market consulting'],
    cta: 'Get market report',
    accent: '#ea580c',
    stat: 'Weekly', statLabel: 'Reports',
  },
]

/* Scroll-reveal hook */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function FeaturedCard({ s }) {
  const [ref, visible] = useReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: 'span 2',
        background: 'linear-gradient(135deg, #0d2318 0%, #174b36 50%, #0a1a10 100%)',
        borderRadius: 20,
        padding: '44px 48px',
        display: 'flex',
        gap: 48,
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(42,160,90,0.2)',
        boxShadow: hovered ? '0 32px 64px rgba(42,160,90,0.18)' : '0 8px 32px rgba(0,0,0,0.12)',
        transition: 'all 0.4s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
      }}
    >
      {/* animated ring */}
      <div style={{
        position: 'absolute', top: -60, right: -60,
        width: 280, height: 280, borderRadius: '50%',
        border: '1px solid rgba(42,160,90,0.15)',
        animation: 'spin-slow 18s linear infinite',
      }}/>
      <div style={{
        position: 'absolute', top: -20, right: -20,
        width: 200, height: 200, borderRadius: '50%',
        border: '1px solid rgba(42,160,90,0.1)',
        animation: 'spin-slow 12s linear infinite reverse',
      }}/>
      {/* glow */}
      <div style={{
        position:'absolute', top:0, right:'15%',
        width:300, height:300, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(42,160,90,0.14) 0%, transparent 70%)',
        pointerEvents:'none',
      }}/>

      {/* left */}
      <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18 }}>
          <span style={{
            fontSize:10, fontWeight:700, letterSpacing:'1.8px', textTransform:'uppercase',
            color:'#7ee8a2', background:'rgba(42,160,90,0.15)', border:'1px solid rgba(42,160,90,0.3)',
            borderRadius:999, padding:'3px 12px',
          }}>
            {s.tag}
          </span>
          <span style={{ color:'rgba(255,255,255,0.25)', fontSize:12, fontWeight:600 }}>{s.num}</span>
        </div>
        <h3 style={{ margin:'0 0 12px', fontSize:28, fontWeight:700, color:'#fff', lineHeight:1.25 }}>{s.title}</h3>
        <p style={{ margin:'0 0 24px', fontSize:15, color:'rgba(255,255,255,0.65)', lineHeight:1.7, maxWidth:420 }}>{s.desc}</p>
        <ul style={{ margin:'0 0 28px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:8 }}>
          {s.features.map((f, j) => (
            <li key={j} style={{ display:'flex', alignItems:'center', gap:10, fontSize:13, color:'rgba(255,255,255,0.7)' }}>
              <span style={{
                width:18, height:18, borderRadius:'50%', background:'rgba(42,160,90,0.2)',
                border:'1px solid rgba(42,160,90,0.4)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
              }}>
                <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4l2 2 3-3.5" stroke="#2aa05a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>
        <a href="/contact" style={{
          display:'inline-flex', alignItems:'center', gap:8,
          background:'linear-gradient(135deg,#2aa05a,#1f7a5a)', color:'#fff',
          padding:'12px 28px', borderRadius:9, fontSize:14, fontWeight:700, textDecoration:'none',
          boxShadow:'0 8px 24px rgba(42,160,90,0.35)', transition:'transform 0.2s',
        }}
          onMouseEnter={e=>e.currentTarget.style.transform='translateY(-2px)'}
          onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}
        >
          {s.cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      {/* right stat */}
      <div style={{
        flexShrink:0, textAlign:'center', position:'relative', zIndex:1,
        background:'rgba(255,255,255,0.06)',
        backdropFilter:'blur(16px)',
        WebkitBackdropFilter:'blur(16px)',
        border:'1px solid rgba(255,255,255,0.12)',
        borderRadius:16, padding:'32px 40px',
        boxShadow:'inset 0 1px 0 rgba(255,255,255,0.08)',
      }}>
        <div style={{ fontSize:52, fontWeight:800, color:'#2aa05a', lineHeight:1 }}>{s.stat}</div>
        <div style={{ fontSize:12, color:'rgba(255,255,255,0.45)', marginTop:6, letterSpacing:'1px', textTransform:'uppercase' }}>{s.statLabel}</div>
      </div>
    </div>
  )
}

function ServiceCard({ s, index }) {
  const [ref, visible] = useReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.62)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1px solid ${hovered ? s.accent + '45' : 'rgba(255,255,255,0.75)'}`,
        borderRadius: 16,
        padding: '32px 28px 26px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'all 0.35s ease',
        transform: visible
          ? hovered ? 'translateY(-6px)' : 'translateY(0)'
          : 'translateY(40px)',
        opacity: visible ? 1 : 0,
        boxShadow: hovered
          ? `0 24px 56px rgba(0,0,0,0.12), 0 0 0 1px ${s.accent}22, inset 0 1px 0 rgba(255,255,255,0.95)`
          : '0 2px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)',
        transitionDelay: visible ? `${(index % 3) * 60}ms` : '0ms',
      }}
    >
      {/* hover top bar */}
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:3,
        background:`linear-gradient(90deg, transparent, ${s.accent}, transparent)`,
        opacity: hovered ? 1 : 0, transition:'opacity 0.3s',
      }}/>

      {/* subtle bg blob */}
      <div style={{
        position:'absolute', bottom:-30, right:-30,
        width:110, height:110, borderRadius:'50%',
        background:`radial-gradient(circle, ${s.accent}12 0%, transparent 70%)`,
        pointerEvents:'none',
      }}/>

      {/* number */}
      <div style={{
        position:'absolute', top:20, right:22,
        fontSize:11, fontWeight:800, color: hovered ? s.accent : '#d1d5db',
        letterSpacing:'1px', transition:'color 0.3s',
      }}>
        {s.num}
      </div>

      {/* icon */}
      <div style={{
        width:50, height:50, borderRadius:13,
        background: hovered ? s.accent : s.accent + '14',
        border:`1px solid ${s.accent}30`,
        display:'flex', alignItems:'center', justifyContent:'center',
        color: hovered ? '#fff' : s.accent,
        marginBottom:20,
        transition:'all 0.3s',
        boxShadow: hovered ? `0 8px 20px ${s.accent}35` : 'none',
      }}>
        {s.icon}
      </div>

      {/* tag */}
      <span style={{
        display:'inline-block', fontSize:10, fontWeight:700, letterSpacing:'1.4px',
        textTransform:'uppercase', color: s.accent,
        background: s.accent + '12', border:`1px solid ${s.accent}28`,
        borderRadius:999, padding:'2px 10px', marginBottom:12, alignSelf:'flex-start',
      }}>
        {s.tag}
      </span>

      <h3 style={{ margin:'0 0 8px', fontSize:16, fontWeight:700, color:'#0f1f18', lineHeight:1.35 }}>{s.title}</h3>
      <p style={{ margin:'0 0 18px', fontSize:13, color:'#6b7280', lineHeight:1.65 }}>{s.desc}</p>

      <ul style={{ margin:'0 0 22px', padding:0, listStyle:'none', flex:1 }}>
        {s.features.map((f, j) => (
          <li key={j} style={{
            display:'flex', alignItems:'flex-start', gap:8,
            fontSize:12.5, color:'#4b5563', marginBottom:7, lineHeight:1.5,
          }}>
            <span style={{
              width:15, height:15, borderRadius:'50%',
              background: s.accent + '15', border:`1px solid ${s.accent}35`,
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1,
            }}>
              <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 4l2 2 3-3.5" stroke={s.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* stat chip */}
      <div style={{
        display:'inline-flex', alignItems:'center', gap:8,
        background: s.accent + '0f', borderRadius:8, padding:'7px 12px',
        marginBottom:16, alignSelf:'flex-start',
        border:`1px solid ${s.accent}20`,
      }}>
        <span style={{ fontSize:17, fontWeight:800, color: s.accent }}>{s.stat}</span>
        <span style={{ fontSize:11, color:'#9ca3af', fontWeight:500 }}>{s.statLabel}</span>
      </div>

      <a href="/contact" style={{
        display:'inline-flex', alignItems:'center', gap:5,
        fontSize:12.5, fontWeight:700, color: s.accent,
        textDecoration:'none', borderTop:'1px solid #f0f0f0',
        paddingTop:14, marginTop:'auto', transition:'gap 0.2s',
      }}
        onMouseEnter={e=>e.currentTarget.style.gap='9px'}
        onMouseLeave={e=>e.currentTarget.style.gap='5px'}
      >
        {s.cta}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  )
}

export default function ServicesGrid() {
  const [headerRef, headerVisible] = useReveal()
  const featured = SERVICES[0]
  const rest = SERVICES.slice(1)

  return (
    <section style={{ padding: 0 }}>
      <div style={{
        position:'relative', left:'50%', right:'50%',
        marginLeft:'-50vw', marginRight:'-50vw',
        width:'100vw', background:'linear-gradient(160deg, #f0faf4 0%, #e8f5ee 50%, #f5fdf7 100%)', padding:'88px 0 96px',
      }}>
        <div className="container">

          {/* section header */}
          <div
            ref={headerRef}
            style={{
              display:'flex', flexDirection:'column', alignItems:'center',
              width:'100%', maxWidth:760, margin:'0 auto 60px',
              textAlign:'center',
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
              transition:'all 0.6s ease',
            }}
          >
            <span style={{
              display:'inline-block', fontSize:11, fontWeight:700,
              letterSpacing:'2px', textTransform:'uppercase',
              color:'#2aa05a', background:'rgba(42,160,90,0.1)',
              border:'1px solid rgba(42,160,90,0.25)', borderRadius:999,
              padding:'4px 16px', marginBottom:16,
            }}>
              What We Do
            </span>
            <h2 style={{
              margin:'0 0 14px', fontSize:'clamp(26px,3.5vw,40px)',
              fontWeight:700, color:'#0f1f18', letterSpacing:'-0.5px',
              textAlign:'center', width:'100%',
            }}>
              Our Core Services
            </h2>
            <p style={{ maxWidth:500, fontSize:15, color:'#6b7280', lineHeight:1.7, textAlign:'center', margin:0 }}>
              Eight capabilities — one integrated supply chain, built for UAE food businesses.
            </p>
          </div>

          {/* bento grid */}
          <div className="services-bento" style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:22 }}>
            <FeaturedCard s={featured} />
            {rest.map((s, i) => (
              <ServiceCard key={i} s={s} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 1000px) {
          .services-bento { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-bento { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
