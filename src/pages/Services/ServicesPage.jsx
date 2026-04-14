import React from 'react'
import Hero from './Sections/Hero'
import StatsStrip from './Sections/StatsStrip'
import ServicesGrid from './Sections/ServicesGrid'
import ProcessSteps from './Sections/ProcessSteps'
import SocialProof from './Sections/SocialProof'
import CtaBanner from './Sections/CtaBanner'

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesGrid />
      <ProcessSteps />
      <SocialProof />
      <CtaBanner />
    </>
  )
}
