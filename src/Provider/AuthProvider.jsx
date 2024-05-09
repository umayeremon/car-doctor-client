import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import PropTypes from 'prop-types'

export const AuthContext=createContext();

const AuthProvider = ({children}) => {

  const [user, setUser]=useState(null);
  const [loading, setLoading]=useState(true)


  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signInWithPassword=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(()=>{
   const unsubscribe=  onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoading(false)
    });
    return ()=>{
      return unsubscribe()
    }
  },[])

  const authInfo={
    user,
    loading,
    signInWithPassword,
    createUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes={
  children: PropTypes.node
}

export default AuthProvider;