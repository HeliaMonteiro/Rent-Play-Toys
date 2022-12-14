import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'

const Header = ({token = undefined}) => {
  let headerToken = token ? token : localStorage.getItem('bearer')
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('bearer')
    headerToken = ''
    navigate('/')
  }

  const navigateToRentPage = () => {
    navigate('/rent')
  }

  return (
    <div className='header-container'>
      <Link to="/">
     <img src="https://i.postimg.cc/T1yDzGXS/20221026-204424-0000.png" alt="" />
      </Link>
     
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

        { headerToken ? (
          <div className='header-buttons'>
            <button onClick={navigateToRentPage}>Rent History</button>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className='header-buttons'>
          <Link to="/signUp"><button className='button-51'>Sign up</button>
          </Link>
          <Link to="/login"><button>Log in</button>
          </Link>
          </div>
        )}

    </div>
  );
  
}

export default Header;