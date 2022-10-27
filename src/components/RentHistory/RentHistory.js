import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './style.css'

const RentHistory = () => {
  const [rentHistory, setRentHistory] = useState()

  const headerToken = localStorage.getItem('bearer')

  const loadRentHistory = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${headerToken}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_HOST}/api/rents?populate=%2A`, requestOptions)
    .then(response => response.json())
    .then(result => {
      setRentHistory(result.data)
    })
    .catch(error => console.log('error', error));
  }

  const returnToy = async (toyId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${headerToken}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      data: {
        status: true
      }
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_HOST}/api/toys/${toyId}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    await loadRentHistory()
  }


  useEffect(() => {
    loadRentHistory()
  }, []);
  return (
    <div>
    <Header />
    <div className='rent-history-container'>
      
      {rentHistory?.length >= 1 && (
        <div className='table-container'>
          <table className='styled-table'>
          <thead>
          <tr>
            <td>id</td>
            <th>Toy name</th>
            <th>Rent date</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {rentHistory.map((rent) => (
            <tr>
              <td>{rent.attributes.toy.data.id}</td>
              <td>{rent.attributes.toy.data.attributes.name}</td>
              <td>{new Date(rent.attributes.createdAt).toUTCString()}</td>
              <td>{rent.attributes.toy.data.attributes.status ? (
                <span></span>
              ): (
                <button onClick={() => returnToy(rent.attributes.toy.data.id)}>return</button>
              )}</td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
      )}

    </div>
    <Footer />
    </div>
  );
}

export default RentHistory;