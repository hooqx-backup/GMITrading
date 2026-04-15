import Header from './Header'
import Footer from './Footer'

export default function Layout({children}){
  return (
    <div>
      <Header />
      <main style={{minHeight:'60vh',width:'100%',overflowX:'hidden'}}>{children}</main>
      <Footer />
    </div>
  )
}
