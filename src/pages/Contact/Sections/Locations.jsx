import { useState, useEffect, useRef } from 'react'

const LOCATIONS = [
  {
    city: 'Dubai',
    role: 'Head Office & Main Warehouse',
    address: 'Warehouse #10, Eternity Warehouses, Ras Al Khor Industrial Area, Dubai, UAE',
    color: '#2aa05a',
    icon: '🏭',
    mapUrl: 'https://maps.google.com/?q=Ras+Al+Khor+Industrial+Area+Dubai',
  },
  {
    city: 'Abu Dhabi',
    role: 'Distribution Hub',
    address: 'Building #145, Musaffah Industrial Area, Musaffah 37, Abu Dhabi, UAE',
    color: '#1a7fb5',
    icon: '🏢',
    mapUrl: 'https://maps.google.com/?q=Musaffah+Industrial+Area+Abu+Dhabi',
  },
  {
    city: 'Ajman',
    role: 'Storage Facility',
    address: 'Al Jurf Industrial Area, Bahia, Ajman, UAE',
    color: '#7c3aed',
    icon: '📦',
    mapUrl: 'https://maps.google.com/?q=Al+Jurf+Industrial+Area+Ajman',
  },
]

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function LocationCard({ loc, index }) {
  const [ref, visible] = useReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: '1 1 280px',
        background: '#fff',
        border: `1.5px solid ${hovered ? loc.color + '50' : '#e8e8e8'}`,
        borderRadius: 20,
        padding: '32px 28px',
        boxShadow: hovered
          ? `0 20px 48px rgba(0,0,0,0.1), 0 0 0 1px ${loc.color}22`
          : '0 2px 16px rgba(0,0,0,0.05)',
        transition: 'all 0.35s ease',
        transform: visible
          ? hovered ? 'translateY(-6px)' : 'translateY(0)'
          : 'translateY(40px)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 100}ms`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${loc.color}, ${loc.color}66)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
        borderRadius: '20px 20px 0 0',
      }}/>

      {/* icon badge */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: hovered ? loc.color + '22' : loc.color + '12',
        border: `1px solid ${loc.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 24, marginBottom: 18,
        transition: 'background 0.3s',
      }}>
        {loc.icon}
      </div>

      {/* role tag */}
      <span style={{
        display: 'inline-block', fontSize: 10, fontWeight: 700,
        letterSpacing: '1.4px', textTransform: 'uppercase',
        color: loc.color, background: loc.color + '12',
        border: `1px solid ${loc.color}28`,
        borderRadius: 999, padding: '2px 10px', marginBottom: 10,
      }}>
        {loc.role}
      </span>

      <h3 style={{ margin: '0 0 10px', fontSize: 22, fontWeight: 700, color: '#0f1f18' }}>
        {loc.city}
      </h3>

      <p style={{ margin: '0 0 24px', fontSize: 13.5, color: '#6b7280', lineHeight: 1.65 }}>
        {loc.address}
      </p>

      <a
        href={loc.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 13, fontWeight: 700, color: loc.color,
          textDecoration: 'none',
          borderTop: '1px solid #f0f0f0',
          paddingTop: 16, width: '100%',
          transition: 'gap 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.gap = '10px'}
        onMouseLeave={e => e.currentTarget.style.gap = '6px'}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        View on Google Maps
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  )
}

export default function Locations() {
  const [headerRef, headerVisible] = useReveal()

  return (
    <section style={{ padding: 0 }}>
      <div style={{
        position: 'relative', left: '50%', right: '50%',
        marginLeft: '-50vw', marginRight: '-50vw',
        width: '100vw', background: '#ffffff',
        padding: '80px 0 88px',
      }}>
        <div className="container">

          {/* header */}
          <div
            ref={headerRef}
            style={{
              textAlign: 'center', marginBottom: 52,
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'all 0.6s ease',
            }}
          >
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              color: '#2aa05a', background: 'rgba(42,160,90,0.1)',
              border: '1px solid rgba(42,160,90,0.25)',
              borderRadius: 999, padding: '4px 16px', marginBottom: 14,
            }}>
              Our Presence
            </span>
            <h2 style={{
              margin: '0 0 12px',
              fontSize: 'clamp(24px,3vw,36px)',
              fontWeight: 700, color: '#0f1f18', letterSpacing: '-0.4px',
            }}>
              Our UAE Locations
            </h2>
            <p style={{
              maxWidth: 480, margin: '0 auto',
              fontSize: 15, color: '#6b7280', lineHeight: 1.65,
            }}>
              Strategically positioned warehouses and offices across the UAE for faster delivery and better service.
            </p>
          </div>

          {/* cards */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {LOCATIONS.map((loc, i) => (
              <LocationCard key={i} loc={loc} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
