import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const FooterWrapper = styled.div`
  bottom: 0;
  width: 100%;
  z-index: 100;
  height: 100px;
  padding: 15px;
  position: fixed;
  text-align: center;
  background-color: #F6F6F9;
  div{
    display: flex;
    justify-content: center;
  }
  button {
    width: 310px;
    border: none;
    height: 70px;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    background: #FA4A0C;
  }
`

const Footer = (props) => {
  const handleClick = () => {
  }
  
  return (
    <FooterWrapper>
      <div>
        {props.children === 'back' && (
          <Link to="/">
            <button>Go Back</button>
          </Link>
        )}
        {props.children === 'createProduct' && (
          <Link to="/create">
            <button>Create Product</button>
          </Link>
        )}
        {props.children === 'create' && (
          <button type='submit' form='CreateForm' onClick={handleClick}>
              Create
          </button>
        )}
        {props.children === 'edit' && (
          <button type='submit' form='CreateForm' onClick={handleClick}>
            Save
          </button>
        )}
      </div>
    </FooterWrapper>
  );
} 
export default Footer;
