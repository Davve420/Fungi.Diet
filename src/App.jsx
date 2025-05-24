import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:category" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App 