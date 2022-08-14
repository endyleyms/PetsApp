import React, {useState, useEffect} from "react";
import { CardPet } from '../Components/CardPet'
import { listAllPets } from '../Services/pets'

export const Home = () => {
    const [pets, setPets]= useState ([]);
    const fetchProducts = async (query = {})=>{
        const data= await listAllPets (query);
        setPets(data);
    }
    useEffect(()=>{
        fetchProducts();
    }, []);
  return (
    <div>WELCOME TO PETSAPP
        {pets.map((pet)=> <CardPet key={pet.id} name={pet.name} age={pet.age} specie={pet.specie} id={pet.id}  />)}
    </div>
  )
}
