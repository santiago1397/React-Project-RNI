//import { GoogleAuthProvider } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import  {auth}  from '../Firebase.js'

const AuthContext = React.createContext()

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password){
    return auth.createUserWithEmailAndPassword(email, password).catch(function(err){ // LINE 27 CRASH
      var errorCode = err.code;
      var errorMessage = err.message;
      console.log("ERROR");
      console.log(errorCode, errorMessage);
  });
  }

  function login(email, password){
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout(){
    return auth.signOut()
  }

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user=> {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  },[])

  const value = {
    currentUser,
    signup,
    login,
    logout
  }

  return(
      <AuthContext.Provider value={value}>
        { !loading && children }
      </AuthContext.Provider>
  )
}
