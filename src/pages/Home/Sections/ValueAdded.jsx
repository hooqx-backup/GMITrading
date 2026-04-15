import React from 'react'
import { motion } from 'framer-motion'
import valueBg from '../../../assets/images/value-back.png'
import '../../../styles/ValueAdded.css'

/* ── Shared animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show:   { opacity: 1, x: 0,   transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show:   { opacity: 1, x: 0,   transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = (delayChildren = 0.1) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delayChildren } },
})

/* Word-by-word reveal for the big title */
function RevealTitle({ children, className }) {
  const words = children.split(' ')
  return (
    <motion.h2
      className={className}
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 24, skewY: 4 },
            show:   { opacity: 1, y: 0,  skewY: 0,
                      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
          }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  )
}

const features = [
  {
    title: 'Grains, Pulses & Sugar',
    desc: 'Automated form-fill-seal lines for 1 kg, 2 kg and 5 kg retail bags — precision-packed at scale.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 4 6 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4-4-8-8-8z"/>
        <circle cx="12" cy="10" r="2.5"/>
      </svg>
    ),
  },
  {
    title: 'Edible Oils',
    desc: 'High-speed filling line for 18 L food-service tins with nitrogen-flushing for extended shelf life.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l1 9H5L6 3z"/>
        <path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>
        <path d="M10 17v-4M14 17v-4"/>
      </svg>
    ),
  },
]

const offices = [
  { region: 'Dubai, UAE',     office: 'Ras Al Khor Industrial Area', fn: 'HQ · Sales · Warehouse' },
  { region: 'Ajman, UAE',     office: 'Al Jurf 2 Industrial Area',   fn: 'Distribution Hub'        },
  { region: 'Kolkata, India', office: 'Salt Lake City',              fn: 'Procurement Liaison'     },
  { region: 'Delaware, USA',  office: 'Wilmington',                  fn: 'Corporate & Finance'     },
  { region: 'Kigali, Rwanda', office: 'Special Economic Zone',       fn: 'East Africa Entry'       },
]

const bottomStats = [
  { value: '5',   label: 'Global Offices' },
  { value: '15+', label: 'Years Active'   },
  { value: '3',   label: 'Continents'     },
]

export default function ValueAdded() {
  return (
    <section className="va-section">
      <div className="va-container">

        {/* ══ LEFT: Packaging ══ */}
        <div className="va-left">

          {/* Eyebrow */}
          <motion.span
            className="va-eyebrow"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            Our Capabilities
          </motion.span>

          {/* Word-by-word title */}
          <motion.h2
            className="va-title"
            variants={stagger(0.09)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {['Value', 'Added'].map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 28, skewY: 3 },
                  show:   { opacity: 1, y: 0,  skewY: 0,
                            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
                }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 28, skewY: 3 },
                show:   { opacity: 1, y: 0,  skewY: 0,
                          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
              }}
              style={{ display: 'block' }}
            >
              Packaging
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="va-desc"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.15 }}
          >
            In-house packaging infrastructure that shortens lead times,
            reduces wastage and enables private-label solutions for
            retail, wholesale and HORECA clients.
          </motion.p>

          {/* Feature cards */}
          <motion.div
            className="va-features"
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((f, i) => (
              <motion.div className="va-feature" key={i} variants={fadeUp}>
                <div className="va-feature-icon">{f.icon}</div>
                <div className="va-feature-body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.div
            className="va-note"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <svg className="va-note-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
            </svg>
            Vertical integration across packaging enables consistent quality control
            and faster time-to-shelf for our distribution partners.
          </motion.div>
        </div>

        {/* ══ RIGHT: Image card ══ */}
        <motion.div
          className="va-right"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img className="va-bg" src={valueBg} alt="" aria-hidden="true" />
          <div className="va-right-overlay" />

          <div className="va-right-inner">

            {/* Right header */}
            <motion.div
              className="va-right-header"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.span className="va-right-eyebrow" variants={fadeUp}>
                Worldwide Footprint
              </motion.span>
              <motion.h3 className="va-right-title" variants={fadeUp}>
                Global Presence
              </motion.h3>
            </motion.div>

            {/* Office cards */}
            <motion.div
              className="va-offices"
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {offices.map((o, i) => (
                <motion.div
                  className="va-office-card"
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    show:   { opacity: 1, x: 0,
                              transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <span className="va-office-index">0{i + 1}</span>
                  <div className="va-office-info">
                    <span className="va-office-region">{o.region}</span>
                    <span className="va-office-name">{o.office}</span>
                  </div>
                  <span className="va-office-tag">{o.fn}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="va-stats-row"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              {bottomStats.map((s, i) => (
                <motion.div
                  className="va-stat-box"
                  key={i}
                  variants={fadeUp}
                >
                  <div className="va-stat-box-value">{s.value}</div>
                  <div className="va-stat-box-label">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
