import React from 'react'
import ContactInfo from './Sections/ContactInfo'
import Locations from './Sections/Locations'

export default function ContactPage(){
  return (
    <section>
      <h1>Contact</h1>
      <ContactInfo />
      <Locations />
    </section>
  )
}
