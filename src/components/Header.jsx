import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
  const links = [
    {to: '/', label:'Home'},
    {to: '/about', label:'About'},
    {to: '/products', label:'Products'},
    {to: '/contact', label:'Contact'},
  ]

  return (
    <header className="site-header full-width">
      <div className="container site-header-inner">
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <div className="brand">gmi</div>
        </div>
        <nav className="nav" aria-label="Main navigation">
          {links.map(l=> (
            <NavLink key={l.to} to={l.to} end className={({isActive})=> isActive? 'active':''}>{l.label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
