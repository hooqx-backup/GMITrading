import React from 'react'

export default function ValueAdded(){
  const left = {
    title: 'Value Added Packaging',
    bullets: [
      'Grains, pulses & sugar: automated form-fill-seal lines for 1 kg, 2 kg and 5 kg retail bags.',
      'Edible oils: high-speed filling line for 18 L food-service tins with nitrogen-flushing for extended shelf life.'
    ],
    note: 'This vertical integration shortens lead times, reduces wastage and enables private-label solutions for our clients.'
  }

  const regions = ['Dubai, UAE','Ajman, UAE','Kolkata, India','Delaware, USA','Kigali, Rwanda']
  const offices = ['Ras Al Khor Industrial area','Al Jurf 2 Industrial area','Salt Lake City','Wilmington','Special Economic Zone']
  const functions = ['HQ • Sales • Warehouse & Logistics','Secondary Distribution Hub','Procurement & Market Liaison','Corporate Holding & Finance','East Africa Market Entry']

  return (
    <section className="value-added full-width">
      <div className="container two-col value-wrap">
        <div className="col col-left">
          <h2>{left.title}</h2>
          <ul className="muted" style={{textAlign:'left',marginTop:12}}>
            {left.bullets.map((b,i)=>(<li key={i} style={{marginBottom:8}}>{b}</li>))}
          </ul>
          <p className="muted" style={{marginTop:12}}>{left.note}</p>
        </div>

        <div className="col col-right value-box">
          <div className="value-grid">
            <div>
              <h4>REGION</h4>
              <ul>
                {regions.map((r,i)=>(<li key={i}>{r}</li>))}
              </ul>
            </div>
            <div>
              <h4>OFFICE</h4>
              <ul>
                {offices.map((o,i)=>(<li key={i}>{o}</li>))}
              </ul>
            </div>
            <div>
              <h4>KEY FUNCTION</h4>
              <ul>
                {functions.map((f,i)=>(<li key={i}>{f}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
