import React, {useState, useEffect} from "react";
import { CardPet } from '../Components/CardPet'
import { listAllPets } from '../Services/pets'
import './Home.css';

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
    <div>
        <h1 className="title">Welcome to PETSAPP</h1>
        <div className="cards">
         {pets.map((pet)=> <CardPet key={pet._id} name={pet.name} age={pet.age} specie={pet.specie} id={pet._id}  />)}   
        </div>
        
    </div>
  )
}
