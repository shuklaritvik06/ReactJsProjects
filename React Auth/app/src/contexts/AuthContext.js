import React, { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase";

const Authentication = getAuth(app);

const Auth = createContext(null);

export function useAuth() {
  return useContext(Auth);
}

export default function AuthContext({ children }) {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    onAuthStateChanged(Authentication, (user) => {
      if (user) {
        setUser(user);
        console.log("I am inside the authenticated");
        document.cookie = `user=${user.uid}; expires=${new Date()};`;
      }
    });
  }, []);
  function signUp(email, password) {
    return createUserWithEmailAndPassword(Authentication, email, password);
  }
  function signIn(email, password) {
    return signInWithEmailAndPassword(Authentication, email, password);
  }
  function signInWithGoogle() {
    return signInWithPopup(Authentication, provider);
  }
  function signOutUser() {
    return signOut(Authentication);
  }

  const value = {
    signIn,
    signUp,
    setPassword,
    setEmail,
    email,
    password,
    error,
    setError,
    user,
    setConfirmPass,
    confirmPass,
    signOutUser,
    signInWithGoogle,
    setUser
  };
  return (
    <div>
      <Auth.Provider value={value}>{children}</Auth.Provider>
    </div>
  );
}
