import React from 'react'
import styled from 'styled-components'
import { signInAPI } from '../../actions'
import { connect } from 'react-redux'
import {Navigate} from "react-router-dom";

const SignInPage = (props) => {
  return (
    <Container>
    {props.user && <Navigate to='/home' />}
      <Nav>
        <a href="/">
            <img src="/images/login-logo.svg" alt="" />
        </a>
      </Nav>
      <Content>
        <Form>
          <P>
            <p>Sign in</p>
          </P>
          <Stay>Stay updated on your professional world</Stay>
          
          <Email>
            <label htmlFor="text">Email or phone</label>
            <input type="text" />
          </Email>
          <Password>
            <label htmlFor="text">Password</label>
            <input type="password" />
          </Password>
          <Forgot>
            Forgot password?
          </Forgot>
          <Outer>
            <Signin>
              Sign in
            </Signin>
          </Outer>
          <Or>
          <hr/>
          or
          <hr/>
          </Or>
          <Outer>
            <GoogleButton onClick={()=> props.signIn()}>
                      <img src="/Images/google.svg" alt="" />
                      <p>Sign in with Google</p>
            </GoogleButton>
          </Outer>
        </Form>
      </Content>
      <RenderJoin>New to LinkedIn? <a href='/joinnow'> Join Now</a></RenderJoin>
    </Container>
  )
}

const Container = styled.div``;

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

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  height: 460px;
  
  
`;

const Form = styled.div`
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 25%;
  box-shadow: 5px 10px 18px #888888;
`;

const P = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  
  p{
    font-size: 32px;
    font-weight: 510;
  }
`;

const Stay = styled.p`
  padding-top: 8px;
  padding-left: 20px;
  font-size: 13px;
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  label{
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 5px;
  }

  input{
    width: 80%;
    height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.7);
    font-size: 16px;
    border-radius: 5px;
    margin-left: 20px;
    margin-bottom: 15px;
  }
`;

const Password = styled.div`
  display: flex;
  flex-direction: column;

  label{
    padding-left: 20px;
    padding-bottom: 5px;
  }
  input{
    width: 80%;
    height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.7);
    font-size: 16px;
    border-radius: 5px;
    margin-left: 20px;
    margin-bottom: 15px;
  }

`;

const Forgot = styled.a`
  padding-left: 20px;
  color: #0073b1;
  font-weight: 550;
  padding-bottom: 20px;
`;

const Outer = styled.div`
  display: flex;
  justify-content: center;
`;

const Signin = styled.button`
  background-color: #054af7;
  font-size: 20px;
  border: none;
  color: white;
  width: 75%;
  height: 50px;
  border-radius: 50px;
  /* margin-left: 20px; */
  &:hover{
      background-color: #0f04d6;
  }
`;

const Or = styled.p`
  padding-top: 15px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-bottom: 15px;
    hr{
      width: 40%;
      color:gray;
      background-color:gray
    }
`;

const GoogleButton = styled.button`
    display: flex;
    width: 80%;
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

const RenderJoin = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 25px;

  a{
    text-decoration: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    user : state.userState.user,
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
      signIn : () => dispatch(signInAPI()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
