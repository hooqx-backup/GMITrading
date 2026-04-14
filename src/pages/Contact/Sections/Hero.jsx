export default function Hero() {
  const image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80'

  return (
    <div className="hero-visual full-width" style={{ backgroundImage: `url(${image})`, minHeight: 420 }}>
      {/* extra overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(10,35,22,0.75) 0%, rgba(23,75,54,0.6) 100%)',
        zIndex: 1,
      }}/>

      <div className="hero-inner" style={{ position: 'relative', zIndex: 2 }}>
        <span style={{
          display: 'inline-block', fontSize: 11, fontWeight: 700,
          letterSpacing: '2px', textTransform: 'uppercase',
          color: '#7ee8a2', background: 'rgba(42,160,90,0.18)',
          border: '1px solid rgba(42,160,90,0.4)',
          borderRadius: 999, padding: '4px 16px', marginBottom: 18,
        }}>
          Get In Touch
        </span>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', margin: '0 0 16px', lineHeight: 1.15 }}>
          Let's Build Something{' '}
          <span style={{
            background: 'linear-gradient(90deg, #2aa05a, #7ee8a2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Together
          </span>
        </h1>

        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.65 }}>
          Whether you're looking to source, store, or deliver — our team is ready to optimise your supply chain.
        </p>

        {/* trust strip */}
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { icon: '⚡', text: 'Response within 2 hours' },
            { icon: '📦', text: '10,000+ outlets served' },
            { icon: '🌍', text: 'Supply from 25 countries' },
          ].map((t, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 13, color: 'rgba(255,255,255,0.75)',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 8, padding: '8px 16px',
              backdropFilter: 'blur(8px)',
            }}>
              <span>{t.icon}</span>
              {t.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
