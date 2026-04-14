import React from 'react'

export default function Locations(){
  const places = ['Warehouse #10, Ras Al Khor Industrial area, Dubai','Al Jurf industrial area, Bahia, Ajman']
  return (
    <div className="card">
      <strong>Our Current Locations</strong>
      <ul className="muted">
        {places.map(p=> <li key={p}>{p}</li>)}
      </ul>
    </div>
  )
}
