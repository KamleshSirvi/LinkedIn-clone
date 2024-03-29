import styled from "styled-components";
import Header from "../header/Header";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";


const Home = (props) => {
    return(
        <>
        <Header/>
        <Container>
        {!props.user && <Navigate to='/'/>}
            <Section>
                <h5>
                    <a href="/home/hiring">Hiring in a hurry? - </a>
                </h5>
                <p>
                    Find talented pros in record time with upwork and keep business moving
                </p>
            </Section>
            <Content>
                <Layout>
                    <Leftside/>
                    <Main/>
                    <Rightside/>
                </Layout>
            </Content>
            
        </Container>
        </>
    );
};

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;

// const Content = styled.div`
//     max-width: 1128px;
//     margin-left: auto;
//     margin-right: auto;
// `;

const Section = styled.section`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    h5{
        color: #0a66c2;
        font-size: 14px;
        a{
            font-weight: 700;
        }
    }
    p{
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }

    @media (max-width: 768px){
        flex-direction: column;
        padding: 0 5px;
    }
`;

const Content = styled.div`
    /* max-width: 1000px; */
    display: flex;
    /* align-items: center; */
    justify-content: center;
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;
    max-width: 1000px;
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

export default connect(mapStateToProps)(Home);