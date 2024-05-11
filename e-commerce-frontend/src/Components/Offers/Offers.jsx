import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/banner6.png.jpg';

const Offers = () => {
  return (
    <div className='offers'>
      <img src={exclusive_image} alt="Exclusive Offers" className="offers-image" />
    </div>
  );
};

export default Offers;