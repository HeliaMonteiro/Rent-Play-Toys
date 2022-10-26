import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './style.css'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState()

  const handleSubmit = async e => {
    e.preventDefault()
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_BEARER}`);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
    identifier: email,
    password
    });

    let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    await fetch(`${process.env.REACT_APP_API_HOST}/api/auth/local`, requestOptions)
    .then(response => response.json())
    .then(result => {
      localStorage.setItem('bearer', result.jwt)
      localStorage.setItem('userId', result.user.id)
      setToken(result.jwt)
      navigate('/')
    })
    .catch(error => console.log('error', error));
  }

  return(
    <div>
      <Header token={token}/>
      <div className="login-wrapper">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Email:</p>
            <input type="email" onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">LogIn</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}