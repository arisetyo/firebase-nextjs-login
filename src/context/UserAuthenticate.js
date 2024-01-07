'use client';

/**
 * 
 * This method of authentication is for demonstration purpose only.
 * It is used only to demonstrate the usage of Firebase for login on the client side.
 * For best result, combine authentication, verification, and session management on the server side.
 * 
 */

import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "../firebase"

// create the context
const AuthContext = createContext({})

// create the provider
export const AuthContextProvider = ({ children }) => {
  // store user object
  const [user, setUser] = useState(null)

  // logout
  function logOut() {
    return signOut(auth)
  }

  // google sign in
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider)
  }

  // google sign in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser)
    });

    return () => {
      unsubscribe()
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// create the custom hook
export const useAuthContext = () => useContext(AuthContext)