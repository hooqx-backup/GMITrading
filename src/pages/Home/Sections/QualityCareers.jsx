import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, FileText, DollarSign } from 'lucide-react'
import '../../../styles/QualityCareers.css'
// Replace with your actual image path
import qualityImg from '../../../assets/images/quality.png'

// Smoother, ultra-premium easing curve
const PREMIUM_EASE = [0.22, 1, 0.36, 1]

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: PREMIUM_EASE, delay: i * 0.15 }
  })
}

const PieChart = ({ percentage, label, color = 'var(--qc-accent)' }) => {
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="qc-pie-item">
      <div className="qc-pie-wrapper">
        <svg width="88" height="88" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0px 4px 8px rgba(17, 94, 65, 0.15))' }}>
          {/* Background Track */}
          <circle
            cx="50" cy="50" r={radius}
            fill="transparent"
            stroke="var(--qc-surface-alt)"
            strokeWidth="6"
          />
          {/* Animated Progress */}
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="6"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.8, ease: PREMIUM_EASE, delay: 0.6 }}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          {/* Center Text */}
          <text
            x="50%" y="50%"
            dominantBaseline="middle" textAnchor="middle"
            className="qc-pie-text"
          >
            {percentage}%
          </text>
        </svg>
      </div>
      <span className="qc-pie-label">{label}</span>
    </div>
  )
}

export default function QualityCareers() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.15 })

  const features = [
    {
      title: 'Food Safety Leadership',
      desc: 'HACCP compliant facilities and ISO 22000 certification across all regional hubs.',
      icon: <Shield size={24} strokeWidth={1.5} />
    },
    {
      title: 'Digital Ledger Traceability',
      desc: 'End-to-end batch traceability through our proprietary ledger, ensuring total transparency.',
      icon: <FileText size={24} strokeWidth={1.5} />
    },
    {
      title: 'Sustainable Infrastructure',
      desc: 'Regional storage nodes reduce post-harvest losses and minimize food miles by 40%.',
      icon: <DollarSign size={24} strokeWidth={1.5} />
    }
  ]

  return (
    <section className="qc-section" ref={containerRef}>
      {/* Decorative ambient background glows */}
      <div className="qc-ambient-glow glow-1" />
      <div className="qc-ambient-glow glow-2" />

      <div className="qc-container">
        <div className="qc-layout">
          
          {/* Content Side */}
          <div className="qc-content">
            <motion.div 
              className="qc-header"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              custom={0}
            >
              <div className="qc-eyebrow">
                <span className="qc-line" />
                <span>Our Philosophy</span>
              </div>
              <h2 className="qc-title">
                Quality Without <br/>
                <span className="qc-text-gradient">Compromise.</span>
              </h2>
              <p className="qc-description">
                At GMI Trading, we believe that world-class quality starts at the farm and ends with a delighted consumer. Our commitment to sustainability drives every logistic decision we make.
              </p>
            </motion.div>

            <div className="qc-features">
              {features.map((feature, i) => (
                <motion.div 
                  className="qc-feature-card"
                  key={i}
                  custom={i + 2}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeUpVariants}
                  whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
                >
                  <div className="qc-icon-box">
                    {feature.icon}
                  </div>
                  <div className="qc-feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="qc-visual">
            <motion.div 
              className="qc-image-wrapper"
              initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.4, ease: PREMIUM_EASE, delay: 0.2 }}
            >
              <div className="qc-image-overlay" />
              <img 
                src={qualityImg} 
                alt="Quality Assurance Operations" 
                className="qc-main-img" 
              />
            </motion.div>

            {/* Premium Glassmorphic Floating Card */}
            <motion.div 
              className="qc-glass-card"
              initial={{ opacity: 0, y: 50, x: 20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 1.2, ease: PREMIUM_EASE, delay: 0.8 }}
            >
              <div className="qc-pies-container">
                <PieChart percentage={83} label="Sustainability" />
                <div className="qc-divider-vertical" />
                <PieChart percentage={60} label="Emp. Growth" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}