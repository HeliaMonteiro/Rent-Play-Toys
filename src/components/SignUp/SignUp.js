import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './style.css'


 
 export default function SignUp() {
    const [username, setUsername] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [result, setResult] = useState()

    const navigate = useNavigate()
 
  const handleSubmit = async (e) => {
    e.preventDefault()

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_BEARER}`);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      email,
      username,
      first_name,
      last_name,
      address,
      phone,
      password,
      confirmed: true
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch(`${process.env.REACT_APP_API_HOST}/api/users`, requestOptions)
    .then(response => response.json())
    .then(result => setResult(result))
    .catch(error => console.log('error', error));

     if (result) {
        myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_BEARER}`);
        myHeaders.append("Content-Type", "application/json");
        
        raw = JSON.stringify({
          identifier: email,
          password
        });
        
        requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        await fetch(`${process.env.REACT_APP_API_HOST}/api/auth/local`, requestOptions)
          .then(response => response.json())
          .then(result => {
            localStorage.setItem('bearer', result.jwt)
            navigate('/')
          })
          .catch(error => console.log('error', error));
     }
   }

 
   return(
     <div>
       <Header />
       <div className="signUp-wrapper">
         <h1>Sign Up</h1>
         <form onSubmit={handleSubmit}>
           <label>
             <p>Username:</p>
             <input type="username" onChange={e => setUsername(e.target.value)} />
           </label>
           <label>
             <p>First Name:</p>
             <input type="first-name" onChange={e => setFirstName(e.target.value)} />
           </label>
           <label>
             <p>Last Name:</p>
             <input type="last-name" onChange={e => setLastName(e.target.value)} />
           </label>
           <label>
             <p>Email</p>
             <input type="email" onChange={e => setEmail(e.target.value)} />
           </label>
           <label>
             <p>Address</p>
             <input type="address" onChange={e => setAddress(e.target.value)} />
           </label>
           <label>
             <p>Phone Number</p>
             <input type="phone" onChange={e => setPhone(e.target.value)} />
           </label>
           <label>
             <p>Password</p>
             <input type="password" onChange={e => setPassword(e.target.value)} />
           </label>
           <div>
             <button type='submit'>Submit</button>
           </div>
         </form>
       </div>
       <Footer />
     </div>
   )
 }
