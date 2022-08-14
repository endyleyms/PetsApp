import React from 'react'
import { Link } from 'react-router-dom';

export const CardPet = ({name, age, specie, id}) => {
  return (
    <div>
        <Link to={`/petdetail/${id}`}>
        <h1>Name: {name}</h1>
        <p>Age: {age} </p>
        <p>Specie: {specie} </p>
        </Link>
    </div>
  )
}
