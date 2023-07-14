import React from 'react'
import { useState } from 'react'

import Form from '../components/Form'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Create = () => {
  const [formValues, setFormValues] = useState({});

  const handleFormSubmit = (formData) => {
    // console.log(formData);
    setFormValues(formData);
  };

  return (
    <>
      <Header>Create Product</Header>
      <Form onSubmit={handleFormSubmit}></Form>
      <Footer formValues={formValues}>create</Footer>
    </>
  )
}

export default Create