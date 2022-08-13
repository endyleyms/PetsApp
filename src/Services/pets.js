const API_URL = process.env.REACT_APP_API_URL;

export const newPet = async (newRegister) => {
    try {
      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRegister),
      };
      const response = await fetch(`${API_URL}/pets`, payload);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const listAllPets = async () => {
    try {
      const response = await fetch(`${API_URL}/pets`);
      const persons = await response.json();
      return persons;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const getPet = async (id) => {
    try {
      const response = await fetch(`${API_URL}/pets/${id}`);
      const people = await response.json();
      return people;
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
      const response = await fetch(`${API_URL}/pets/${id}`, payload);
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
      const response = await fetch(`${API_URL}/pets/${id}`, payload);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };