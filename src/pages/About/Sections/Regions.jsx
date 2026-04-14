import React from 'react'

export default function Regions(){
  const places = ['Dubai, UAE','Ajman, UAE','Kolkata, India','Delaware, USA','Kigali, Rwanda']
  return (
    <section>
      <h2>Our Regions & Offices</h2>
      <ul className="muted">
        {places.map(p=> <li key={p}>{p}</li>)}
      </ul>
    </section>
  )
}
