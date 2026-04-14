import React from 'react'

export default function TechVideo(){
  const content = {
    title: 'Technology Edge – Bongo™ B2B App',
    bullets: [
      'Instant product discovery & dynamic pricing',
      'Real time stock visibility, credit terms & promotions.',
      'One click re ordering, e invoices, delivery tracking.'
    ],
    note: 'Phase 2 (2026): consumer facing B2C rollout.'
  }

  // sample muted autoplay video (royalty-free). Replace with project asset if available.
  const videoSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

  return (
    <section className="video-section">
      <div className="video-bg full-width">
        <video className="bg-video" src={videoSrc} autoPlay muted loop playsInline />
        <div className="video-overlay">
          <div className="video-card">
            <h2>{content.title}</h2>
            <div style={{display:'flex',gap:24,marginTop:18}}>
              <ul style={{margin:0,paddingLeft:18}}>
                {content.bullets.map((b,i)=> <li key={i} style={{marginBottom:12}}>{b}</li>)}
              </ul>
              <div style={{flex:1}}>
                <p style={{fontWeight:700}}>{content.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
