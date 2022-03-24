import React from 'react'
import Home from './Pages/Home'
import './global-styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductsPage from './Pages/ProductsPage'
import CartPage from './Pages/CartPage'
import CheckoutPage from './Pages/CheckoutPage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:param' element={<ProductsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout/:param' element={<CheckoutPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App