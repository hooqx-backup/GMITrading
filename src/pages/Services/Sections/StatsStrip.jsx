import React from 'react'

export default function StatsStrip() {
  const stats = [
    { value: '10,000+', label: 'Active UAE customers' },
    { value: '8,000 m²', label: 'Temperature-controlled warehousing' },
    { value: '24–48 h', label: 'UAE delivery promise' },
    { value: '300+', label: 'SKUs — Sugar, rice, oil, pulses & more' },
  ]

  return (
    <section style={{ padding: '0', margin: '0' }}>
      <div
        style={{
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          width: '100vw',
          background: 'var(--nav-bg)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 0,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 200px',
                padding: '28px 20px',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
            >
              <div style={{ fontSize: 32, fontWeight: 700, color: '#2aa05a', lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
