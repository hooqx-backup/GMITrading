import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="brand" style={{fontSize:28}}>gmi</div>
          <p style={{maxWidth:420,lineHeight:1.6,color:'rgba(255,255,255,0.9)'}}>
            We enable global food production and trade by transforming the way the farmers and producers market, finance, sell, operate, and improve their efficiencies. We aim to be a leading force for optimizing global food production and trading.
          </p>
        </div>

        <div className="footer-col">
          <h4 style={{color:'#fff'}}>Explore</h4>
          <ul style={{listStyle:'none',padding:0,marginTop:8}}>
            <li><a href="/about">About Us</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
            <li><a href="/ai">AI Implementations</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{color:'#fff'}}>Contact Info</h4>
          <div style={{marginTop:8,color:'rgba(255,255,255,0.95)'}}>
            <strong>OUR CURRENT LOCATIONS</strong>
            <p style={{marginTop:8}}>Dubai : Warehouse # 10, Eternity warehouses, Ras Al Khor Industrial area, Dubai, UAE</p>
            <p>Abu Dhabi : Building # 145 Musaffah Industrial Area Musaffah 37 Abu Dhabi U.A.E.</p>
            <p>Ajman : Al Jurf industrial area, Bahia, Ajman, UAE</p>

            <div style={{marginTop:12}}>
              <div style={{fontWeight:700}}>EMAIL</div>
              <div style={{marginTop:6}}>info@gmitrading.me</div>
            </div>

            <div style={{marginTop:12}}>
              <div style={{fontWeight:700}}>CONTACT</div>
              <div style={{marginTop:6}}>+971 4 509 5923</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
