import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* Floating particle canvas */
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const COUNT = 38
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.2 + 0.6,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      /* draw connection lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(42,160,90,${0.18 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      /* draw dots */
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(42,160,90,${p.alpha})`
        ctx.fill()

        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  )
}

export default function Hero() {
  const image = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80'

  const content = {
    eyebrow: 'End-to-End Commodity Solutions',
    title: 'Soft-commodity supply,\nre-engineered for speed\nand certainty.',
    subtitle:
      'We source, test, store and deliver sugar, rice, edible oils and related products to UAE retailers, hospitality operators and manufacturers.',
    trust: [
      { value: '10,000+', label: 'Outlets Served' },
      { value: '99%', label: 'On-Time-In-Full' },
      { value: 'HACCP', label: 'ISO 22000 in progress' },
    ],
    cta: 'Request a Quote',
  }

  return (
    <div
      className="hero-visual full-width"
      style={{
        backgroundImage: `url(${image})`,
        minHeight: 620,
        overflow: 'hidden',
      }}
    >
      {/* extra dark-green gradient tint */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(10,35,22,0.72) 0%, rgba(23,75,54,0.55) 60%, rgba(9,20,15,0.65) 100%)',
          zIndex: 1,
        }}
      />

      {/* animated particle network */}
      <ParticleCanvas />

      {/* glowing accent orb */}
      <div
        style={{
          position: 'absolute',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(42,160,90,0.18) 0%, transparent 70%)',
          top: '-100px',
          right: '8%',
          zIndex: 2,
          pointerEvents: 'none',
          animation: 'pulse-orb 6s ease-in-out infinite',
        }}
      />

      {/* content */}
      <div className="hero-inner" style={{ position: 'relative', zIndex: 3 }}>
        {/* eyebrow pill */}
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(42,160,90,0.18)',
            border: '1px solid rgba(42,160,90,0.45)',
            borderRadius: 999,
            padding: '5px 18px',
            fontSize: 12,
            fontWeight: 700,
            color: '#7ee8a2',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          {content.eyebrow}
        </div>

        {/* headline with animated underline on last word */}
        <h1
          style={{
            fontSize: 'clamp(28px, 4.5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.18,
            whiteSpace: 'pre-line',
            margin: '0 0 20px',
            textShadow: '0 2px 24px rgba(0,0,0,0.35)',
          }}
        >
          {content.title.split('\n').map((line, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i}>
                <span style={{ position: 'relative', display: 'inline' }}>
                  {line}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: '100%',
                      height: 3,
                      background: 'linear-gradient(90deg, #2aa05a, #7ee8a2)',
                      borderRadius: 2,
                      animation: 'slide-in 1.2s ease forwards',
                    }}
                  />
                </span>
              </span>
            ) : (
              <span key={i}>
                {line}
                <br />
              </span>
            )
          )}
        </h1>

        <p
          style={{
            fontSize: 17,
            color: 'rgba(255,255,255,0.88)',
            maxWidth: 640,
            margin: '0 auto 32px',
            lineHeight: 1.65,
          }}
        >
          {content.subtitle}
        </p>

        {/* trust pill badges */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 32,
          }}
        >
          {content.trust.map((t, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: 8,
                padding: '10px 20px',
                textAlign: 'center',
                minWidth: 100,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, color: '#7ee8a2' }}>{t.value}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{t.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #2aa05a, #1f7a5a)',
              color: '#fff',
              padding: '14px 36px',
              borderRadius: 9,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(42,160,90,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              letterSpacing: '0.3px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 14px 40px rgba(42,160,90,0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(42,160,90,0.35)'
            }}
          >
            {content.cta}
          </Link>
        </div>
      </div>

      {/* keyframe styles injected once */}
      <style>{`
        @keyframes pulse-orb {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes slide-in {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}
