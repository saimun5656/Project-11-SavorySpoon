import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const location=useLocation()
    const{user,loading}=useContext(AuthContext)

    if(loading){
        return <h1>Loooooooding..........</h1>
    }
    
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from:location.pathname}}></Navigate>
};

export default Privateroute;