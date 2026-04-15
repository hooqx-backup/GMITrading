import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import gmiLogo from '../assets/logos/gmi-logo.png'
import '../styles/Header.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

const projectDropdown = [
  { to: '/oil-tinning', label: 'Oil Tinning' },
  { to: '/grains-packaging', label: 'Grains Packaging' },
  { to: '/avocado-farming', label: 'Avocado Farming' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close on route change
  const handleLinkClick = () => setOpen(false)

  return (
    <>
      <header className={`gmi-header${scrolled ? ' gmi-header--scrolled' : ''}`}>
        <div className="container gmi-header-inner">
          {/* Logo */}
          <NavLink to="/" className="gmi-logo-link" onClick={handleLinkClick} aria-label="GMI Trading home">
            <img src={gmiLogo} alt="GMI Trading" className="gmi-logo-img" />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="gmi-nav" aria-label="Main navigation">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                className={({ isActive }) => `gmi-nav-link${isActive ? ' gmi-nav-link--active' : ''}`}
              >
                {l.label}
                <span className="gmi-nav-link-bar" />
              </NavLink>
            ))}
            
            {/* Projects Dropdown */}
            <div className="gmi-nav-dropdown-wrapper">
              <button className="gmi-nav-link gmi-nav-dropdown-trigger">
                Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', transition: 'transform 0.3s' }}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
                <span className="gmi-nav-link-bar" />
              </button>
              <div className="gmi-nav-dropdown">
                {projectDropdown.map((p) => (
                  <NavLink key={p.to} to={p.to} className="gmi-nav-dropdown-item" onClick={handleLinkClick}>
                    {p.label}
                  </NavLink>
                ))}
              </div>
            </div>
            
            <NavLink to="/contact" className="gmi-nav-cta" onClick={handleLinkClick}>
              Get Started
            </NavLink>
          </nav>

          {/* Hamburger */}
          <button
            className={`gmi-hamburger${open ? ' gmi-hamburger--open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="gmi-ham-bar gmi-ham-bar--top" />
            <span className="gmi-ham-bar gmi-ham-bar--mid" />
            <span className="gmi-ham-bar gmi-ham-bar--bot" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`gmi-mobile-overlay${open ? ' gmi-mobile-overlay--visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav
        className={`gmi-mobile-nav${open ? ' gmi-mobile-nav--open' : ''}`}
        aria-label="Mobile navigation"
      >
        {/* Top bar */}
        <div className="gmi-mobile-nav-top">
          <img src={gmiLogo} alt="GMI Trading" className="gmi-mobile-logo" />
          <button className="gmi-mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="gmi-mobile-nav-inner">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                `gmi-mobile-link${isActive ? ' gmi-mobile-link--active' : ''}`
              }
              style={{ '--i': i }}
              onClick={handleLinkClick}
            >
              <span className="gmi-mobile-link-num">0{i + 1}</span>
              <span className="gmi-mobile-link-label">{l.label}</span>
              <span className="gmi-mobile-link-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </NavLink>
          ))}
          
          {/* Mobile Projects Dropdown */}
          <div className="gmi-mobile-projects-wrapper">
            <button 
              className="gmi-mobile-link gmi-mobile-projects-trigger"
              onClick={() => setProjectsOpen(!projectsOpen)}
              style={{ '--i': links.length }}
            >
              <span className="gmi-mobile-link-num">0{links.length + 1}</span>
              <span className="gmi-mobile-link-label">Projects</span>
              <span className="gmi-mobile-link-arrow" style={{ transform: projectsOpen ? 'rotate(90deg)' : 'rotate(0)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6"/>
                </svg>
              </span>
            </button>
            {projectsOpen && (
              <div className="gmi-mobile-projects-menu">
                {projectDropdown.map((p) => (
                  <NavLink
                    key={p.to}
                    to={p.to}
                    className="gmi-mobile-projects-item"
                    onClick={() => {
                      handleLinkClick()
                      setProjectsOpen(false)
                    }}
                  >
                    {p.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="gmi-mobile-footer">
          <NavLink to="/contact" className="gmi-mobile-cta" onClick={handleLinkClick}>
            Get Started
          </NavLink>
          <p className="gmi-mobile-tagline">Feeding Progress, Delivering Quality</p>
        </div>
      </nav>
    </>
  )
}
