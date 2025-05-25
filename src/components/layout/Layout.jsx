import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../NavBar'
import './Layout.css'
import { useState, useEffect } from 'react'

const Layout = () => {
  const [isRabbitAnimating, setIsRabbitAnimating] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Dölj kaninen när vi är på en specifik kategori
    if (location.pathname.startsWith('/shop/')) {
      setIsRabbitAnimating(true)
    } else {
      // Visa kaninen på alla andra sidor
      setIsRabbitAnimating(false)
    }
  }, [location])

  return (
    <div className="layout">
      <NavBar isRabbitAnimating={isRabbitAnimating} />
      <main>
        <Outlet context={{ setIsRabbitAnimating }} />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Fungi.Diet</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout 