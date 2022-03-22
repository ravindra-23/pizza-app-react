import React from 'react'
import { Pizzas, Desserts, Sides } from '../index'
import { useParams } from 'react-router-dom';

const Products = () => {
    const { param } = useParams();
  return (
    <>
        {param === "pizzas" && <Pizzas />}
        {param === "desserts" && <Desserts />}
        {param === "sides" && <Sides />}
    </>
  )
}

export default Products