import React from 'react'

export default function Projects(){
  const projects = [
    {title:'Oil Tinning', img:'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=60'},
    {title:'Grains Packaging', img:'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=60'},
    {title:'Avocado Farming', img:'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=60'}
  ]

  return (
    <section className="projects-section">
      <div className="container" style={{textAlign:'center',padding:'36px 0'}}>
        <div style={{color:'#1f7a5a',marginBottom:8}}>In-Depth</div>
        <h2 style={{marginBottom:24}}>Explore Projects</h2>
        <div className="projects-grid">
          {projects.map((p,i)=> (
            <div className="project-card" key={i}>
              <div className="project-img" style={{backgroundImage:`url(${p.img})`}} />
              <h4 style={{marginTop:12}}>{p.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
