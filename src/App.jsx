import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Layout from './components/Layout'
import Home from './pages/Home/HomePage'
import About from './pages/About/AboutPage'
import Products from './pages/Products/ProductsPage'
import Contact from './pages/Contact/ContactPage'
import Services from './pages/Services/ServicesPage'
import OilTinning from './pages/Projects/OilTinningPage'
import GrainsPackaging from './pages/Projects/GrainsPackagingPage'
import AvocadoFarming from './pages/Projects/AvocadoFarmingPage'

function App(){
  return (
    <BrowserRouter>
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
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
