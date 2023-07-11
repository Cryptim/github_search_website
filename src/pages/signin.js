import React, { useEffect } from "react";
import {GoogleButton} from 'react-google-button';
import { UserAuth } from "../context/Authcontext";
import {useHistory} from 'react-router-dom'
export const Signin=()=>{
   const {googleSignIn,user,history}=UserAuth()
    const HandleGoogleSignIn=async()=>{
try {
    await HandleGoogleSignIn()
} catch (error) {
    console.log(error);
}
useEffect(()=>{
if(user !=null){
    history('/Dashboard')
}
},[])
    }
    return (
        <div>
            <h1>Signin</h1>
            <div>
                <GoogleButton onClick={HandleGoogleSignIn}/>
                </div>
        </div>
    )
}