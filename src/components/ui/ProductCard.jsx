import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ProductCard.css'

const ProductCard = ({ product, index = 0, variant }) => {
  const navigate = useNavigate()
  const { title, image, price, id } = product

  const handleClick = () => {
    if (variant === 'shop') {
      navigate(`/product/${id}`)
    } else {
      navigate(`/product/${id}`)
    }
  }

  if (variant === 'shop') {
    return (
      <div className="product-card shop-card" onClick={handleClick}>
        <div className="product-image">
          {image ? (
            <img src={image} alt={title} className="product-img" />
          ) : (
            <div className="image-placeholder"></div>
          )}
        </div>
        <div className="product-info shop-info">
          <h3>{title}</h3>
          <span className="price">{price}</span>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="product-card"
      onClick={handleClick}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 + index * 0.18, ease: 'easeOut' }}
    >
      <div className="product-image">
        {image ? (
          <img src={image} alt={title} className="product-img" />
        ) : (
          <div className="image-placeholder"></div>
        )}
        <div className="product-title-overlay">
          <h3>{title}</h3>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard 