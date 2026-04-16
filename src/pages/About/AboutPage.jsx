import React from 'react'
import Hero from './Sections/Hero'
import Info from './Sections/Info'
import Regions from './Sections/Regions'
import '../../styles/About.css'

export default function AboutPage(){
  return (
    <main className="about-page">
      <Hero />
      <Info />
      <Regions />
    </main>
  )
}
