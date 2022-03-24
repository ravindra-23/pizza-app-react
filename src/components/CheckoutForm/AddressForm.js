import React, { useContext } from 'react'
import { Typography, Grid, TextField, Container, Paper, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/useCartContext'

const AddressForm = () => {
    const { setAddress, isAddressInvalid } = useContext(CartContext)
  return (
    <>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography variant='h5' gutterBottom>Delivery Address</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={e => setAddress(prevInput => ({...prevInput, firstName: e.target.value}))}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={e => setAddress(prevInput => ({...prevInput, lastName: e.target.value}))}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={e => setAddress(prevInput => ({...prevInput, address1: e.target.value}))}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                        onChange={e => setAddress(prevInput => ({...prevInput, address2: e.target.value}))}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        onChange={e => setAddress(prevInput => ({...prevInput, city: e.target.value}))}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        variant="standard"
                        onChange={e => setAddress(prevInput => ({...prevInput, state: e.target.value}))}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                        onChange={e => setAddress(prevInput => ({...prevInput, zip: e.target.value}))}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        onChange={e => setAddress(prevInput => ({...prevInput, country: e.target.value}))}
                    />
                    </Grid>
                </Grid>
            </Paper>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
                <Button disabled={isAddressInvalid} type="submit" variant="contained" color="primary" component={Link} to='/checkout/payment'>Payment</Button>
            </div>
        </Container>
    </>
  )
}

export default AddressForm