import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AUTHENTICATION_PROVIDER = createContext();
const auth = getAuth(app);
const UserAuthentication = ({ children }) => {
  //state
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  //register the user-
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update the user-
  const updateUserInfo = (userName) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
    });
  };

  //login the user-
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logOut the user-
  const logOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    registerUser,
    updateUserInfo,
    loginUser,
    logOutUser,
    user,
    loading,
  };
  return (
    <AUTHENTICATION_PROVIDER.Provider value={authInfo}>
      {children}
    </AUTHENTICATION_PROVIDER.Provider>
  );
};

export default UserAuthentication;
