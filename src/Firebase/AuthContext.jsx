import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { FIREBASE_AUTH } from './FirebaseConfig';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(FIREBASE_AUTH,(user)=>{
            setUser(user);
            setLoading(false)
        });
        return ()=>unsbscribe();
    },[])
  return (
    <AuthContext.Provider value={{user,loading}}>
      {children}
    </AuthContext.Provider>
  )
}

