import React from 'react';
import BackgroundImage from '../../img/cool-backgrounds-8.jpg';

const body = () => {
  return (
    <div className="BodyContainer">
      <img className="BackgroundImg" src={BackgroundImage} />
      <button className="btn-1">Button 1</button>
      <button className="btn-2">Button 2</button>
    </div>
  )
}

export default body;