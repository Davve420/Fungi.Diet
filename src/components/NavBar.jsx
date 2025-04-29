import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Hem</Link>
      <Link to="/about">Om</Link>
    </nav>
  )
}

export default NavBar
