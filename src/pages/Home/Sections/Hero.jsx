import React from 'react'
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom'
>>>>>>> 9f1a94a88971edbf29b529effe2a92b8489be73b

export default function Hero(){
  const image = 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80'

  // Hero content as JSON-like object (keeps content separate from markup)
  const content = {
    "eyebrow": "Feeding Progress, Delivering Quality",
    "title": [
      "Tech powered distribution of soft commodities to 10,000+",
<<<<<<< HEAD
      "UAE based retail, wholesale & HORECA customers."
=======
      "UAE based retail, wholesale & HORECA customers are served."
>>>>>>> 9f1a94a88971edbf29b529effe2a92b8489be73b
    ],
    "subtitle": "Trusted distribution and warehousing with digital-first tools for real-time stock, pricing and delivery tracking.",
    "cta": "GET IN TOUCH"
  }

  return (
    <div className="hero-visual full-width" style={{backgroundImage:`url(${image})`}}>
      <div className="hero-inner">
        <div className="eyebrow">{content.eyebrow}</div>
        <h1>
          {content.title.map((line, idx) => (
            <span key={idx}>
              {line}
              {idx < content.title.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p>{content.subtitle}</p>
        <div style={{marginTop:20}}>
<<<<<<< HEAD
          <a href="/contact" className="cta primary">{content.cta}</a>
=======
          <Link to="/contact" className="cta primary">{content.cta}</Link>
>>>>>>> 9f1a94a88971edbf29b529effe2a92b8489be73b
        </div>
      </div>
    </div>
  )
}
