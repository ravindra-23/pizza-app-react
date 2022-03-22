import React, { useState } from 'react'
import { Badge, IconButton, MenuItem, Menu } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'

const Navbar = () => {
  const navigate = useNavigate();
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
                <img src='images/logo.png' alt='phone' className='pizza' width="32" height="32" />
            </div>
            <div className='texts'>
                <h2 className='text'>Pizza's</h2>
            </div>
        </div>
        <div className='item nav-links'>
            <ul className='list'>
            <Link to='/' onClick={() => navigate('/')}>
              <li className='listItem'>Home</li>
            </Link>
            <Link to='/pizzas' onClick={() => navigate('/pizzas')}>
              <li className='listItem'>Pizza's</li>
            </Link>
            <Link to='/desserts' onClick={() => navigate('/desserts')}>
              <li className='listItem'>Desserts</li>
            </Link>
            <Link to='/sides' onClick={() => navigate('/sides')}>
              <li className='listItem'>Sides</li>
            </Link>
            </ul>
        </div>
        <div className='item cart-menu'>
          <div className='cart'>
            <IconButton color='primary' style={{ color: '#fff', marginRight: '20px' }}>
              <Badge badgeContent={4}>
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