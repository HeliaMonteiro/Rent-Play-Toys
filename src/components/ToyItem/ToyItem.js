import React from 'react'
import { useNavigate } from 'react-router-dom'

import './style.css'

const ToyItem = ({props}) => {
  const navigate = useNavigate()
  const {age, brand, category, description, name, price, status} = props.attributes

  const image = props.attributes.image.data[0].attributes

  const goToToyDetails = (id) => {
    navigate(`/toy/${id}`, {
      state: {
        age, brand, category, description, name, price, status, image, id: props.id
      }
    })
  }

  return (
    <div className='toy-item' key={props.id} onClick={() => goToToyDetails(props.id)}>
      <img src={process.env.REACT_APP_API_HOST + image.url} alt="" />
      <div className='text-container'>
        <p>{brand}</p>
        <p>{name}</p>
      </div>
      <div className='text-container'>
        <p>From ${price} per week</p>
      </div>
    </div>
  );
}

export default ToyItem;