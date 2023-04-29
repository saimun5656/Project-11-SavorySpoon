import React, { createContext, useEffect, useState } from 'react';
import  { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.config';
export const AuthContext=createContext({})
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

const Authprovider = ({children}) => {
 const[user,setUser]=useState();
 const[loading,setLoading]=useState(true);

 useEffect(()=>{
    onAuthStateChanged(auth,(curUser)=>{
            setUser(curUser);
            setLoading(false)
    })
 },[])
 

const signUp =(name,email)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,name,email)
}
const googleSignup=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}
const logout=()=>{
    signOut(auth)
}
const logInWithEmailPass=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const Authinfo={
    user,
    signUp,
    googleSignup,
    logInWithEmailPass,
    logout,
    loading
}
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;