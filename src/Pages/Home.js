import React from 'react'
import { Navbar, Banner, Pizzas, Desserts, Sides } from '../components'

const Home = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Pizzas simplified />
        <Desserts simplified />
        <Sides simplified />
    </>
  )
}

export default Home