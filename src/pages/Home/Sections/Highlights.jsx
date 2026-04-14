import React from 'react'

export default function Highlights(){
  const items = [
    {title:'Technology Edge – Bongo™ B2B App', text:'Instant product discovery, dynamic pricing, real time stock visibility and one-click re-ordering.'},
    {title:'Value Added Packaging', text:'Automated form-fill-seal lines for retail bags, high-speed filling for service tins and private-label solutions.'},
    {title:'Quality & Sustainability', text:'HACCP goals, ISO 22000 aspirations and commitment to reducing food miles and post-harvest loss.'}
  ]

  return (
    <section style={{background:'#fff'}}>
      <div className="container">
        <h2 style={{textAlign:'center',marginBottom:18}}>Spotlight</h2>
        <div className="grid">
          {items.map((it, i)=> (
            <div key={i} className="card">
              <h3>{it.title}</h3>
              <p className="muted">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
