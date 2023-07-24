import React from 'react'
import { BiMessage } from 'react-icons/bi';
import { HiOutlineMenu } from 'react-icons/hi';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Navbar = (props) => {
  return (
        <NavBar>
            <Img>
                {props.user && props.user.photoURL ? (
                    <img src={props.user.photoURL} alt="" />
                ): (
                    <img src="/images/user.svg" alt="" />
                )}
                
            </Img>
            <Icon>
                <BiMessage/>
                <HiOutlineMenu/>
            </Icon>
        </NavBar>
  )
}


const NavBar = styled.div`
    display: flex;
    width: 103.5%;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    /* width: 100%; */
    background-color: rgba(0, 0, 0, 0.05);
`;

const Img = styled.div`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    /* margin-top: 5px;
    margin-bottom: 5px; */
    img{
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
`;

const Icon = styled.div`
    display: flex;
    /* align-items: center; */
    gap: 25px;
    margin-right: 10px;
`;

const mapStateToProps = (state) => {
    return{
        user : state.userState.user,
    };
};

const mapDispatchToProps = () => {
    return {

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
