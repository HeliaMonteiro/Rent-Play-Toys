import React from 'react'
import './style.css'

const Header = () => {
  return (
    <div className='header-container'>
      <p className='header-logo'>Logo</p>
      <p className='header-title'>Rent & Play Toys</p>

      <div className='nav-container'>
      <a href="categories">Categories</a>
      <a href="age">Age</a>
      <a href="brands">Brands</a>
      <a href="about-us">About Us</a>
      </div>
      
      <div className='search'>
      <input type="text" />
      <button>Search</button>
      </div>

      <div className='header-buttons'>
        <button>Sign Up</button>
        <button>Log in</button>
      </div>

    </div>
  );
  
}

export default Header;