import React from 'react';
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {UserAuth} from '../context/Authcontext'
import styled from 'styled-components';
import { Login } from '../pages';
import { Signin } from '../pages/signin';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'
const Navbar = () => {
  const {user,logOut}=UserAuth()
  const history=useHistory()
  const handleSignOut=async()=>{
try {
  await logOut()
//  history('/')
} catch (error) {
  console.log(error);
}
  }

  return <Wrapper>
 <h1>
logOut
 {/* <link to='/login'>Login</link> */}
 </h1>

  </Wrapper>;
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
