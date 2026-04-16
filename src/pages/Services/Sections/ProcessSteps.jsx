import { useState, useEffect, useRef } from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Source',
    tag: 'Origin',
    desc: 'We secure product at origin through long-term farmer.',
    detail: '500+ vetted mills, ESG audits, forward contracts and price-hedging to lock in cost certainty before freight is booked.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    color: '#2aa05a',
    metric: '25', metricLabel: 'Countries',
  },
  {
    number: '02',
    title: 'Test',
    tag: 'Lab QA',
    desc: 'Every lot is lab-tested before freight booking — aflatoxin, moisture, gluten and Halal.',
    detail: 'In-house certified lab runs full panel checks on every batch. No shipment leaves origin without a clean certificate.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3v11a3 3 0 0 0 6 0V3"/>
        <path d="M6.5 3h11"/>
        <path d="M6 20h12"/>
      </svg>
    ),
    color: '#1a7fb5',
    metric: '100%', metricLabel: 'Batch Tested',
  },
  {
    number: '03',
    title: 'Store',
    tag: 'Warehouse',
    desc: 'Goods land in our 8,000 m² Dubai warehouse for QC validation and batch coding.',
    detail: 'Bonded & temperature-controlled storage, FIFO rotation, cloud WMS batch tracking, re-pack & kitting lines.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    color: '#7c3aed',
    metric: '8,000m²', metricLabel: 'Capacity',
  },
  {
    number: '04',
    title: 'Deliver',
    tag: 'Last-Mile',
    desc: 'Fleet dispatches 24/7 with live GPS tracking and e-POD confirmation.',
    detail: 'Mixed fleet of chillers, dry vans, bulk tippers and tankers. UAE in 24 h, GCC cross-border in 72 h.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    color: '#d97706',
    metric: '24 h', metricLabel: 'UAE Delivery',
  },
  {
    number: '05',
    title: 'Support',
    tag: 'After-Care',
    desc: 'Dedicated account managers and weekly market data keep your business ahead.',
    detail: 'Weekly price indices for sugar, rice and oil. Demand-forecast dashboards by Emirate. Route-to-market consulting.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: '#059669',
    metric: 'Weekly', metricLabel: 'Reports',
  },
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

function StepCard({ step, index, active, onClick }) {
  const [ref, visible] = useReveal()
  const isActive = active === index

  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      style={{
        position: 'relative',
        background: isActive
          ? `rgba(255,255,255,0.85)`
          : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1.5px solid ${isActive ? step.color + '55' : 'rgba(255,255,255,0.78)'}`,
        borderRadius: 18,
        padding: '32px 28px',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        transform: visible
          ? isActive ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
          : 'translateY(50px)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 80}ms`,
        boxShadow: isActive
          ? `0 28px 64px ${step.color}28, 0 0 0 1px ${step.color}30, inset 0 1px 0 rgba(255,255,255,0.95)`
          : '0 2px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)',
        overflow: 'visible',
        flex: '1 1 0',
        minWidth: 0,
        minHeight: 360,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* active top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${step.color}, ${step.color}88)`,
        opacity: isActive ? 1 : 0,
        transition: 'opacity 0.3s',
        borderRadius: '18px 18px 0 0',
      }}/>

      {/* number watermark */}
      <div style={{
        position: 'absolute', bottom: -8, right: 10,
        fontSize: 72, fontWeight: 900,
        color: isActive ? step.color + '12' : '#0000000a',
        lineHeight: 1, userSelect: 'none',
        transition: 'color 0.3s',
      }}>
        {step.number}
      </div>

      {/* icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: isActive ? step.color : step.color + '14',
        border: `1px solid ${step.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: isActive ? '#fff' : step.color,
        marginBottom: 18,
        boxShadow: isActive ? `0 8px 24px ${step.color}40` : 'none',
        transition: 'all 0.3s',
      }}>
        {step.icon}
      </div>

      {/* tag */}
      <span style={{
        display: 'inline-block', fontSize: 10, fontWeight: 700,
        letterSpacing: '1.4px', textTransform: 'uppercase',
        color: step.color, background: step.color + '12',
        border: `1px solid ${step.color}25`,
        borderRadius: 999, padding: '2px 10px', marginBottom: 10,
      }}>
        {step.tag}
      </span>

      <h3 style={{
        margin: '0 0 8px', fontSize: 18, fontWeight: 700,
        color: '#0f1f18', lineHeight: 1.2,
      }}>
        {step.title}
      </h3>

      <p style={{
        margin: '0 0 16px', fontSize: 13, color: '#6b7280', lineHeight: 1.65,
        minHeight: 60, overflow: 'hidden',
      }}>
        {step.desc}
      </p>

      {/* metric — always in flow, no height change */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        borderTop: '1px solid #f0f0f0', paddingTop: 14, marginTop: 'auto',
      }}>
        <span style={{ fontSize: 20, fontWeight: 800, color: step.color }}>{step.metric}</span>
        <span style={{ fontSize: 11, color: '#9ca3af', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
          {step.metricLabel}
        </span>
      </div>

      {/* expanded detail — absolutely positioned so it NEVER shifts layout */}
      <div style={{
        position: 'absolute',
        top: 'calc(100% + 10px)',
        left: 0, right: 0,
        zIndex: 20,
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0)' : 'translateY(-6px)',
        pointerEvents: isActive ? 'auto' : 'none',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: `1.5px solid ${step.color}40`,
          borderRadius: 12,
          padding: '12px 14px',
          boxShadow: `0 12px 32px ${step.color}25, inset 0 1px 0 rgba(255,255,255,0.95)`,
        }}>
          <p style={{
            margin: 0, fontSize: 12.5,
            color: step.color, lineHeight: 1.65,
            borderLeft: `3px solid ${step.color}`,
            paddingLeft: 10,
          }}>
            {step.detail}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ProcessSteps() {
  const [active, setActive] = useState(0)
  const [headerRef, headerVisible] = useReveal(0.2)
  const intervalRef = useRef(null)

  const startAutoAdvance = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => setActive(a => (a + 1) % STEPS.length), 3000)
  }

  // auto-advance every 3s
  useEffect(() => {
    startAutoAdvance()
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleClick = (i) => {
    setActive(i)
    startAutoAdvance() // reset timer so it doesn't jump immediately after a click
  }

  return (
    <section style={{ padding: 0 }}>
      <div style={{
        position: 'relative', left: '50%', right: '50%',
        marginLeft: '-50vw', marginRight: '-50vw',
        width: '100vw',
        background: 'linear-gradient(180deg, #f8fffe 0%, #ffffff 100%)',
        padding: '88px 0 32px',
        overflow: 'hidden',
      }}>

        {/* background grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `radial-gradient(circle, #2aa05a10 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}/>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* header */}
          <div
            ref={headerRef}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              width: '100%', maxWidth: 760, margin: '0 auto 64px',
              textAlign: 'center',
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease',
            }}
          >
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              color: '#2aa05a', background: 'rgba(42,160,90,0.1)',
              border: '1px solid rgba(42,160,90,0.25)',
              borderRadius: 999, padding: '4px 16px', marginBottom: 16,
            }}>
              How It Works
            </span>
            <h2 style={{
              margin: '0 0 14px',
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 700, color: '#0f1f18', letterSpacing: '-0.5px',
              textAlign: 'center', width: '100%',
            }}>
              Our 5-Step Supply Engine
            </h2>
            <p style={{ maxWidth: 500, margin: '0 auto', fontSize: 15, color: '#6b7280', lineHeight: 1.7 }}>
              From origin to your door — every step tracked, tested and accountable.
            </p>

            {/* progress dots */}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 24 }}>
              {STEPS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(i)}
                  style={{
                    width: active === i ? 28 : 8,
                    height: 8, borderRadius: 999,
                    background: active === i ? s.color : '#e5e7eb',
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'all 0.35s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* cards row */}
          <div className="process-row" style={{ display: 'flex', gap: 16, alignItems: 'stretch', paddingBottom: 140 }}>
            {STEPS.map((s, i) => (
              <StepCard
                key={i}
                step={s}
                index={i}
                active={active}
                onClick={handleClick}
              />
            ))}
          </div>

          {/* bottom label */}
          <div style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', gap: 10, marginTop: 28,
          }}>
            <div style={{ height: 1, width: 40, background: '#e5e7eb' }}/>
            <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>
              Click any step to explore
            </span>
            <div style={{ height: 1, width: 40, background: '#e5e7eb' }}/>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-row { flex-direction: column !important; }
          .process-row > * { width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
