import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'

const Main = () => {
  return (
    <>
      <Header>Products Dashboard</Header>
      <Dashboard></Dashboard>
      <Footer>createProduct</Footer>
    </>
  )
}

export default Main