import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Wheat, Droplets, Clock, ArrowUpRight } from 'lucide-react'
import '../../../styles/Categories.css'
import catBackground from '../../../assets/images/cat-background.png'
import cat1 from '../../../assets/images/cat1.webp'
import cat2 from '../../../assets/images/cat2.webp'
import cat3 from '../../../assets/images/cat3.webp'

const IconGrains  = () => <Wheat  width="24" height="24" strokeWidth="2" />
const IconOils    = () => <Droplets width="24" height="24" strokeWidth="2" />
const IconPulses  = () => <Clock  width="24" height="24" strokeWidth="2" />

const categories = [
  {
    title: 'Grains',
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
    title: 'Pulses & Legumes',
    desc: 'Hearty legumes and authentic spices for every kitchen.',
    image: cat3,
    Icon: IconPulses,
    color: '#166534'
  }
]

// Each card animates independently so every scroll in/out re-triggers
function CategoryCard({ category, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const delay = index * 0.1

  return (
    <motion.div
      ref={ref}
      className="category-card-wrapper"
      animate={isInView ? 'visible' : 'hidden'}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          scale: 0.95,
          filter: 'blur(4px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: {
            duration: 0.8,
            delay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      <motion.div
        className="category-card"
        whileHover={{ y: -12, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        <img src={category.image} alt={category.title} className="category-card-bg" />
        <div className="category-card-overlay" />

        <div className="category-card-arrow">
          <ArrowUpRight width="20" height="20" strokeWidth="2.5" />
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
