import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
import './Layout.css'

const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <main>
        <Outlet />
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