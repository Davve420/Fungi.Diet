import { useNavigate } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const { title, description, image, price } = product

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image">
        {image ? (
          <img src={image} alt={title} className="product-img" />
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

export default ProductCard 