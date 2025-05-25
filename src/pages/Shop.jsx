import './Shop.css'
import productsData from '../data/products.json'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import logo from '../assets/images/FungiDiet-Logga.png'
import star from '../assets/images/stjärna.PNG'
import rabbit from '../assets/images/DemonRabbitPNG.png'
import ProductCard from '../components/ui/ProductCard'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

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
  const [activeButton, setActiveButton] = useState(null)
  const { setIsRabbitAnimating } = useOutletContext()

  // Debug: logga normaliserade kategorier
  // console.log('category param:', normalize(category))
  // featuredProducts.forEach(p => console.log('product:', p.title, normalize(p.category)))

  const filteredProducts = category
    ? featuredProducts.filter(p => p.category === category)
    : featuredProducts

  const handleCategoryClick = (catValue) => {
    setActiveButton(catValue)
    setIsRabbitAnimating(true)
    navigate(catValue ? `/shop/${catValue}` : '/shop')
  }

  return (
    <div className="shop-page">
      <img src={logo} alt="Fungi Diet logga" className="shop-logo" />
      
      <div className="shop-categories">
        <button
          className={`shop-category-btn font-header${!category ? ' active' : ''}`}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </button>
        <img src={star} alt="star" className="category-star" />
        {categories.map((cat, index) => (
          <div key={cat.value} className="category-container">
            <button
              className={`shop-category-btn font-header${category === cat.value ? ' active' : ''}`}
              onClick={() => handleCategoryClick(cat.value)}
            >
              {cat.label}
            </button>
            {index < categories.length - 1 && (
              <img src={star} alt="star" className="category-star" />
            )}
            <AnimatePresence>
              {activeButton === cat.value && (
                <motion.img
                  src={rabbit}
                  alt="Flying rabbit"
                  className="flying-rabbit"
                  initial={{ 
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scaleX: 1
                  }}
                  animate={{ 
                    x: `calc(-100vw + ${index * 200 + 480}px)`,
                    y: 150,
                    rotate: -15,
                    scaleX: -1
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut"
                  }}
                />
              )}
            </AnimatePresence>
          </div>
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