import { useParams, useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'
import * as images from '../assets/images'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = productsData.featuredProducts.find(p => p.id === parseInt(id))

  if (!product) {
    return <div>Produkten hittades inte</div>
  }

  // Get the actual image from our imports
  const productImage = images[product.image] || product.image

  const handleBuyClick = () => {
    // Här kan vi lägga till köp-logik senare
    alert('Köp-funktionalitet kommer snart!')
  }

  return (
    <div className="product-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Tillbaka
      </button>
      
      <div className="product-detail-content">
        <div className="product-image-large">
          {productImage ? (
            <img src={productImage} alt={product.title} />
          ) : (
            <div className="image-placeholder"></div>
          )}
        </div>

        <div className="product-info-detailed">
          <h1>{product.title}</h1>
          <p className="price">{product.price}</p>
          <p className="description">{product.longDescription}</p>
          
          <div className="features">
            <h3>Funktioner:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <button style={{fontFamily: 'Montserrat, Arial, sans-serif'}}
            className="buy-button"
            onClick={handleBuyClick}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Köp nu' : 'Slut i lager'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail 