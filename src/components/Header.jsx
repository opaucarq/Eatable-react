import React from 'react'
import styled from '@emotion/styled'

import { typography } from '../styles'

const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
`
const HeaderWrapper = styled.div`
  padding: 48px 0;
  ${typography.text.lg}
`

const Header = (props) => {

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <h1>{props.children}</h1>
      </HeaderWrapper>
    </HeaderContainer>    
  )
}

export default Header
