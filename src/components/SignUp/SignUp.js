import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 
 export default function SignUp({ setToken }) {
   const [first_name, setFirstName] = useState();
   const [last_name, setLastName] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [address, setAddress] = useState();
   const [phone, setPhone] = useState();
 
   const handleSubmit = async e => {
     e.preventDefault();
     const token = await loginUser({
       first_name,
       last_name,
       email,
       password,
       address,
       phone
     });
     setToken(token);
   }
 
   return(
     <div>
       <Header />
       <div className="login-wrapper">
         <h1>Sign Up</h1>
         <form onSubmit={handleSubmit}>
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
             <p>Password</p>
             <input type="password" onChange={e => setPassword(e.target.value)} />
           </label>
           <label>
             <p>Address</p>
             <input type="address" onChange={e => setAddress(e.target.value)} />
           </label>
           <label>
             <p>Phone Number</p>
             <input type="phone" onChange={e => setPhone(e.target.value)} />
           </label>
           <div>
             <button type="submit">Submit</button>
           </div>
         </form>
       </div>
       <Footer />
     </div>
   )
 }
