import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Check } from 'lucide-react'

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

export default function CtaBanner() {
  const [ref, visible] = useReveal(0.15)

  return (
    <section style={{ padding: 0, marginBottom: 0 }}>
      <div style={{
        position: 'relative',
        left: '50%', right: '50%',
        marginLeft: '-50vw', marginRight: '-50vw',
        width: '100vw',
        overflow: 'hidden',
      }}>

        {/* full-bleed gradient background */}
        <div style={{
          background: 'linear-gradient(135deg, #f4f7f5 0%, #eaf5f0 45%, #f0faf5 100%)',
          padding: '88px 0 80px',
          position: 'relative',
        }}>

          {/* dot grid overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(42,160,90,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            pointerEvents: 'none',
          }}/>

          {/* glowing orbs */}
          <div style={{
            position: 'absolute', top: -80, left: '10%',
            width: 360, height: 360, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(42,160,90,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}/>
          <div style={{
            position: 'absolute', bottom: -60, right: '8%',
            width: 280, height: 280, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(42,160,90,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}/>

          <div
            ref={ref}
            className="container"
            style={{
              position: 'relative', zIndex: 1,
              textAlign: 'center',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'all 0.7s ease',
            }}
          >

            {/* pill badge */}
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              color: '#1f7a5a', background: 'rgba(42,160,90,0.1)',
              border: '1px solid rgba(42,160,90,0.25)',
              borderRadius: 999, padding: '4px 16px', marginBottom: 24,
            }}>
              Get Started Today
            </span>

            {/* headline */}
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 800, color: '#0f1f18',
              margin: '0 0 18px', lineHeight: 1.15,
              letterSpacing: '-0.8px',
            }}>
              Ready to simplify your{' '}
              <span style={{
                position: 'relative', display: 'inline-block',
              }}>
                <span style={{
                  background: 'linear-gradient(90deg, #2aa05a, #7ee8a2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  supply chain?
                </span>
              </span>
            </h2>

            {/* sub */}
            <p style={{
              fontSize: 17, color: '#6b7280',
              maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7,
            }}>
              Let's discuss how we can optimise your soft commodity procurement and logistics.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: 14, justifyContent: 'center',
              alignItems: 'center', flexWrap: 'wrap', marginBottom: 40,
            }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'linear-gradient(135deg, #2aa05a, #1f7a5a)',
                  color: '#fff', padding: '15px 36px',
                  borderRadius: 10, fontWeight: 700, fontSize: 15,
                  textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(42,160,90,0.4)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(42,160,90,0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(42,160,90,0.4)'
                }}
              >
                Let's Talk
                <ArrowRight size={16} />
              </Link>

              <a
                href="tel:+97141234567"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#ffffff',
                  border: '1.5px solid #d1d5db',
                  color: '#174b36', padding: '14px 28px',
                  borderRadius: 10, fontWeight: 600, fontSize: 15,
                  textDecoration: 'none',
                  backdropFilter: 'blur(8px)',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#f0faf5'
                  e.currentTarget.style.borderColor = 'rgba(42,160,90,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#ffffff'
                  e.currentTarget.style.borderColor = '#d1d5db'
                }}
              >
                <Phone size={16} />
                +971 4 123 4567
              </a>
            </div>

            {/* trust strip */}
            <div style={{
              display: 'flex', gap: 28, justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              {[
                'No long-term commitment required',
                'Response within 2 business hours',
                'Free supply chain audit on first call',
              ].map((text, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  fontSize: 13, color: '#6b7280',
                }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: '50%',
                    background: 'rgba(42,160,90,0.2)',
                    border: '1px solid rgba(42,160,90,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#2aa05a', flexShrink: 0,
                  }}>
                    <Check size={10} />
                  </span>
                  {text}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
