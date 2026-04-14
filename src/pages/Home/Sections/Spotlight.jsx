import React from 'react'

export default function Spotlight(){
  const content = {
    eyebrow: 'Spotlight',
    title: 'Your Global Food\nProduction & Trade Partner',
    // example YouTube embed id - replace with your preferred video
    videoId: 'dQw4w9WgXcQ'
  }

  return (
    <section className="spotlight">
      <div className="container" style={{textAlign:'center',padding:'36px 0'}}>
        <div style={{color:'#1f7a5a',marginBottom:8}}>{content.eyebrow}</div>
        <h2 style={{whiteSpace:'pre-line'}}>{content.title}</h2>
        <div className="video-wrapper">
          <div className="video-inner">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${content.videoId}`}
              title="Spotlight video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
