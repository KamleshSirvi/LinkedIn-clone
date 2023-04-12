import React from 'react'
import styled from 'styled-components';

const leftside = () => {
  return (
    <Container>
      <span>Manage My network</span>
      <Card>
        <img src="/images/people-connection.svg" alt="" />
        <a href="/home/mynetwork">
          connections
        </a>
        <span>575</span>
      </Card>
    </Container>
  )
}

const Container = styled.div`
`;

const Card = styled.div`
display: flex;
text-align: space-between;
  a, span{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5)
  }
`;

export default leftside
