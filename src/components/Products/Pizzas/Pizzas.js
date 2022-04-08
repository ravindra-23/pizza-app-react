import React from 'react'
import { Grid } from '@mui/material'
import vegData from '../../../data/vegData.json'
import nonvegData from '../../../data/nonvegData.json'
import ItemCard from '../../ItemCard/ItemCard'
import './styles.css'
import { Link } from 'react-router-dom'

const Pizzas = ( { simplified }) => {
    const data = simplified ? vegData.slice(0,3) : vegData
    const nonvegdata = simplified ? nonvegData.slice(0,3) : nonvegData
  return (
    <div className='list-container'>
        <div className='veg-pizzas'>
            <div className='header'>
                <h2 className='title'>Veg Signature Pizzas</h2>
                {simplified && <Link to='/pizzas'><h2 className='explore'>Explore</h2></Link>}
            </div>
            <Grid container spacing={4} justifyContent='center'>
                {data.map(pizza => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={pizza.id}>
                        <ItemCard
                            item={pizza}
                            title={pizza.title}
                            description={pizza.description}
                            alt={pizza.alt}
                            price={pizza.price}
                            image={pizza.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
        <div className='non-veg-pizzas'>
            <div className='header'>
                <h2 className='title'>Non-Veg Signature Pizzas</h2>
            </div>
            <Grid container spacing={4} justifyContent='center'>
                {nonvegdata.map(pizza => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={pizza.id}>
                        <ItemCard 
                            item={pizza}
                            title={pizza.title}
                            description={pizza.description}
                            alt={pizza.alt}
                            price={pizza.price}
                            image={pizza.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    </div>
  )
}

export default Pizzas