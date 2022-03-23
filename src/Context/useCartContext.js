import React, { createContext, useState } from 'react'

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart)

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id)
        if(existingItem) {
            existingItem.quantity++;
        } else {
            setCart([...cart, item])
        }
    }
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider }