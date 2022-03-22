import React from 'react'
import Home from './Pages/Home'
import './global-styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductsPage from './Pages/ProductsPage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:param' element={<ProductsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App