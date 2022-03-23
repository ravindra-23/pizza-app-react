import React from 'react'
import Home from './Pages/Home'
import './global-styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductsPage from './Pages/ProductsPage'
import CartPage from './Pages/CartPage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:param' element={<ProductsPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App