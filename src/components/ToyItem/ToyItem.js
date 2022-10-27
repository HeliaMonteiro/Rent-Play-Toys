import React from 'react'
import { useNavigate } from 'react-router-dom'

import './style.css'

const ToyItem = ({props}) => {
  const navigate = useNavigate()
  const {age, brand, category, description, name, price, status, image} = props.attributes


  const goToToyDetails = (id) => {
    navigate(`/toy/${id}`, {
      state: {
        age, brand, category, description, name, price, status, image, id: props.id
      }
    })
  }

  return (
    <div className='toy-item' key={props.id} onClick={() => goToToyDetails(props.id)}>
      <img src={image} alt="" />
      <div className='text-container'>
        <p>{brand}</p>
        <p>{name}</p>
      </div>
      <div className='text-container'>
        {status ? (
          <p className='price'>From ${price} per week</p>
        ): (
          <p className='unavailable'>Product unavailable</p>
        )}
      </div>
    </div>
  );
}

export default ToyItem;