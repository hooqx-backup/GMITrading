import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../../styles/Legal.css'

const termsSections = [
  {
    title: 'Acceptance of Terms',
    text: 'By accessing this website or engaging with GMI services, you agree to comply with these Terms and Conditions and all applicable laws and regulations.',
  },
  {
    title: 'Service Scope',
    text: 'Product availability, pricing, delivery windows, and service commitments may vary by region, category, and operational constraints. Final terms are confirmed through approved quotations or agreements.',
  },
  {
    title: 'Orders and Payments',
    text: 'All orders are subject to confirmation. Payment timelines, credit terms, and invoicing procedures are governed by mutually approved commercial arrangements.',
  },
  {
    title: 'Intellectual Property',
    text: 'All content on this site, including branding, visuals, and text, is owned by or licensed to GMI and may not be reproduced without prior written permission.',
  },
  {
    title: 'Liability and Disclaimer',
    text: 'We strive for accuracy and service continuity, but we do not guarantee uninterrupted site availability. GMI is not liable for indirect losses arising from website use or external dependencies.',
  },
  {
    title: 'Changes to Terms',
    text: 'GMI may update these terms periodically. Updated terms become effective once published on this page with a revised date.',
  },
]

export default function TermsConditionsPage() {
  const pageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start start', 'end end'],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const heroScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1.03, 1.06])
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -140])
  const contentY = useTransform(scrollYProgress, [0, 1], [32, -22])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.16, 0.32], [0.1, 1, 0.25])
  const overlayScale = useTransform(scrollYProgress, [0, 0.22], [0.84, 1.1])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const reveal = {
    hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.main
      className="legal-page legal-page--terms"
      ref={pageRef}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      <motion.section className="legal-hero" style={{ y: heroY }}>
        <motion.div className="legal-hero__orbs" aria-hidden="true" style={{ y: orbY }}>
          <span className="legal-hero__orb legal-hero__orb--one" />
          <span className="legal-hero__orb legal-hero__orb--two" />
          <span className="legal-hero__orb legal-hero__orb--three" />
        </motion.div>
        <motion.div className="container legal-hero__inner" variants={container} style={{ scale: heroScale }}>
          <motion.p className="legal-hero__kicker" variants={reveal}>Legal</motion.p>
          <motion.h1 variants={reveal}>Terms and Conditions</motion.h1>
          <motion.p className="legal-hero__lead" variants={reveal}>
            These terms define the framework for using our website and engaging with GMI General
            Trading services.
          </motion.p>
          <motion.div className="legal-hero__meta" variants={reveal}>
            <motion.span whileHover={{ y: -3, scale: 1.03 }}>Effective Date: April 16, 2026</motion.span>
            <motion.span whileHover={{ y: -3, scale: 1.03 }}>Last Updated: April 16, 2026</motion.span>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.div
        className="legal-transition-overlay"
        style={{ opacity: overlayOpacity, scaleX: overlayScale }}
        aria-hidden="true"
      >
        <span className="legal-transition-overlay__beam legal-transition-overlay__beam--one" />
        <span className="legal-transition-overlay__beam legal-transition-overlay__beam--two" />
      </motion.div>

      <motion.section className="legal-content" style={{ y: contentY }}>
        <motion.div className="container legal-content__stack" variants={container}>
          {termsSections.map((item, idx) => (
            <motion.article
              key={item.title}
              className="legal-strip"
              variants={reveal}
              whileHover={{ y: -10, scale: 1.02, rotateY: idx % 2 === 0 ? -4 : 4 }}
              transition={{ duration: 0.35 }}
            >
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="container" variants={container}>
          <motion.article
            className="legal-contact-card"
            variants={reveal}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Questions About Terms</h3>
            <p>
              For commercial clarifications, legal support, or contract-specific requests, please reach
              us through the Contact page and include Terms and Conditions in the subject.
            </p>
          </motion.article>
        </motion.div>
      </motion.section>
    </motion.main>
  )
}
