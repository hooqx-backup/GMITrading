import React from 'react'

const categories = [
  {title:'Grains', desc:'Rice, wheat & sugar — raw and processed'},
  {title:'Edible Oils', desc:'Vegetable, mustard, canola & soybean oils'},
  {title:'Pulses', desc:'Gram, lentils, moong dal'}
]

export default function Categories(){
  return (
    <section>
      <h2>Bridging the Gap between</h2>
      <div className="grid">
        {categories.map(c=> (
          <div className="card" key={c.title}><h3>{c.title}</h3><p className="muted">{c.desc}</p></div>
        ))}
      </div>
    </section>
  )
}
