import React from 'react'

export default function CategoriesSection({heading='Shop by Categories', items=[]}){
  const defaults = items.length? items : [
    {title:'GRAINS', desc:'RICE, WHEAT & SUGAR'},
    {title:'EDIBLE OILS', desc:'VEGETABLE OIL, MUSTARD OIL, CANOLA & SOYBEAN OILS'},
    {title:'PULSES & LEGUMES', desc:'GRAM, YELLOW LENTILS, MOONG DAL, MASOOR DAL'}
  ]

  return (
    <section style={{background:'#f0faf6',padding:'36px 0'}}>
      <div className="container" style={{textAlign:'center'}}>
        <div style={{color:'#1f7a5a',marginBottom:8}}>Shop by Categories</div>
        <h2 style={{marginBottom:24}}>{heading}</h2>
        <div className="grid">
          {defaults.map((c,i)=> (
            <div className="card" key={i} style={{padding:26,minHeight:260}}>
              <div style={{height:120,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:12}}>
                <img src={`https://via.placeholder.com/120x80?text=${encodeURIComponent(c.title)}`} alt="" style={{maxWidth:'100%'}} />
              </div>
              <h3>{c.title}</h3>
              <p style={{color:'#1f7a5a',fontWeight:600}}>{c.desc}</p>
              <div style={{marginTop:18,display:'flex',gap:12,justifyContent:'center'}}>
                <button className="cta" style={{background:'#144b38',border:'none',padding:'8px 14px'}}>RAWS</button>
                <button className="cta" style={{background:'#144b38',border:'none',padding:'8px 14px'}}>PROCESSED</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
