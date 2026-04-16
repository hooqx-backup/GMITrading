import React from 'react'
import { motion } from 'framer-motion'

const capabilityCards = [
  {
    title: 'UAE Distribution Core',
    text: 'Integrated warehousing, cross-docking, and route orchestration optimized for daily replenishment windows.',
  },
  {
    title: 'Data-Led Operations',
    text: 'Demand signals, pricing data, and inventory intelligence power faster decisions across every movement.',
  },
  {
    title: 'Category Depth',
    text: 'Sugar, rice, flour, oils, pulses, spices, snacks, and energy drinks delivered with strict quality continuity.',
  },
  {
    title: 'Brand Growth Engine',
    text: 'Launch and scale support for partners entering competitive UAE channels with confidence and speed.',
  },
]

export default function Info(){
  const sectionVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const revealUp = {
    hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.section
      className="about-page-info"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div className="container about-page-info__inner" variants={sectionVariants}>
        <motion.div className="about-page-info__story" variants={sectionVariants}>
          <motion.p className="about-page-section-kicker" variants={revealUp}>Who We Are</motion.p>
          <motion.h2 variants={revealUp}>Engineering dependable food movement across every touchpoint.</motion.h2>
          <motion.p variants={revealUp}>
            GMI is an independent UAE-based trading and distribution group designed for modern food
            commerce. Our systems are built to reduce friction between producers, distributors,
            and buyers by combining robust physical infrastructure with digital execution.
          </motion.p>
          <motion.p variants={revealUp}>
            Every process is calibrated for speed, freshness, and consistency. That allows our
            partners to operate with confidence while scaling rapidly in fast-moving market conditions.
          </motion.p>
        </motion.div>

        <motion.aside className="about-page-info__principles" variants={sectionVariants}>
          <motion.article variants={revealUp} whileHover={{ y: -8, scale: 1.02, rotateX: 5 }}>
            <h3>Vision</h3>
            <p>To set the benchmark for premium food distribution performance across the region.</p>
          </motion.article>
          <motion.article variants={revealUp} whileHover={{ y: -8, scale: 1.02, rotateX: 5 }}>
            <h3>Mission</h3>
            <p>To be the most trusted launchpad for brands building long-term market presence in the UAE.</p>
          </motion.article>
          <motion.article variants={revealUp} whileHover={{ y: -8, scale: 1.02, rotateX: 5 }}>
            <h3>Operating DNA</h3>
            <p>Reliability, category expertise, digital accuracy, and accountable service at every level.</p>
          </motion.article>
        </motion.aside>
      </motion.div>

      <motion.div className="container about-page-info__cards" variants={sectionVariants}>
        {capabilityCards.map((card, idx) => (
          <motion.article
            key={card.title}
            className="about-page-capability-card"
            variants={revealUp}
            whileHover={{ y: -10, scale: 1.03, rotateY: idx % 2 === 0 ? -6 : 6 }}
            transition={{ duration: 0.35 }}
          >
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}
