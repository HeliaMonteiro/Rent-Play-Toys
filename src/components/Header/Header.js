import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
  return (
    <div className='header-container'>
      <Link to="/">
      <p className='header-logo'>Logo</p>
      </Link>
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

        <Link to="/signUp"><button>Sign up</button>
        </Link>
        <Link to="/login"><button>Log in</button>
        </Link>
      </div>

    </div>
  );
  
}

export default Header;