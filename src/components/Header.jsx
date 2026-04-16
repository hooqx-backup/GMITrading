import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import gmiLogo from '../assets/logos/gmi-logo.png'
import '../styles/Header.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },


  { to: '/contact', label: 'Contact' },
  { to: '/services', label: 'Services' }
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
  const desktopDropdownRef = useRef(null)
  const mobileProjectsRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close desktop dropdown on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      const inDesktop = desktopDropdownRef.current?.contains(e.target)
      const inMobile = mobileProjectsRef.current?.contains(e.target)

      if (!inDesktop && !inMobile) {
        setProjectsOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  // close on route change
  const handleLinkClick = () => {
    setOpen(false)
    setProjectsOpen(false)
  }

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
            <div
              ref={desktopDropdownRef}
              className={`gmi-nav-dropdown-wrapper${projectsOpen ? ' gmi-nav-dropdown-wrapper--open' : ''}`}
            >
              <button
                className="gmi-nav-link gmi-nav-dropdown-trigger"
                onClick={() => setProjectsOpen((v) => !v)}
              >
                Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', transition: 'transform 0.3s', transform: projectsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
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

            {/* Social icons */}
            <div className="gmi-nav-socials">
              <a href="https://www.facebook.com/GMIGENERALTRADING/?rdid=swxzfrDpdTlPhDel" target="_blank" rel="noopener noreferrer" className="gmi-nav-social-icon" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/gmitrading25/?igsh=ZjhxczlpYzc2NGRm#" target="_blank" rel="noopener noreferrer" className="gmi-nav-social-icon" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF_zMkuRK4soQAAAZ2Wes7gPxhJ1L085rbzEVTkCgx2ictkrTRu1Qp8sytrdviRDwsKEu3cyszU2RYo3nGBnxGZrPTjT-0IMVK3CV_NaTnvPBCUqSGtJwmKi-gSUev9uEX88j0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgmi-trading-official%2F" target="_blank" rel="noopener noreferrer" className="gmi-nav-social-icon" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
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
          <div ref={mobileProjectsRef} className="gmi-mobile-projects-wrapper">
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
