import React, { useContext, useState } from 'react'
import { Badge, IconButton, MenuItem, Menu } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import './styles.css'
import { CartContext } from '../../Context/useCartContext'

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    console.log(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <div className='nav-container'>
        <div className='item'>
            <div className='pizza-icon'>
                <img src='../images/logo.png' alt='phone' className='pizza' width="32" height="32" />
            </div>
            <div className='texts'>
                <h2 className='text'>Pizza's</h2>
            </div>
        </div>
        <div className='item nav-links'>
            <ul className='list'>
            <Link to='/'>
              <li className='listItem'>Home</li>
            </Link>
            <Link to='/pizzas'>
              <li className='listItem'>Pizza's</li>
            </Link>
            <Link to='/desserts'>
              <li className='listItem'>Desserts</li>
            </Link>
            <Link to='/sides'>
              <li className='listItem'>Sides</li>
            </Link>
            </ul>
        </div>
        <div className='item cart-menu'>
          <div className='cart'>
            <IconButton color='primary' style={{ color: '#fff', marginRight: '20px' }} component={Link} to='/cart'>
              <Badge badgeContent={cart.length}>
                  <ShoppingCartIcon fontSize='large' />
              </Badge>
            </IconButton>
          </div>
          <div className='mobileMenu'>
            <IconButton color='inherit' onClick={handleClick} style={{ color: '#fff' }}>
                <MenuIcon fontSize='large' />
            </IconButton>
              <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to='/'>Home</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/pizzas'>Pizzas</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/desserts'>Desserts</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/sides'>Sides</MenuItem>
              </Menu>
          </div>
        </div>
    </div>
  )
}

export default Navbar