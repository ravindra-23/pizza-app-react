import React, { useContext } from 'react'
import { Grid, TextField, Typography, Container, Paper, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/useCartContext'

const PaymentForm = () => {
  const { setPayment, isPaymentInvalid } = useContext(CartContext)
  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="cardName"
                    label="Name on card"
                    fullWidth
                    autoComplete="cc-name"
                    variant="standard"
                    onChange={e => setPayment(prevInput => ({...prevInput, name: e.target.value}))}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="cardNumber"
                    label="Card number"
                    fullWidth
                    autoComplete="cc-number"
                    variant="standard"
                    onChange={e => setPayment(prevInput => ({...prevInput, cardNumber: e.target.value}))}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="expDate"
                    label="Expiry date"
                    fullWidth
                    autoComplete="cc-exp"
                    variant="standard"
                    onChange={e => setPayment(prevInput => ({...prevInput, expiry: e.target.value}))}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="cvv"
                    label="CVV"
                    helperText="Last three digits on signature strip"
                    fullWidth
                    autoComplete="cc-csc"
                    variant="standard"
                    onChange={e => setPayment(prevInput => ({...prevInput, cvv: e.target.value}))}
                />
                </Grid>
            </Grid>
          </Paper>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button component={Link} variant="outlined" to="/checkout/address">Back</Button>
                <Button disabled={isPaymentInvalid} type="submit" variant="contained" color="primary" component={Link} to='/checkout/review'>Review</Button>
          </div>
      </Container>
    </>
  )
}

export default PaymentForm