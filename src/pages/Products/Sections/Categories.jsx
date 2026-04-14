import React from 'react'

const categories = [
  {title:'Grains', desc:'Rice, Wheat & Sugar'},
  {title:'Edible Oils', desc:'Vegetable, Mustard, Canola & Soybean'},
  {title:'Pulses & Legumes', desc:'Gram, Lentils, Moong, Masoor'}
]

export default function Categories(){
  return (
    <div className="grid">
      {categories.map(c=> (
        <div className="card" key={c.title}><h3>{c.title}</h3><p className="muted">{c.desc}</p></div>
      ))}
    </div>
  )
}
