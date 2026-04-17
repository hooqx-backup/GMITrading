import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Warehouse, Globe, Cpu, Leaf, Rocket } from 'lucide-react'
import aboutSectionImage from '../../../assets/images/about-section.jpg'
import '../../../styles/About.css'

const IconPin      = () => <MapPin strokeWidth={2} />
const IconWarehouse = () => <Warehouse strokeWidth={2} />
const IconGlobe    = () => <Globe strokeWidth={2} />
const IconCpu      = () => <Cpu strokeWidth={2} />
const IconLeaf     = () => <Leaf strokeWidth={2} />
const IconRocket   = () => <Rocket strokeWidth={2} />

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
