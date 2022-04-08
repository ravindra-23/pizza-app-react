import React, { useContext } from 'react'
import { CartContext } from '../../Context/useCartContext'
import { Typography, List, ListItem, ListItemText, Container, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Review = () => {
    const { cart, totalPrice, payment, emptyCart } = useContext(CartContext);
  return (
    <>
      <Container maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography variant="h6" gutterBottom>Order summary</Typography>
            <List disablePadding>
              {cart.map((item) => (
                  <ListItem style={{ padding: '10px 0' }} key={item.id}>
                  <ListItemText primary={item.title} secondary={`Quantity: ${item.quantity}`} />
                  <Typography variant="body2">₹{item.price}</Typography>
                  </ListItem>
              ))}
              <ListItem style={{ padding: '10px 0' }}>
                  <ListItemText primary="Total" />
                  <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                      ₹{totalPrice}
                  </Typography>
              </ListItem>
            </List>
            <div>
              <Typography variant='h6'>Card Info</Typography>
              <Typography variant='body1'>Name: {payment.name}</Typography>
              <Typography variant='body1'>Card No: {payment.cardNumber}</Typography>
            </div>
        </Paper>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/checkout/payment">Back</Button>
            <Button type="submit" variant="contained" color="primary" component={Link} to='/checkout/orders' onClick={() => emptyCart()}>Place Order</Button>
        </div>
    </Container>
    </>
  )
}

export default Review