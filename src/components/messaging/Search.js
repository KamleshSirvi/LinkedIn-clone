import React from 'react'
import styled from 'styled-components'

const Search = () => {
  return (
    <Container>
        <input type="text" placeholder='Search For Friends'/>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 5px;
    input{
        /* margin-left: 5px; */
        margin-top: 5px;
        width: 95%;
        height: 25px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 50px;
        padding-left: 10px;
    }
`;

export default Search
