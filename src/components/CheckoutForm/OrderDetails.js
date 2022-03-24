import { Button, Container, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/useCartContext'

const OrderDetails = () => {
  const { address } = useContext(CartContext);
  return (
      <Container maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <div>
                <Typography variant="h5" gutterBottom>
                    Thank you for your order {address.firstName} {address.lastName}.
                </Typography>
                <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order will be out for delivery
                </Typography>
            </div>
          </Paper>
        <div>
            <Button variant='contained' component={Link} to='/'>Home</Button>
        </div>
      </Container>
  )
}

export default OrderDetails