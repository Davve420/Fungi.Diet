import { Link } from 'react-router-dom'
import './ShopHeader.css'

const ShopHeader = () => {
  const categories = [
    { name: 'Jewelry', path: '/shop/jewelry' },
    { name: 'Apparel', path: '/shop/apparel' },
    { name: 'Home Decor', path: '/shop/home-decor' }
  ]

  return (
    <div className="shop-header">
      <h1>Shop</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={category.name} className="category-item">
            <Link to={category.path} className="category-link">
              {category.name}
            </Link>
            {index < categories.length - 1 && (
              <img 
                src="/src/assets/images/stjärna.PNG" 
                alt="star" 
                className="category-star"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopHeader 