import React, {useEffect, useState} from "react";
import { getPet } from "../Services/pets";
import { useParams } from 'react-router-dom';

export const PetDetail = () => {
    const [pet, setPet]= useState ([]);
    const params = useParams();
    const fetchPet = async () => {
        const data= await getPet (params.id);
        setPet(data);
    }
    useEffect(()=>{
        fetchPet();
    }, []);

  return (
    <div>
        <h1>{pet.name}</h1>
        <p>{pet.age} </p>
        <p>{pet.specie} </p>
    </div>
  )
}
