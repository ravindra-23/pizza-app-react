import React, { createContext, useState } from 'react'

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart)
    const totalItems = cart.map(item => item.price * item.quantity)
    const totalPrice = totalItems.reduce((total, item) => total + item, 0).toLocaleString() 

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id)
        if(existingItem) {
            existingItem.quantity++;
        } else {
            setCart([...cart, item])
        }
    }

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    const emptyCart = () => setCart([])

    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item => item.id === id ? (
            {...item, quantity: item.quantity + 1}
        ) : item)
        setCart(updatedCart);
    }

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item => item.id === id ? (
            {...item, quantity: item.quantity - 1}
        ) : item)
        setCart(updatedCart);
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, emptyCart, increaseQuantity, decreaseQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider }