import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../../styles/Legal.css'

const sections = [
  {
    title: 'Information We Collect',
    points: [
      'Business and contact details you provide through forms, email, or phone interactions.',
      'Operational data needed to process orders, logistics requests, and customer service actions.',
      'Website usage insights such as pages visited, browser type, and device information for performance optimization.',
    ],
  },
  {
    title: 'How We Use Information',
    points: [
      'To respond to inquiries, coordinate deliveries, and provide support for products and services.',
      'To improve service quality, route planning, inventory visibility, and digital user experience.',
      'To maintain legal compliance, risk monitoring, and secure business operations.',
    ],
  },
  {
    title: 'Data Sharing and Protection',
    points: [
      'We share data only with approved partners and service providers required to deliver contracted services.',
      'We apply technical and organizational safeguards to protect your information from unauthorized access.',
      'We do not sell personal data to third parties for unrelated marketing activity.',
    ],
  },
  {
    title: 'Your Rights',
    points: [
      'You may request access, correction, or deletion of your personal information where legally applicable.',
      'You may ask us to limit certain processing activities subject to operational or legal requirements.',
      'You may contact us at any time for policy clarifications and data-related support.',
    ],
  },
]

export default function PrivacyPolicyPage() {
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

  const rise = {
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
      className="legal-page legal-page--privacy"
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
          <motion.p className="legal-hero__kicker" variants={rise}>Legal</motion.p>
          <motion.h1 variants={rise}>Privacy Policy</motion.h1>
          <motion.p className="legal-hero__lead" variants={rise}>
            This policy explains how GMI General Trading collects, uses, protects, and manages
            information across our digital and operational platforms.
          </motion.p>
          <motion.div className="legal-hero__meta" variants={rise}>
            <motion.span whileHover={{ y: -3, scale: 1.03 }}>Effective Date: April 16, 2026</motion.span>
            <motion.span whileHover={{ y: -3, scale: 1.03 }}>Last Updated: April 16, 2026</motion.span>
          </motion.div>
        </motion.div>
      </motion.section>

      

      <motion.section className="legal-content" style={{ y: contentY }}>
        <motion.div className="container legal-content__grid" variants={container}>
          {sections.map((section, idx) => (
            <motion.article
              key={section.title}
              className="legal-card"
              variants={rise}
              whileHover={{ y: -10, scale: 1.02, rotateY: idx % 2 === 0 ? -5 : 5, rotateX: 4 }}
              transition={{ duration: 0.35 }}
            >
              <h2>{section.title}</h2>
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="container" variants={container}>
          <motion.article
            className="legal-contact-card"
            variants={rise}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Contact For Privacy Requests</h3>
            <p>
              For privacy inquiries, data access requests, or policy clarifications, contact our team
              through the Contact page and mention Privacy Policy support in your request.
            </p>
          </motion.article>
        </motion.div>
      </motion.section>
    </motion.main>
  )
}
