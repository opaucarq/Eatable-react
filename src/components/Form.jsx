import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

import Input from './Input'; // Ajusta la ruta según sea necesario.

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const FormContainer = styled.form`
  width: 500px;
  button {
    width: 310px;
    height: 70px;
    border: none;
    color: white;
    border-radius: 30px;
    background: #FA4A0C;
  }
  @media screen and (max-width: 600px){
    width: 80%;
  }
`

const Form = ({onSubmit, data}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  
  const [formData, setFormData] = useState(
    {
      name: '',
      price: '',
      description: '',
      category: '',
      picture_url: '',
      ...data
    }
  );
    
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    //validar los datos antes de enviarlos a 
    if (location.pathname === "/create"){
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `${JSON.stringify({...formData, price: formData.price*100})}`
      };
      console.log(options)
      fetch('https://react-eatable-api.herokuapp.com/products', options)
    } else {
      const options = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: `${JSON.stringify({...formData, price: formData.price*100})}`
      };
      fetch(`https://react-eatable-api.herokuapp.com/products/${id}`, options)
    }
    navigate("/");
  };

  return (
    <FormWrapper>
      <FormContainer id="CreateForm" onSubmit={handleFormSubmit}>
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <Input
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <Input
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />
        <Input
          label="Picture URL"
          name="picture_url"
          value={formData.picture_url}
          onChange={handleInputChange}
        />
      </FormContainer>
    </FormWrapper>
  );
};

export default Form;
