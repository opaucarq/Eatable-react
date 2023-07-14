import React from 'react'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { typography } from '../styles'
import show from '../services/products/show'

const FoodImgContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  @media screen and (max-width: 500px){
    width: 80vw;
    display: flex;
    justify-content: center;
  }
`

const FoodImg = styled.img`
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 12px 4px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 500px){
    width: 80%;
    height: calc(100vw * 0.64);
  }
`
const FoodDetailsContainer = styled.div`
  width: 80%;
  margin: auto;
  position: relative;
  @media screen and (min-width: 900px){
    width: 800px;
  }
`
const FoodName = styled.h2`
  margin-top: 91px;
  text-align: center;
  ${typography.text.xl}
`
const FoodLabelDescription = styled.h3`
  margin-top: 27px;
  ${typography.text.md}
`
const FoodPrice = styled.p`
  color: #FA4A0C;
  margin-top: 10px;
  font-weight: 600;
  text-align: center;
  ${typography.text.xl}
`
const FoodDescription = styled.p`
  ${typography.text.sm}
`

const Details = () => {

  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let responseData = await show(id);
      setData(responseData);
    };
    
    getData();
  }, []);
  return (
    <>
      <FoodImgContainer>
        <FoodImg src={data.picture_url} alt="#" />
      </FoodImgContainer>
      <FoodDetailsContainer>
        <FoodName>{data.name} </FoodName>
        <FoodPrice>$ {data.price}</FoodPrice>
        <FoodLabelDescription>Description</FoodLabelDescription>
        <FoodDescription>{data.description}</FoodDescription>
      </FoodDetailsContainer>
    </>
  )
}

export default Details
