import React, { useContext } from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import './styles.css'
import { CartContext } from '../../../Context/useCartContext'

const CartItem = ({ item, index }) => {
    const { removeFromCart, decreaseQuantity, increaseQuantity } = useContext(CartContext)
  return (
    <div className='item-card'>
        <Card className="cart-item" sx={{ maxWidth: 300 }}>
            <CardMedia 
                image={item.image} 
                alt={item.alt} 
                style={{height: 0, paddingTop: '56.25%', marginTop:'30'}} 
            />
            <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h5">₹{item.price}</Typography>
            </CardContent>
            <CardActions className='actions' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='buttons' style={{ display: 'flex', alignItems: 'center' }}>
                    <Button 
                        type="button" 
                        size="small" 
                        onClick={() => item.quantity > 1 ? decreaseQuantity(item.id) : removeFromCart(item.id)}
                    >
                        -
                    </Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button 
                        type="button" 
                        size="small" 
                        onClick={() => increaseQuantity(item.id)}
                    >
                        +
                    </Button>
                </div>
                <Button 
                    variant="contained" 
                    type="button" 
                    color="success" 
                    onClick={() => removeFromCart(item.id)}
                >
                    Remove
                </Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default CartItem