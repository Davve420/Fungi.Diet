<<<<<<< HEAD
function Home() {
    return (
      <div>
        <h1>Välkommen hem!</h1>
        <p>Detta är hemsidan.</p>
      </div>
    )
  }
  
  export default Home
=======
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
>>>>>>> 2c72bd45f66938018cd8c97bd0494b59e5979a3b
  