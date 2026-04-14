import React from 'react'

export default function Overview(){
  const content = {
    title: 'About GMI',
    paragraph: 'GMI General Trading (Grains, Mills & Industries) is an independent UAE based food distribution powerhouse specialising in sugar, rice, edible oils, flour, pulses, spices, snacks and energy drinks.',
    bullets: [
      'UAE Focus: Serving 10,000+ active customer accounts inside the UAE with just in time deliveries.',
      'Infrastructure: Multiple temperature controlled warehouses & cross docking hubs in Dubai and Ajman',
      'Global Network: Dozens of international partners across Asia, Africa, Europe and the Americas supplying and off taking product.',
      'Digital First: Proprietary apps and data analytics optimise routing, pricing and inventory'
    ],
    stat: '26,000+',
    cards: [
<<<<<<< HEAD
      {title:’Vision’, text:"To become the region’s most trusted, tech enabled launchpad for food brands.", color:’#f5efe2’},
      {title:’Mission’, text:"To become the region’s most trusted, tech enabled launchpad for food brands.", color:’#183f33’, light:false}
=======
      {title:'Vision', text:"To be the UAE's leading tech-enabled food distribution powerhouse, connecting global supply chains with local markets.", color:'#f5efe2'},
      {title:'Mission', text:"To become the region's most trusted, tech-enabled launchpad for food brands.", color:'#183f33', light:false}
>>>>>>> 9f1a94a88971edbf29b529effe2a92b8489be73b
    ]
  }

  const image = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'

  return (
    <section>
      <div className="container two-col">
        <div className="col col-image">
          <img src={image} alt="market" style={{width:'100%',borderRadius:6}} />
        </div>
        <div className="col col-content">
          <h2>{content.title}</h2>
          <p className="muted">{content.paragraph}</p>
          <ul className="muted" style={{marginTop:12,textAlign:'left'}}>
            {content.bullets.map((b,i)=> <li key={i} style={{marginBottom:8}}>{b}</li>)}
          </ul>

          <div style={{display:'flex',alignItems:'center',gap:24,marginTop:18}}>
            <div style={{fontSize:48,color:'#2aa05a',fontWeight:700}}>{content.stat}</div>
            <div style={{borderLeft:'2px solid #e6e6e6',paddingLeft:18}}>
              <div style={{fontWeight:700}}>Farmers &</div>
              <div>Food Producers</div>
            </div>
          </div>

          <div className="info-cards" style={{display:'flex',gap:16,marginTop:24}}>
            {content.cards.map((c,i)=> (
              <div key={i} className="card large" style={{background:c.light===false? '#183f33': c.color,color: c.light===false? '#fff':'#111'}}>
                <h4 style={{marginTop:0}}>{c.title}</h4>
                <p style={{marginBottom:0}}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
