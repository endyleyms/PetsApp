import React, {useState, useEffect} from "react";
import Modal from 'react-modal';
import { CardPet } from '../Components/CardPet'
import { listAllPets, newPet } from '../Services/pets'
import './Home.css';

export const Home = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
  const submit = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + form.name + ' ' + form.age + ' ' + form.specie)
    newPet(form);
    
}


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
        <div>
         <button className="buttonfix" onClick={openModal}>+</button>  
         <Modal
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         >
            <h2>Hello</h2>
            
            <form onSubmit={submit}>
                <label for="name">Name:</label>
                <input type="text"  name="name" placeholder='Name' onChange={handleInputChange}/>
                <label for="age">Age:</label>
                <input type="text"  name="age" placeholder='Age' onChange={handleInputChange}/>
                <label for="age">Specie:</label>
                <input type="text"  name="specie" placeholder='Specie' onChange={handleInputChange}/>
                <button type="submit">Submit</button>
            </form>
            <button onClick={closeModal}>close</button>
            </Modal> 
        </div>
        <div className="cards">
         {pets.map((pet)=> <CardPet key={pet._id} name={pet.name} age={pet.age} specie={pet.specie} id={pet._id}  />)}   
        </div>
        
    </div>
  )
}
