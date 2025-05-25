import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ isRabbitAnimating }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
        <img 
          src="/src/assets/images/DemonRabbitPNG.png" 
          alt="Fungi.Diet Rabbit" 
          className={`rabbit-icon ${isRabbitAnimating ? 'hidden' : ''}`}
        />
      </div>
    </nav>
  )
}

export default NavBar
