import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Link, useNavigate } from 'react-router-dom'
import { RiDeleteBinFill, RiEditBoxFill } from 'react-icons/ri'

import { typography } from '../styles'
import Delete from './Delete'


const FoodCardWrapper = styled.div`
  width: 156px;
  height: 250px;
  position: relative;
`

const FoodImg = styled.img`
  top: 0;
  left: 13px;
  z-index: 10;
  width: 130px;
  height: 130px;
  overflow: hidden;
  object-fit: fill;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0px 25px 20px rgba(0, 0, 0, 0.15);
`
const FoodCardContent = styled.div`
  top: 38px;
  width: 156px;
  height: 212px;
  display: flex;
  position: absolute;
  border-radius: 30px;
  justify-content: center;
  background-color: white;
  backdrop-filter: blur(50px);
`
const FoodCardData = styled.div`
  gap: 8px;
  bottom: 18px;
  display: flex;
  padding: 0 8px;
  font-weight: 600;
  position: absolute;
  align-items:center;
  flex-direction: column;
  justify-content: center;
  ${typography.text.lg}
  :first-child{
    text-align: center;
    line-height: 1.5rem;
  }
`
const FoodCardOptions = styled.div`
  width: 130px;
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
`

const FoodCard = ( props ) => {
  const [remove, setRemove] = useState(false);
  const navigate = useNavigate()
  const handleEdit = () => {
    localStorage.setItem("product", JSON.stringify(props.food))
    navigate(`/edit/${props.food.id}`)
  }
  const handleDelete = () => {
    setRemove(!remove);
    localStorage.setItem("id",String(props.food.id))
  }
    return (
      <FoodCardWrapper>
        {remove && <Delete setRemove={setRemove}></Delete>}
        <Link to={`/show/${String(props.food.id)}`}>
          <FoodImg src={ props.food.picture_url }/>
        </Link>
        <FoodCardContent>
          <FoodCardData>
            <div style={{"display":"flex", "height":"30px","alignItems":"center"}}>
              <p>{ props.food.name }</p> 
            </div>
            <p style={{"color":"#FA4A0C"}}>$ {props.food.price}</p>
            <FoodCardOptions> 
            <RiEditBoxFill size={16} style={{color:"#FA4A0C", cursor:"pointer"}} onClick={handleEdit}/>
            <RiDeleteBinFill  size={16} style={{color:"#FA4A0C", cursor:"pointer"}} onClick={handleDelete}/>
          </FoodCardOptions>
          </FoodCardData>          
        </FoodCardContent>
      </FoodCardWrapper>
  )
}

export default FoodCard
