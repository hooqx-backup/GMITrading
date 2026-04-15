import React from 'react'
import { motion } from 'framer-motion'
import aboutSectionImage from '../../../assets/images/about-section.jpg'
import '../../../styles/About.css'

/* ── SVG Icons ── */
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconWarehouse = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5l3-3h14l3 3z"/>
    <line x1="16" y1="8" x2="16" y2="22"/>
    <line x1="8"  y1="8" x2="8"  y2="22"/>
    <line x1="2"  y1="14" x2="22" y2="14"/>
  </svg>
)
const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)
const IconCpu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/>  <line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1"  y1="9" x2="4"  y2="9"/><line x1="1"  y1="14" x2="4"  y2="14"/>
  </svg>
)
const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)
const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l-.55-.55"/>
    <path d="M12 8L6.7 13.3C4.48 15.52 4 20 4 20s4.48-.48 6.7-2.7L16 12"/>
    <path d="M15.53 3.83a14.29 14.29 0 0 1 3.64 3.64 7.57 7.57 0 0 1-7.07 7.07 14.29 14.29 0 0 1-3.64-3.64 7.57 7.57 0 0 1 7.07-7.07z"/>
    <circle cx="16" cy="8" r="2"/>
  </svg>
)

const HIGHLIGHTS = [
  {
    Icon: IconPin,
    title: 'UAE Focus',
    desc: 'Serving 10,000+ active customer accounts with just-in-time deliveries across the UAE.',
  },
  {
    Icon: IconWarehouse,
    title: 'Infrastructure',
    desc: 'Multiple temperature-controlled warehouses and cross-docking hubs in Dubai and Ajman.',
  },
  {
    Icon: IconGlobe,
    title: 'Global Network',
    desc: 'Dozens of partners across Asia, Africa, Europe and the Americas supplying product.',
  },
  {
    Icon: IconCpu,
    title: 'Digital First',
    desc: 'Proprietary apps and data analytics optimise routing, pricing and inventory.',
  },
]

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.8,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -40,
      scale: 0.95,
      filter: 'blur(10px)',
      rotateY: -5,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30, skewY: 2 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const textRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <motion.section
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={containerVariants}
    >
      <div className="about-inner">
        <motion.div className="about-image-col" variants={imageVariants}>
          <div className="about-image-frame">
            <img src={aboutSectionImage} alt="GMI market distribution" className="about-image" />
            <div className="about-image-overlay" />

            <motion.div
              className="about-badge about-badge--stat"
              variants={badgeVariants}
            >
              <span className="about-badge-stat">26,000+</span>
              <span className="about-badge-copy">Farmers &amp; Food Producers</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="about-content-col" variants={containerVariants}>
          <motion.div className="about-eyebrow" variants={itemVariants}>
            <span className="about-eyebrow-dot" />
            About GMI
          </motion.div>

          <motion.h2 className="about-title" variants={titleVariants}>
            UAE's Leading <span>Food Distribution</span> Powerhouse
          </motion.h2>

          <motion.p className="about-desc" variants={itemVariants}>
            GMI General Trading (Grains, Mills &amp; Industries) is an independent UAE-based food
            distribution powerhouse specialising in sugar, rice, edible oils, flour, pulses,
            spices, snacks and energy drinks.
          </motion.p>

          <motion.div className="about-text-list">
            {HIGHLIGHTS.map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                className="about-text-row"
                variants={textRowVariants}
                custom={idx}
              >
                <span className="about-text-dot"><Icon /></span>
                <p><strong>{title}:</strong> {desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="about-stats-row">
            <motion.div
              className="about-stat-card about-stat-card--light"
              variants={cardVariants}
              custom={0}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <IconLeaf />
              <div>
                <h4>Vision</h4>
                <p>Tech-enabled distribution connecting global supply chains with local markets.</p>
              </div>
            </motion.div>
            <motion.div
              className="about-stat-card about-stat-card--dark"
              variants={cardVariants}
              custom={1}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <IconRocket />
              <div>
                <h4>Mission</h4>
                <p>Trusted launchpad for food brands entering and scaling across the UAE.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
