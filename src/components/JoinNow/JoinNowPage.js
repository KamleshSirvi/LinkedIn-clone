import React from 'react'
import styled from 'styled-components'
import { signInAPI } from '../../actions'
import { connect } from 'react-redux'
import {Navigate} from "react-router-dom";

const JoinNowPage = (props) => {
  return(
    <Container>
    {props.user && <Navigate to='/home' />}
        <Nav>
            <a href="/">
                <img src="/images/login-logo.svg" alt="" />
            </a>
        </Nav>
        <Header>
            Make The Most of your professional life
        </Header>
        <Content>
            <Form>
                <Email>
                    <label htmlFor="text">Email or Phone Number</label>
                    <input type="email" />
                </Email>
                <Password>
                    <label htmlFor="input">Password (6 or more charecters)</label>
                    <input type="password" />
                </Password>
                <Agreement>
                    By clicking Agree & Join, you agree to the LinkedIN <a href="/">User Agreement, Privacy Policy</a>, and <a href="/">Cookie Policy</a>
                </Agreement>
                <JoinButton>
                    Agree & Join
                </JoinButton>
                <Or>
                    <hr />
                    <p>or</p>
                    <hr />
                </Or>
                <GoogleButton onClick={()=> props.signIn()}>
                    <img src="/Images/google.svg" alt="" />
                    <p>Sign in with Google</p>
                </GoogleButton>
                <SignIn>
                    <p>Already on LinkedIn? <a href="/signIn">Sign in</a></p>
                </SignIn>
            </Form>
        </Content>
    </Container>
  )
}

const Container = styled.div`
`;

const Nav = styled.div`
    max-width:1128px;
    margin:auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a{
        width : 135px;
        height: 34px;
        @media (max-width: 768px){
            padding : 0 5px;
        }
    }
`;

const Header = styled.div`
    text-align: center;
    font-size: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`;

const Form = styled.div`
    background-color: white;
    border-radius: 5px;
    width: 30%;
    height: 370px;
    padding: 25px 10px;
    box-shadow: 5px 10px 18px #888888;
`;

const Email = styled.div`
    display: flex;
    flex-direction: column;
    label{
        color: rgba(0, 0, 0, 0.5);
        padding-bottom: 4px;
    }
    input{
        width: 95%;
        height: 30px;
        border-radius: 5px;
        padding-left: 10px;
        font-size: 16px;
        border: 1px solid rgba(0, 0, 0, 0.7);
    }
`;

const Password = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    label{
        color: rgba(0, 0, 0, 0.5);
        padding-bottom: 4px;
    }
    input{
        width: 95%;
        height: 25px;
        border-radius: 5px;
        padding-left: 10px;
        border: 1px solid rgba(0, 0, 0, 0.7);
    }
`;

const Agreement = styled.div`
    padding-top: 15px;
    font-size: 12px;
    padding-bottom: 20px;
    color: rgba(0, 0, 0, 0.5);
    a{
        text-decoration: none;

    }
`;

const JoinButton = styled.button`
    background-color: #054af7;
    font-size: 20px;
    border: none;
    color: white;
    width: 100%;
    height: 50px;
    border-radius: 50px;
    &:hover{
        background-color: #0f04d6;
    }
`;


const GoogleButton = styled.button`
    display: flex;
    width: 100%;
    height: 50px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    p{
        font-size: 18px;
    }
    &:hover{
        cursor: pointer;
    }
`;

const SignIn = styled.div`
    padding-top: 20px;
    text-align: center;
    a{
        text-decoration: none;
    }
`;

const Or = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    text-align: center;
        /* p{
            color: rgba(0, 0, 0, 0.5);
        } */
        hr{
            width: 40%;
            color:gray;
            background-color:gray;
        }
`;

const mapStateToProps = (state) => {
    return{
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signIn : () => dispatch(signInAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(JoinNowPage);
