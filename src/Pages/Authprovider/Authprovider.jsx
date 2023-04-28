import React, { createContext, useEffect, useState } from 'react';
import  { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.config';
export const AuthContext=createContext({})
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

const Authprovider = ({children}) => {
 const[user,setUser]=useState();

 useEffect(()=>{
    onAuthStateChanged(auth,(curUser)=>{
            setUser(curUser)
    })
 },[])
 

const signUp =(name,email)=>{
    return createUserWithEmailAndPassword(auth,name,email)
}
const googleSignup=()=>{
    return signInWithPopup(auth,provider)
}
const logout=()=>{
    signOut(auth)
}

const Authinfo={
    user,
    signUp,
    googleSignup,
    logout
}
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;