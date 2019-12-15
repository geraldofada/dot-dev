import React from 'react'
import styled from 'styled-components'

import {primary} from '../styles/pallete'

const Wrapper = styled.div`
  border: solid 1px ${primary};
  margin: 20px 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 15px;
  text-decoration: underline;
  font-weight: normal;
  color: ${primary};
`
const Desc = styled.p`
  font-size: 10px;
  color: ${primary};
`

function Box(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Desc>{props.desc}</Desc>
    </Wrapper>
  )
}

export default Box