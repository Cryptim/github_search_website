import { useContext,createContext, useEffect, useState } from "react";
import {
     signInWithPopup,
     signInWithRedirect,
     signOut,
     onAuthStateChanged,
     GoogleAuthProvider,
     } from "firebase/auth";
import {auth} from '../firebase'
//  import {auth} from 'firebase';
const AuthContext=createContext()
export const AuthContextProvider=({children})=>{
    const googleSignIn=()=>{
        const provider=new GoogleAuthProvider()
    signInWithPopup(auth,provider)
    }
    const logOut=()=>{
signOut(auth)
    }
    const [user,setUser]=useState({})
    useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
    console.log('user',currentUser);
});
return ()=>{
    unsubscribe()
}
    },[])
    return <AuthContext.Provider value={{googleSignIn,logOut,user}}>
        {children}
    </AuthContext.Provider>
}
export const UserAuth=()=>{
    return useContext(AuthContext)
}