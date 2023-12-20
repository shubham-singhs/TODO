import React from 'react'
import styled from 'styled-components'

import Header from '../Header/Header'
import Add from '../Add/Add'

const WrapperDiv = styled.div`
background-color: #422D4A;
width: 70%;
margin: 40px auto 0 auto;
box-shadow: 2px 2px 5px 5px #5C5173;
color: #C1A7C5;
`
const TodoWrapper = () => {
  return (
    <WrapperDiv>
        <Header />
        <Add />
    </WrapperDiv>
  )
}
export default TodoWrapper;
