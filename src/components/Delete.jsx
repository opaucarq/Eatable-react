import React from 'react'
import styled from "@emotion/styled"
import { typography } from '../styles'

const DeleteWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  background-color: rgba(0,0,0,0.86);
  /* mix-blend-mode: difference; */
`

const DeleteContainer = styled.div`
  top: 50%;
  gap: 16px;
  left: 50%;
  width: 301px;
  height: 218px;
  z-index: 2000;
  display: flex;
  position: absolute;
  border-radius: 20px;
  padding: 32px 19.5px;
  flex-direction: column;
  background-color: white;
  transform: translate(-50%, -50%);
  
`

const Text = styled.p`
  font-weight: 600;
  text-align: center;
  ${typography.text.lg}
`

const Button = styled.div`
  color: white;
  cursor: pointer;
  padding: 12px 0%;
  text-align: center;
  border-radius: 30px;
  ${typography.text.md}
`

const Delete = ({setRemove}) => {
  
  const handleClick = () => {
    setRemove(false)
  }
  const handleWrapperClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClick();
    }
  };
  const handleClickDelete = (event) => {
    const options = {method: 'DELETE', headers: {Authorization: 'Bearer '}};
    const id = localStorage.getItem("id");
    fetch(`https://react-eatable-api.herokuapp.com/products/${id}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    localStorage.removeItem("id")
    setRemove(false)
  }

  return (
    <DeleteWrapper onClick={handleWrapperClick}>
      <DeleteContainer>
        <Text>Are you sure?</Text>
        <Button style={{"backgroundColor": "#FA4A0C"}} onClick={handleClickDelete}>Yes, delete it!</Button>
        <Button style={{"backgroundColor": "#EFB60E"}} onClick={handleClick}>No, cancel</Button>
      </DeleteContainer>
    </DeleteWrapper>
  )
}

export default Delete