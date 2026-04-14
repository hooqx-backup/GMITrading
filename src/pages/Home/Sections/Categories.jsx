import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import '../../../styles/Categories.css'
import catBackground from '../../../assets/images/cat-background.png'
import cat1 from '../../../assets/images/cat1.webp'
import cat2 from '../../../assets/images/cat2.webp'
import cat3 from '../../../assets/images/cat3.webp'

const IconGrains = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)

const IconOils = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
)

const IconPulses = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4l3 3"/>
  </svg>
)

const categories = [
  {
    title: 'Grains & Sugar',
    desc: "Sugar, rice and flour from the world's most fertile regions.",
    image: cat1,
    Icon: IconGrains,
    color: '#4ade80'
  },
  {
    title: 'Edible Oils',
    desc: 'Premium quality vegetable, sunflower and specialized oils.',
    image: cat2,
    Icon: IconOils,
    color: '#22c55e'
  },
  {
    title: 'Pulses & Spices',
    desc: 'Hearty legumes and authentic spices for every kitchen.',
    image: cat3,
    Icon: IconPulses,
    color: '#166534'
  }
]

// Each card animates independently so every scroll in/out re-triggers
function CategoryCard({ category, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const delay = index * 0.15

  return (
    <motion.div
      ref={ref}
      className="category-card-wrapper"
      animate={isInView ? 'visible' : 'hidden'}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: 70,
          scale: 0.88,
          rotateX: 18,
          filter: 'blur(8px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 1.05,
            delay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      <motion.div
        className="category-card"
        whileHover={{ y: -18, scale: 1.025 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <img src={category.image} alt={category.title} className="category-card-bg" />
        <div className="category-card-overlay" />

        <div className="category-card-arrow">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
          </svg>
        </div>

        <div className="category-card-content">
          <div className="category-card-icon">
            <category.Icon />
          </div>
          <h3>{category.title}</h3>
          <p>{category.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CategoriesSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: false, amount: 0.5 })

  return (
    <section className="categories-section">
      <img src={catBackground} alt="" className="categories-bg" />

      <div className="categories-container">
        {/* Header — eyebrow and two title lines animate separately */}
        <div ref={headerRef} className="categories-header">
          <motion.span
            className="categories-eyebrow"
            animate={headerInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 24, filter: 'blur(6px)' }}
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Premium Range
          </motion.span>

          <motion.h2
            className="categories-title"
            animate={headerInView
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 36, filter: 'blur(8px)' }
            }
            initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Core <span>Product Categories</span>
          </motion.h2>
        </div>

        <div className="categories-grid">
          {categories.map((category, idx) => (
            <CategoryCard key={category.title} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
