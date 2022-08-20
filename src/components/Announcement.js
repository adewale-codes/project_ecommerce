import React from 'react'
import styled from 'styled-components'

const Announcement = () => {

    const Container = styled.div`
        height: 30px;
        background-color: teal;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14;
        font-weight: 500;
    `;

  return (
    <Container>
      Super Deal! Free shipping on orders above #10,000
    </Container>
  )
}

export default Announcement
