import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import aboutSectionImage from '../../../assets/images/about-section.jpg'

export default function Hero(){
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }

  const rise = {
    hidden: { opacity: 0, y: 38, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const kpis = [
    { value: '10,000+', label: 'active UAE customer accounts' },
    { value: '24/7', label: 'operational planning and dispatch rhythm' },
    { value: '5', label: 'core international office locations' },
  ]

  return (
    <motion.section
      className="about-page-hero"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      variants={container}
    >
      <motion.div
        className="about-page-hero__ambient about-page-hero__ambient--one"
        animate={{ x: [0, 24, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="about-page-hero__ambient about-page-hero__ambient--two"
        animate={{ x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="about-page-hero__particles" aria-hidden="true">
        <span className="about-page-hero__particle about-page-hero__particle--one" />
        <span className="about-page-hero__particle about-page-hero__particle--two" />
        <span className="about-page-hero__particle about-page-hero__particle--three" />
      </div>

      <div className="about-page-hero__inner container">
        <motion.div className="about-page-hero__content" variants={container}>
          <motion.p className="about-page-hero__eyebrow" variants={rise}>GMI General Trading</motion.p>
          <motion.h1 variants={rise}>
            Built For Scale.<br />
            Trusted For <span>Precision Food Distribution</span>.
          </motion.h1>
          <motion.p className="about-page-hero__lead" variants={rise}>
            From strategic sourcing to fast last-mile execution, we connect global producers to UAE
            retail, wholesale, and HORECA demand with unmatched reliability.
          </motion.p>

          <motion.div className="about-page-hero__cta-row" variants={rise}>
            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="about-page-btn about-page-btn--solid">Start Partnership</Link>
            </motion.div>
            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link to="/services" className="about-page-btn about-page-btn--ghost">Explore Services</Link>
            </motion.div>
          </motion.div>

          <motion.div className="about-page-hero__kpis" variants={container}>
            {kpis.map((kpi, idx) => (
              <motion.article
                key={kpi.value}
                variants={rise}
                whileHover={{
                  y: -8,
                  rotateX: 8,
                  rotateY: idx % 2 === 0 ? -8 : 8,
                  scale: 1.03,
                }}
                transition={{ duration: 0.35 }}
              >
                <h3>{kpi.value}</h3>
                <p>{kpi.label}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="about-page-hero__visual"
          variants={{
            hidden: { opacity: 0, x: 60, scale: 0.92, rotateY: -10 },
            show: {
              opacity: 1,
              x: 0,
              scale: 1,
              rotateY: 0,
              transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <motion.div
            className="about-page-hero__image-shell"
            whileHover={{ rotateX: 5, rotateY: -8, scale: 1.02 }}
            transition={{ duration: 0.45 }}
          >
            <motion.img
              src={aboutSectionImage}
              alt="GMI premium supply chain operations"
              animate={{ scale: [1.03, 1.1, 1.03], x: [0, -8, 0], y: [0, -5, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="about-page-hero__overlay"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="about-page-hero__tag"
              initial={{ opacity: 0, y: 28, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <strong>26,000+</strong>
              <span>farmers and food producers in our sourcing ecosystem</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
