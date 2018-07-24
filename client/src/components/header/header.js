import React from 'react';
import FbLogo from '../../img/facebook-1.svg';
import '../../App.css';

const header = () => {
  return (
    <div className="HeaderContainer">
      <div>
        <p>Menu</p>
      </div>
      <div className="LogoContainer">
        <img className="Logo" src={FbLogo} />
      </div>
    </div>
  )
}

export default header;