import { Grid } from '@mui/material'
import React from 'react'
import sidesData from '../../../data/sidesData.json'
import ItemCard from '../../ItemCard/ItemCard'
import { Link } from 'react-router-dom'

const Sides = ({ simplified }) => {
    const data = simplified ? sidesData.slice(0,3) : sidesData

  return (
    <div className='list-container' style={{ width: '90%', margin: '0 auto' }}>
        <div className='header'>
            <h2 className='title'>Sides</h2>
            {simplified && <Link to='/sides'><h2 className='explore'>Explore</h2></Link>}
        </div>
        <Grid container spacing={4} justifyContent='center'>
            {data.map(side => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={side.id}>
                    <ItemCard
                        item={side}
                        title={side.title}
                        description={side.description}
                        alt={side.alt}
                        price={side.price}
                        image={side.image}
                    />
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default Sides