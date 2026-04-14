import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}){
  return (
    <div>
      <Header />
      <main className="container" style={{minHeight:'60vh'}}>{children}</main>
      <Footer />
    </div>
  )
}
