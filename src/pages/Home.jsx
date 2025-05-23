import './Home.css'
import ProductCard from '../components/ui/ProductCard'
import productsData from '../data/products.json'

const Home = () => {
  const { featuredProducts } = productsData

  return (
    <div className="home">
      <section className="hero">
        <img src="/src/assets/images/fungi-logo.png" alt="Fungi Diet logo" className="main-logo" />
        <p className="subtitle">Upptäck naturens skatter</p>
      </section>

      <section className="featured">
        <h2 className="section-title">Utvalda produkter</h2>
        <div className="items-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
  