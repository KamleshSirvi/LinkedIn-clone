import React from 'react'
import styled from 'styled-components'

const Contact = ({img, name, message}) => {
  return (
    <Container>
        <Content>
            <User>
                <img src={img} alt="" />
            </User>
            <Detail>
                <p>{name}</p>
                <p>{message}</p>
            </Detail>
        </Content>
        <Time>
            <p>8:51 PM</p>
        </Time>
    </Container>
  )
}

const Container = styled.div`
    width: 95%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-top: 15px;
    /* margin-right: 100px; */
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
    display: flex;
`;

const User = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    img{
        border-radius: 50%;
    }
`;

const Detail = styled.div`
    p:first-child{
        /* font-size: 10px; */
        /* font-weight: 600; */
        margin-bottom: 5px;
    }
    p:nth-child(2){
        color: rgba(0, 0, 0, 0.7);
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        /* width: 80px; */
    }
`;

const Time = styled.p`
    /* margin-right: 40px */
    p{
        color: rgba(0, 0, 0, 0.5);
        font-size: 13px;
    }
`;

export default Contact
