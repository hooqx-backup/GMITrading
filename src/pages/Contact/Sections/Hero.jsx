import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* Animated wave SVG canvas */
function WaveCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let frame = 0
    let animId

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const waves = [
        { amp: 28, freq: 0.008, speed: 0.018, alpha: 0.06, offset: 0 },
        { amp: 18, freq: 0.012, speed: 0.024, alpha: 0.05, offset: 100 },
        { amp: 14, freq: 0.016, speed: 0.032, alpha: 0.04, offset: 200 },
      ]
      waves.forEach(w => {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height * 0.6)
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = canvas.height * 0.6 + Math.sin((x + frame * w.speed * 60 + w.offset) * w.freq) * w.amp
          ctx.lineTo(x, y)
        }
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fillStyle = `rgba(42,160,90,${w.alpha})`
        ctx.fill()
      })
      frame++
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:2, pointerEvents:'none' }}/>
}

export default function Hero() {
  const image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80'

  return (
    <div
      className="hero-visual full-width"
      style={{
        backgroundImage:`linear-gradient(120deg, rgba(7,22,14,0.90) 0%, rgba(15,50,30,0.80) 50%, rgba(7,18,12,0.88) 100%), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'auto', minHeight: 520, overflow:'hidden',
      }}
    >

      {/* animated waves */}
      <WaveCanvas />

      {/* decorative vertical lines */}
      {[15, 35, 65, 85].map((left, i) => (
        <div key={i} style={{
          position:'absolute', top:0, bottom:0, left:`${left}%`,
          width:1, background:'rgba(42,160,90,0.08)', zIndex:2,
          pointerEvents:'none',
        }}/>
      ))}

      {/* glow orb left */}
      <div style={{
        position:'absolute', top:'10%', left:'-5%',
        width:400, height:400, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(42,160,90,0.15) 0%, transparent 70%)',
        zIndex:2, pointerEvents:'none',
      }}/>

      {/* content */}
      <div
        className="hero-inner"
        style={{
          position:'relative', zIndex:3,
          maxWidth:'var(--container)', margin:'0 auto',
          padding:'72px 24px 64px',
          width:'100%',
          display:'flex', flexDirection:'column', alignItems:'flex-start',
          textAlign:'left',
        }}
      >
        {/* pill */}
        <span style={{
          display:'inline-flex', alignItems:'center', gap:8,
          fontSize:11, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase',
          color:'#7ee8a2', background:'rgba(42,160,90,0.15)',
          border:'1px solid rgba(42,160,90,0.35)',
          borderRadius:999, padding:'5px 16px', marginBottom:24,
        }}>
          <span style={{
            width:6, height:6, borderRadius:'50%',
            background:'#2aa05a', boxShadow:'0 0 8px #2aa05a',
            animation:'blink 1.5s ease-in-out infinite',
            flexShrink:0,
          }}/>
          Get In Touch
        </span>

        {/* headline — left-aligned, two lines */}
        <h1 style={{
          fontSize:'clamp(32px, 5vw, 60px)',
          fontWeight:800, lineHeight:1.1,
          margin:'0 0 20px', letterSpacing:'-1px',
          maxWidth:720,
        }}>
          Let's Build{' '}
          <span style={{
            background:'linear-gradient(90deg, #2aa05a, #7ee8a2)',
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text',
          }}>
            Something
          </span>
          <br/>Together.
        </h1>

        <p style={{
          fontSize:17, color:'rgba(255,255,255,0.72)',
          maxWidth:520, margin:'0 0 36px', lineHeight:1.7,
        }}>
          Whether you're looking to source, store, or deliver — our team is ready to optimise your supply chain from day one.
        </p>

        {/* CTAs */}
        <div style={{ display:'flex', gap:14, alignItems:'center', flexWrap:'wrap', marginBottom:48 }}>
          <Link to="/contact#form" style={{
            display:'inline-flex', alignItems:'center', gap:9,
            background:'linear-gradient(135deg,#2aa05a,#1f7a5a)',
            color:'#fff', padding:'14px 32px', borderRadius:10,
            fontWeight:700, fontSize:15, textDecoration:'none',
            boxShadow:'0 8px 28px rgba(42,160,90,0.4)',
            transition:'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 14px 36px rgba(42,160,90,0.5)' }}
            onMouseLeave={e=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(42,160,90,0.4)' }}
          >
            Send a Message
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <a href="tel:+97145095923" style={{
            display:'inline-flex', alignItems:'center', gap:9,
            background:'rgba(255,255,255,0.07)', backdropFilter:'blur(8px)',
            border:'1.5px solid rgba(255,255,255,0.18)',
            color:'rgba(255,255,255,0.9)', padding:'13px 24px', borderRadius:10,
            fontWeight:600, fontSize:14, textDecoration:'none',
            transition:'background 0.2s, border-color 0.2s',
          }}
            onMouseEnter={e=>{ e.currentTarget.style.background='rgba(42,160,90,0.15)'; e.currentTarget.style.borderColor='rgba(42,160,90,0.5)' }}
            onMouseLeave={e=>{ e.currentTarget.style.background='rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.18)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.13 6.13l1.17-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +971 4 509 5923
          </a>
        </div>

        {/* trust strip — horizontal divider style */}
        <div style={{
          display:'flex', gap:0, alignItems:'stretch',
          background:'rgba(255,255,255,0.05)',
          border:'1px solid rgba(255,255,255,0.1)',
          borderRadius:12, overflow:'hidden',
          backdropFilter:'blur(10px)',
          flexWrap:'wrap',
        }}>
          {[
            { value:'2 hrs', label:'Response time', icon:'⚡' },
            { value:'10,000+', label:'Outlets served', icon:'📦' },
            { value:'25', label:'Source countries', icon:'🌍' },
            { value:'99%', label:'On-time delivery', icon:'✅' },
          ].map((t, i, arr) => (
            <div key={i} style={{
              padding:'16px 28px', textAlign:'center',
              borderRight: i < arr.length-1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              flex:'1 1 120px',
            }}>
              <div style={{ fontSize:18, fontWeight:800, color:'#fff', lineHeight:1 }}>{t.value}</div>
              <div style={{ fontSize:11, color:'rgba(255,255,255,0.5)', marginTop:4, fontWeight:500 }}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{ opacity:1 } 50%{ opacity:0.3 } }
      `}</style>
    </div>
  )
}
