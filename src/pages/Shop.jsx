import './Shop.css'
import productsData from '../data/products.json'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import { logo, star, rabbit } from '../assets/images'
import ProductCard from '../components/ui/ProductCard'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'

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
  const buttonRefs = useRef({})

  const filteredProducts = category
    ? featuredProducts.filter(p => p.category === category)
    : featuredProducts

  const handleCategoryClick = (catValue) => {
    setActiveButton(catValue)
    setIsRabbitAnimating(true)
    navigate(catValue ? `/shop/${catValue}` : '/shop')
  }

  // Beräkna målposition för kaninen baserat på knappens position
  const getTargetPosition = (catValue) => {
    if (!catValue || !buttonRefs.current[catValue]) return { x: 0, y: 0 }
    
    const buttonRect = buttonRefs.current[catValue].getBoundingClientRect()
    
    return {
      x: buttonRect.left + buttonRect.width / 2 - 25, // -25 för att centrera kaninen (50px bred / 2)
      y: buttonRect.top - 50 // Justerat för att "landa" på knappens överkant
    }
  }

  // Beräkna startposition från NavBar-kaninen (övre högra hörnet)
  const getStartPosition = () => {
    return {
      x: window.innerWidth - 75, // Ungefär där NavBar-kaninen är
      y: 10 // Ungefär NavBar-höjd
    }
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
              ref={el => buttonRefs.current[cat.value] = el}
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
                    ...getStartPosition(),
                    rotate: 0,
                    scaleX: 1
                  }}
                  animate={{ 
                    ...getTargetPosition(cat.value),
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