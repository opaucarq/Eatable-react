import React from 'react';
import styled from '@emotion/styled';

import { typography } from '../styles'

const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: transparent;
  label {
    color: #B8B8BB;
    margin: 16px 0 8px;
    ${typography.text.xs}
  }

  input {
    border: none;
    outline: none;  
    background: transparent; 
    border-bottom: 1px solid black;
  }
`;

const Input = ({ label, name, value, onChange }) => {
  return (
    <Field>
      <label htmlFor={name}>{label}</label>
      <input style={{"background":"transparent"}}
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Field>
  );
};

export default Input;
