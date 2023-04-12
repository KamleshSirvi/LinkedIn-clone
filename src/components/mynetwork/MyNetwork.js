import React from 'react'
import styled from 'styled-components'
import LeftsideNetwork from './LeftsideNetwork'
import RightsideNetwork from './RightsideNetwork'
import Header from '../header/Header'

const MyNetwork = () => {
  return (
    <Container>
      <Header/>
        <Layout>
          <LeftsideNetwork/>
          <RightsideNetwork/>
        </Layout>
    </Container>
  )
}

const Container = styled.div`
  padding: 52px;
  max-width: 100%;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "LeftsideNetwork RightsideNetwork";
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
`;

export default MyNetwork
