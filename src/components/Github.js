import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import {primary} from '../styles/pallete'
import Box from './Box'

const Wrapper = styled.div`
  border-top: solid 1px ${primary};
  padding-top: 50px;
  width: 500px;
`

function Github() {
  const [boxes, setBox] = useState([])

  axios.get('https://api.github.com/users/geraldofada/repos')
    .then((res) => {
      const boxes = res.data.map((item) => {
        return <Box title={item.name}
                    desc={item.description}
                    key={item.name} />
      })

      setBox(boxes)
    })

  return (
    <Wrapper>
      {boxes}
    </Wrapper>
  )
}

export default Github