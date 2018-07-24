import React from 'react';
import FbFavi from '../../img/facebook-icon.png';
import InstaFavi from '../../img/Instagram-icon.png';

const footer = () => {
  return (
    <div className="FooterContainer">
      <a href="http://facebook.com" target="_blank"><img src={FbFavi} /></a>
      <a href="http://instagram.com" target="_blank"><img src={InstaFavi} /></a>
    </div>
  )
}

export default footer;