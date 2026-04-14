import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Layout from './components/Layout'
import Home from './pages/Home/HomePage'
import About from './pages/About/AboutPage'
import Products from './pages/Products/ProductsPage'
import Contact from './pages/Contact/ContactPage'

function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
