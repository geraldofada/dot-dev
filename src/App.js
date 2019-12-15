import React from 'react'
import styled from 'styled-components'

import Nav from './components/Nav'
import Github from './components/Github'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Wrapper>
      <Nav>geraldofada.dev</Nav>
      <Github></Github>
    </Wrapper>
  )
}

export default App
