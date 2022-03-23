import React, { useContext } from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { CartContext } from '../../Context/useCartContext'
import { Link } from 'react-router-dom'
import './styles.css'
import CartItem from './CartItem/CartItem'

const Cart = () => {
    const { cart } = useContext(CartContext)

    const renderCart = () => (
        <div className='cart-info'>
            <Grid container spacing={4}>
                {cart?.map((cartItem, index) => (
                    <Grid item xs={12} sm={3}>
                        <CartItem item={cartItem} index={index} />
                    </Grid>
                ))}
            </Grid>
            <div className='details'>
                <Typography variant="h4">Subtotal: ₹</Typography>
                <div className='cta-btns'>
                    <Button size="large" type="button" variant="contained" color="success" style={{ marginRight: '20px' }}>Empty cart</Button>
                    <Button component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </div>
    )

    const renderEmptyCart = () => (
        <>
            <Typography variant='subtitle1' gutterBottom>You have no items in your shopping cart,</Typography>
            <Link to='/'>Start Adding Some.</Link>
        </>
    )
  return (
    <div className='cart-container'>
        <Typography variant='h3' gutterBottom style={{ marginBottom: '50px' }}>Your Food Bag</Typography>
        { cart.length > 0 ? renderCart() : renderEmptyCart() }
    </div>
  )
}

export default Cart