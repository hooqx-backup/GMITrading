import React, { useEffect, useRef, useState } from 'react'

/* Parses a stat string like "10,000+", "8,000 m²", "24–48 h", "300+" into
   a numeric target and a surrounding template so we can animate the number. */
function parseStatValue(str) {
  const match = str.match(/([\d,]+)/)
  if (!match) return { prefix: '', target: 0, suffix: str }
  const raw = match[1].replace(/,/g, '')
  const num = parseInt(raw, 10)
  const idx = str.indexOf(match[1])
  const prefix = str.slice(0, idx)
  const suffix = str.slice(idx + match[1].length)
  return { prefix, target: num, suffix, formatted: match[1] }
}

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  const start = () => {
    startRef.current = null
    const step = (ts) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = ts - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
  }

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])
  return [count, start]
}

function formatWithCommas(n) {
  return n.toLocaleString('en-US')
}

function StatItem({ s, i, isLast }) {
  const { prefix, target, suffix } = parseStatValue(s.value)
  const [count, startCount] = useCountUp(target, 1600)
  const ref = useRef(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true
          startCount()
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        flex: '1 1 200px',
        padding: '28px 20px',
        textAlign: 'center',
        borderRight: !isLast ? '1px solid rgba(255,255,255,0.12)' : 'none',
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: 'background 0.25s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
    >
      <div style={{ fontSize: 32, fontWeight: 700, color: '#2aa05a', lineHeight: 1 }}>
        {prefix}{formatWithCommas(count)}{suffix}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, marginTop: 6 }}>{s.label}</div>
    </div>
  )
}

export default function StatsStrip() {
  const stats = [
    { value: '10,000+', label: 'Active UAE customers' },
    { value: '8,000 m²', label: 'Temperature-controlled warehousing' },
    { value: '48 h', label: 'UAE delivery promise' },
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
            <StatItem key={i} s={s} i={i} isLast={i === stats.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
