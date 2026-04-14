import React from 'react'

export default function QualityCareers(){
  const leftImg = 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=80'
  const qa = [
    'Goal to have HACCP compliant facilities and ISO 22000 food safety certification.',
    'End to end batch traceability through in house digital ledger.',
    'Commitment to reducing food miles and post harvest losses by integrating regional storage nodes.'
  ]
  const careers = [
    'We hire thinkers, doers and dreamers who believe food distribution can be smarter and more sustainable.',
    'Explore opportunities in sales, logistics, packaging, data science & technology.'
  ]

  return (
    <section className="qc-section">
      <div className="container qc-grid">
        <div className="qc-left" style={{backgroundImage:`url(${leftImg})`}} />

        <div className="qc-center">
          <h3>Quality & Sustainability</h3>
          <ul>
            {qa.map((t,i)=> <li key={i}>{t}</li>)}
          </ul>

          <h3 style={{marginTop:24}}>Careers & Culture</h3>
          <ul>
            {careers.map((t,i)=> <li key={i}>{t}</li>)}
          </ul>
        </div>

        <div className="qc-right">
          <div className="stat">
            <div className="circle"><span>83%</span></div>
            <div className="label">Sustainability Score</div>
          </div>
          <div className="stat">
            <div className="circle small"><span>60%</span></div>
            <div className="label">Employee Growth</div>
          </div>
        </div>
      </div>
    </section>
  )
}
