import React from 'react'

import './style.css'

const ToyItem = ({props}) => {

  const {age, brand, category, description, name, price, status} = props.attributes

  const image = props.attributes.image.data[0].attributes

  return (
    <div className='toy-item' key={props.id}>
      <img src={process.env.REACT_APP_API_HOST + image.url} alt="" />
      <div className='text-container'>
        <p>{brand}</p>
        <p>{name}</p>
      </div>
      <div className='text-container'>
        <p>${price}</p>
        <p> (7 days)</p>
      </div>
    </div>
  );
}

export default ToyItem;