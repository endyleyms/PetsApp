import React, {useEffect, useState} from "react";
import { getPet, deletePet, updatePet } from "../Services/pets";
import { useParams } from 'react-router-dom';
import sweetalert from 'sweetalert';

export const PetDetail = () => {
    const [pet, setPet]= useState ([]);
    const params = useParams();
    const deleteOnePet =()=>{
        sweetalert({
            title: 'Confirmation',
            text: `Do you shure delete to  ${pet.name}? with id ${pet._id}`,
            icon: 'info',
            buttons: ['Cancelar', 'Continuar'],
        }).then ((res)=>{
            if(res){
             deletePet(pet._id);   
            }
        });
    }

    const [form, setForm]= useState({
        name: '',
        age:'',
        specie: ''
      })
      const handleInputChange = (event) => {
        setForm((previousForm) => {return {
            ...previousForm,
            [event.target.name] : event.target.value
        }})
      }

    const UpadatePet =(event, _id)=>{
        event.preventDefault()
        console.log('enviando datos...' + form.name + ' ' + form.age + ' ' + form.specie)
        updatePet(_id, form)

    }

    const fetchPet = async () => {
        const data= await getPet (params.id);
        console.log(params.id)
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
        <button onClick={deleteOnePet}>Delete</button>
        <form onSubmit={UpadatePet}>
            <label for="name">Name:</label>
            <input type="text"  name="name" placeholder='Name' onChange={handleInputChange}/>
            <label for="age">Age:</label>
            <input type="text"  name="age" placeholder='Age' onChange={handleInputChange}/>
            <label for="age">Specie:</label>
            <input type="text"  name="specie" placeholder='Specie' onChange={handleInputChange}/>
            <button type="submit">Submit</button>
        </form>
    </div>
)
}
