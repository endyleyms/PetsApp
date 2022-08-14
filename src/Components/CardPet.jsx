import React from 'react'
import { Link } from 'react-router-dom';
import './CardPet.css';

export const CardPet = ({name, age, specie, id}) => {
  return (
    <div className='cardPet'>
        <h1>{name}</h1>
        <p>Age: {age} </p>
        <p>Specie: {specie} </p>
        <Link to={`/petdetail/${id}`}>Detail pet</Link>
    </div>
  )
}
