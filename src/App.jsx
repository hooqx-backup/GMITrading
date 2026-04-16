import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './styles/global.css'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home/HomePage'
import About from './pages/About/AboutPage'
import Products from './pages/Products/ProductsPage'
import Contact from './pages/Contact/ContactPage'
import Services from './pages/Services/ServicesPage'
import OilTinning from './pages/Projects/OilTinningPage'
import GrainsPackaging from './pages/Projects/GrainsPackagingPage'
import AvocadoFarming from './pages/Projects/AvocadoFarmingPage'
import PrivacyPolicyPage from './pages/Legal/PrivacyPolicyPage'
import TermsConditionsPage from './pages/Legal/TermsConditionsPage'

function App(){
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    window.__lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      window.__lenis = null
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/oil-tinning" element={<OilTinning/>} />
          <Route path="/grains-packaging" element={<GrainsPackaging/>} />
          <Route path="/avocado-farming" element={<AvocadoFarming/>} />
          <Route path="/privacy" element={<PrivacyPolicyPage/>} />
          <Route path="/terms" element={<TermsConditionsPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
