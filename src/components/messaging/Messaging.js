import React from 'react'
import Header from '../header/Header'
import styled from 'styled-components'
import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'
import Contacts from './Contacts'

const Messaging = () => {
  return (
    <Container>
      <Header/>
      <Content>
        <LeftContent>
          <Navbar/>
          <Search/>
          <Contacts/>
        </LeftContent>
        <Chats/>
      </Content>
    </Container>
  )
}

const Container = styled.div``;

const Content = styled.div`
    margin-top: 70px;
    margin-left: 30px;
    width: 95%;
    height: 580px;
    background-color: #fff;
    box-shadow: 5px 10px 18px #888888;
    display: flex;
`;

const LeftContent = styled.div`
  width: 40%;
  /* margin-right: 10px; */
  padding-right: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 768px){
    width: 100%;
  }
`;

export default Messaging
