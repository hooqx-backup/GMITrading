import React from 'react'
import { motion } from 'framer-motion'

export default function Regions(){
  const places = [
    {
      city: 'Dubai',
      country: 'UAE',
      type: 'Headquarters',
      details: 'Commercial command center, strategic accounts, and demand planning.',
    },
    {
      city: 'Ajman',
      country: 'UAE',
      type: 'Operations Hub',
      details: 'Cross-docking, warehousing, and rapid dispatch coordination.',
    },
    {
      city: 'Kolkata',
      country: 'India',
      type: 'Sourcing Office',
      details: 'Supplier partnerships, quality alignment, and procurement continuity.',
    },
    {
      city: 'Delaware',
      country: 'USA',
      type: 'International Desk',
      details: 'Global channel linkage and partner onboarding support.',
    },
    {
      city: 'Kigali',
      country: 'Rwanda',
      type: 'Regional Gateway',
      details: 'Emerging market extension and long-range trade collaboration.',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const card = {
    hidden: { opacity: 0, y: 28, scale: 0.92, filter: 'blur(7px)' },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.section
      className="about-page-regions"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      variants={container}
    >
      <div className="container">
        <motion.div className="about-page-regions__head" variants={card}>
          <motion.p className="about-page-section-kicker" variants={card}>Global Presence</motion.p>
          <motion.h2 variants={card}>Connected offices built for resilient supply and faster market response.</motion.h2>
        </motion.div>

        <motion.div className="about-page-regions__grid" variants={container}>
          {places.map((place, idx) => (
            <motion.article
              key={place.city}
              className="about-page-region-card"
              variants={card}
              whileHover={{ y: -10, scale: 1.03, rotateX: 7, rotateY: idx % 2 === 0 ? -7 : 7 }}
              transition={{ duration: 0.35 }}
            >
              <p className="about-page-region-card__type">{place.type}</p>
              <h3>{place.city}</h3>
              <p className="about-page-region-card__country">{place.country}</p>
              <p className="about-page-region-card__details">{place.details}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="about-page-regions__ribbon"
          variants={card}
          whileHover={{ scale: 1.01, y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <strong>Primary UAE Focus</strong>
          <span>10,000+ active accounts supported through precision-led distribution infrastructure.</span>
        </motion.div>
      </div>
    </motion.section>
  )
}
