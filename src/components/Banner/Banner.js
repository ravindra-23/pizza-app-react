import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css'

const Banner = () => {
    const items = [
        <img src='images/banner1.jpg' alt='spicy pizza' className='banner' />,
        <img src='images/banner2.jpg' alt='chicken pizza' className='banner' />,
        <img src='images/banner3.jpg' alt='veg pizza' className='banner' />
    ]

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };
  return (
    <div className='carousel-container'>
      <AliceCarousel 
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        items={items}
        responsive={responsive}
        autoPlay
      />
    </div>
  )
}

export default Banner