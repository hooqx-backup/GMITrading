import React from 'react'
import Hero from './Sections/Hero'
import Overview from './Sections/Overview'
import Highlights from './Sections/Highlights'
import TechVideo from './Sections/TechVideo'
import CategoriesSection from '../../components/CategoriesSection'
import Categories from './Sections/Categories'
import ValueAdded from './Sections/ValueAdded'
import Spotlight from './Sections/Spotlight'
import Projects from './Sections/Projects'
import QualityCareers from './Sections/QualityCareers'
import ContactForm from './Sections/ContactForm'

export default function HomePage(){
  return (
    <>
      <Hero />
      <Overview />
      <TechVideo />
      {/* <Highlights /> */}
      <CategoriesSection heading={'Bridging the Gap between'} />
      <ValueAdded />
      <Spotlight />
      <Projects />
      <QualityCareers />
      <ContactForm />
      {/* <section>
        <Categories />
      </section> */}
    </>
  )
}
