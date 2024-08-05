import React, { useContext } from 'react'
import { AuthContext } from '../Firebase/AuthContext';
import { Navigate } from 'react-router-dom';


const ProtecedRoute = ({children}) => {


    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div className="text-gray-50">Loading...</div>;
    }
    if(!user){
        return<Navigate to={"/login-signup"}/>
    }
  return children;
}

export default ProtecedRoute
