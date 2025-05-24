import './Home.css'
import ProductCard from '../components/ui/ProductCard'
import productsData from '../data/products.json'
import monsterPNG from '../assets/images/monsterPNG.png'
import { motion } from 'framer-motion'

const Home = () => {
  const { featuredProducts } = productsData

  return (
    <div className="home">
      <section className="hero">
        <motion.img 
          src={monsterPNG} 
          alt="Fungi Diet monster" 
          className="main-logo"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          Discover the wonders of nature 
        </motion.p>
      </section>

      <section className="featured">
        <h2 className="section-title">Utvalda produkter</h2>
        <div className="items-grid">
          {featuredProducts.slice(0, 3).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
  