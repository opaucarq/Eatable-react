import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Form from '../components/Form'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Edit = () => {
  const { id } = useParams();
  const dataProduct = JSON.parse(localStorage.getItem("product"));
  const [data, setData] = useState({dataProduct});
  // console.log(data.dataProduct)
  const [formValues, setFormValues] = useState({});

  const handleFormSubmit = (formData) => {
    // console.log(formData);
    setFormValues(formData);
  };

  return (
    <>
      <Header>Edit Product</Header>
      <Form data = {data.dataProduct} onSubmit={handleFormSubmit}></Form>
      <Footer formValues={formValues}>edit</Footer>
    </>
  )
}

export default Edit