import React from 'react'
import styled from 'styled-components'
import { HiOutlineMenu } from 'react-icons/hi';
import {AiOutlineSearch} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {BsCameraVideo} from 'react-icons/bs'

const Chats = (props) => {
  return (
    <Container>
        <NavBar>
            <User>
                <img src="/Images/User.svg" alt="" />
                <Details>
                    <Name>Denie</Name>
                    <Status>last seen today at 2:38 pm</Status>
                </Details>
            </User>
            <Icon>
                <BsCameraVideo/>
                <BiPhoneCall/>
                <AiOutlineSearch/>
                <HiOutlineMenu/>
            </Icon>
        </NavBar>
        <Chat>
            
        </Chat>
    </Container>
  )
}

const Container = styled.div`
width: 60%;
    @media (max-width: 768px){
        display: none;
    }
`;

const NavBar = styled.div`
    padding-left: 15px;
    padding-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: rgba(0, 0, 0, 0.05);

`;

const User = styled.div`
display: flex;
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;

const Details = styled.div`
    padding-left: 15px;
`;

const Icon = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: white; */
    gap: 30px;
    /* display: flex; */
`;

const Chat = styled.div``;

const Name = styled.p`
    font-size: 15px;
    padding-top: 7px;
`;

const Status = styled.p`
    padding-top: 1px;
    font-size: 12px;
`;


export default Chats
