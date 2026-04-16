import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import '../../../styles/Projects.css'
import img1 from '../../../assets/images/project-1.webp'
import img2 from '../../../assets/images/project-2.webp'
import img3 from '../../../assets/images/project-3.jpg'

const projects = [
  {
    id: '01',
    title: 'Oil Tinning',
    description: 'End-to-end tinning solutions for refined edible oils — from sourcing to export-ready packaging.',
    tag: 'Processing',
    img: img1,
    slug: '/oil-tinning',
  },
  {
    id: '02',
    title: 'Grains Packaging',
    description: 'World-class grain handling and packaging with full traceability from farm to shelf.',
    tag: 'Agri-Trade',
    img: img2,
    slug: '/grains-packaging',
  },
  {
    id: '03',
    title: 'Avocado Farming',
    description: 'Premium avocado cultivation and cold-chain logistics ensuring quality at every touchpoint.',
    tag: 'Horticulture',
    img: img3,
    slug: '/avocado-farming',
  },
]

const EASE   = [0.16, 1, 0.3, 1] 
const SPRING = { type: 'spring', stiffness: 280, damping: 30, mass: 1 } 

const cardVariants = {
  hidden:  { opacity: 0, y: 50, scale: 0.98, filter: 'blur(4px)' },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
    transition: { duration: 1, ease: EASE, delay: 0.1 + i * 0.1 },
  }),
}

function ProjectCard({ project, index, featured = false, isInView }) {
  const cardRef  = useRef(null)
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const smoothX = useSpring(mouseX, SPRING)
  const smoothY = useSpring(mouseY, SPRING)

  const rotateX = useTransform(smoothY, [0, 1], [4, -4])
  const rotateY = useTransform(smoothX, [0, 1], [-4, 4])

  const imageX = useTransform(smoothX, [0, 1], ['-2%', '2%'])
  const imageY = useTransform(smoothY, [0, 1], ['-2%', '2%'])


  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top)  / rect.height)
  }

  const handleMouseLeave = () => {
    setHovered(false)
    mouseX.set(0.5) 
    mouseY.set(0.5)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`proj-card ${featured ? 'proj-card--featured' : 'proj-card--small'} ${hovered ? 'is-hovered' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={index}
      style={{ rotateX, rotateY, transformPerspective: 1200, cursor: 'pointer' }}
      whileHover={{ scale: 1.02, zIndex: 10, transition: SPRING }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(project.slug)}
    >
      {/* 1. Background Clipping Layer (Fixes the overlay edges) */}
      <div className="proj-bg-clip">
        <div className="proj-img-wrapper">
          <motion.img
            src={project.img}
            alt={project.title}
            className="proj-img"
            style={{ x: imageX, y: imageY }}
            animate={{
              scale:  hovered ? 1.08 : 1.02,
              filter: hovered
                ? 'brightness(1.02) saturate(1.05)'
                : 'brightness(0.95) saturate(0.95)',
            }}
            transition={{ duration: 0.8, ease: EASE }}
          />
        </div>

        <motion.div
          className="proj-overlay"
          animate={{
            background: hovered
              ? 'linear-gradient(to bottom, rgba(255,255,255,0) 25%, rgba(255,255,255,0.35) 60%, rgba(255,255,255,0.96) 90%)'
              : 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.35) 72%)',
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>

      {/* 2. Content wrapper pushed forward on the Z-axis */}
      <motion.div 
        className="proj-content"
        animate={{ translateZ: hovered ? 30 : 0 }} 
        transition={SPRING}
      >
        <div className="proj-top-bar">
          <motion.span
            className="proj-tag"
            animate={{
              y: hovered ? -3 : 0,
              background: hovered ? 'rgba(31,122,90,0.08)' : 'rgba(255,255,255,0.7)',
              borderColor: hovered ? 'rgba(31,122,90,0.2)' : 'rgba(0,0,0,0.06)',
              color: hovered ? '#1f7a5a' : '#0f1f18',
            }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {project.tag}
          </motion.span>

          <motion.span
            className="proj-num"
            animate={{ y: hovered ? -4 : 0, opacity: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {project.id}
          </motion.span>
        </div>

        <div className="proj-bottom">
          <motion.h3
            className="proj-name"
            animate={{
              y: hovered ? -6 : 0,
              letterSpacing: hovered ? '-0.01em' : '-0.03em',
            }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {project.title}
          </motion.h3>

          <AnimatePresence>
            {hovered && (
              <motion.div
                key="reveal"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                style={{ overflow: 'hidden' }}
              >
                <motion.p
                  className="proj-desc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
                >
                  {project.description}
                </motion.p>

                <button className="proj-cta" aria-label="View Project" onClick={(e) => { e.stopPropagation(); navigate(project.slug) }}>
                  <motion.span
                    className="proj-cta-text"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
                  >
                    Explore
                  </motion.span>

                  <motion.span
                    className="proj-cta-icon"
                    initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ ...SPRING, delay: 0.15 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#1f7a5a', borderColor: '#1f7a5a', color: '#ffffff', transition: { duration: 0.2 } }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <motion.path
                        d="M1 8h14"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, ease: EASE, delay: 0.25 }}
                      />
                      <motion.path
                        d="M9 2l6 6-6 6"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, ease: EASE, delay: 0.35 }}
                      />
                    </svg>
                  </motion.span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView   = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section className="proj-section" ref={sectionRef}>
      <div className="proj-container">
        
        <div className="proj-header">
          <div className="proj-header-left">
            <div className="proj-eyebrow">
              <motion.span
                className="proj-eyebrow-line"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              >
                In-Depth
              </motion.span>
            </div>

            <h2 className="proj-title">
              {['Explore', 'Projects.'].map((line, i) => (
                <span key={line} className="proj-title-mask">
                  <motion.span
                    style={{ display: 'block' }}
                    initial={{ y: '105%' }}
                    animate={isInView ? { y: '0%' } : {}}
                    transition={{ duration: 1, ease: EASE, delay: 0.18 + i * 0.13 }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>
          </div>

          <motion.div
            className="proj-header-right"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
          >
            <p className="proj-sub">
              A look at the commodities we trade, process, and deliver across global markets.
            </p>
          </motion.div>
        </div>

        <div className="proj-grid">
          <ProjectCard project={projects[0]} index={0} featured isInView={isInView} />
          <div className="proj-stack">
            <ProjectCard project={projects[1]} index={1} isInView={isInView} />
            <ProjectCard project={projects[2]} index={2} isInView={isInView} />
          </div>
        </div>

      </div>
    </section>
  )
}