import React from 'react'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

const ItemCard = ({ title, description, image, price }) => {
  return (
    <Card>
        <CardMedia image={image} style={{height: 0, paddingTop: '56.25%', marginTop:'30'}}/>
        <CardContent>
            <Typography variant='h5' gutterBottom>{title}</Typography>
            <Typography variant='body2'>{description}</Typography>
        </CardContent>
        <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h6'>₹{price}</Typography>
            <Button size='small' variant='contained' color='error'>Add</Button>
        </CardContent>
    </Card>
  )
}

export default ItemCard