import React from 'react'
import { Container } from 'reactstrap'

const Loading = (show) => {
  return show && (
    <Container className='text-center p-4'>
        <h2>Loading ...</h2>
    </Container>
  )
}

export default Loading