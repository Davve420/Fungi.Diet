import './Shop.css'
import productsData from '../data/products.json'
import { useParams, useNavigate } from 'react-router-dom'
import logo from '../assets/images/FungiDiet-Logga.png'
import ProductCard from '../components/ui/ProductCard'

const categories = [
  { label: 'Jewelry', value: 'jewelry' },
  { label: 'Apparel', value: 'apparel' },
  { label: 'Home Decor', value: 'home-decor' }
]

const normalize = str => (str ? str.toLowerCase().replace(/\s+/g, '-') : '')

const Shop = () => {
  const { category } = useParams()
  const navigate = useNavigate()
  const { featuredProducts } = productsData

  // Debug: logga normaliserade kategorier
  // console.log('category param:', normalize(category))
  // featuredProducts.forEach(p => console.log('product:', p.title, normalize(p.category)))

  const filteredProducts = category
    ? featuredProducts.filter(p => p.category === category)
    : featuredProducts

  return (
    <div className="shop-page">
      <img src={logo} alt="Fungi Diet logga" className="shop-logo" />
      
      <div className="shop-categories">
      <button
          className={`shop-category-btn font-header${!category ? ' active' : ''}`}
          onClick={() => navigate('/shop')}
        >
          All
        </button>
        {categories.map(cat => (
          
          <button
            key={cat.value}
            className={`shop-category-btn font-header${category === cat.value ? ' active' : ''}`}
            onClick={() => navigate(category === cat.value ? '/shop' : `/shop/${cat.value}`)}
          >
            {cat.label}
          </button>
        ))}
        
      </div>
      <div className="shop-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} variant="shop" />
        ))}
      </div>
    </div>
  )
}

export default Shop 