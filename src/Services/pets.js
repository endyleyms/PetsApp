const API_URL = 'https://crudcrud.com/api/86c3bcfc80b54c96a5774020db64aebe/pets';

export const newPet = async (newRegister) => {
    try {
      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRegister),
      };
      const response = await fetch(`${API_URL}`, payload);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const listAllPets = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        const pets = await response.json();
        return pets;
      } catch {
        throw new Error('Error in fetch products');
      }
  };

  export const getPet = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const pet = await response.json();
      return pet;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const updatePet = async (id, body) => {
    const payload = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(`${API_URL}/${id}`, payload);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const deletePet = async (id) => {
    const payload = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    };
    try {
      const response = await fetch(`${API_URL}/${id}`, payload);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };