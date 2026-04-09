import React from 'react'
import './Hero.css'
import hero_image from '../Assets/banner4.png.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={hero_image} alt="Hero Image" className="hero-image" />
    </div>
  )
}

export default Hero