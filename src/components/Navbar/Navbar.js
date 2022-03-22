import React from 'react'
import { Badge, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './styles.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='item'>
            <div className='phone-icon'>
                <img src='images/telephone.png' alt='phone' className='phone' width="32" height="32" />
            </div>
            <div className='texts'>
                <h2 className='text'>ORDER NOW!</h2>
                <h2 className='text'>012 345 678</h2>
            </div>
        </div>
        <div className='item'>
            <ul className='list'>
            <li className='listItem'>Home</li>
            <li className='listItem'>Products</li>
            <li className='listItem'>Menu</li>
            <li className='listItem'>Contact</li>
            </ul>
        </div>
        <div className='item'>
        <div className='cart'>
        <IconButton color='primary' style={{ color: '#fff' }}>
          <Badge badgeContent={4}>
              <ShoppingCartIcon fontSize='large' />
          </Badge>
        </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar