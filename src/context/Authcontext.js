import { useContext,createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext=createContext()
export const AuthContextProvider=({children})=>{
    const [user,setUser]=useState({})
   const googleSignIn=()=>{
    const provider=new GoogleAuthProvider()
signInWithPopup(auth,provider)   
}

    return (
    <AuthContext.Provider value={{googleSignIn,logOut,user}}>
        {children}
    </AuthContext.Provider>
    )
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser
        )=>{
            setUser(currentUser)
            // console.log("user",currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
}
export const UserAuth=()=>{
    return useContext(AuthContext)
}