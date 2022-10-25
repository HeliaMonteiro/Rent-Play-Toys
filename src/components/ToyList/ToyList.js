import React, { useEffect, useState } from 'react'
import ToyItem from '../ToyItem/ToyItem'
import './style.css'

const ToyList = () => {

  const [toyList, setToyList] = useState([])

  const loadToys = async () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_BEARER}`);
    
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_HOST}/api/toys?populate=%2A`, requestOptions)
    .then(response => response.json())
    .then(result =>  {
      setToyList(result.data)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
    loadToys()
  }, []);

  return (
    <div className="toy-container">
      {toyList && toyList.map((toy) => <ToyItem props={toy}/>)}
    </div>
  );
}

export default ToyList;