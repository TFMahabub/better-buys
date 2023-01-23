import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AUTHENTICATION_PROVIDER = createContext();
const auth = getAuth(app);
const UserAuthentication = () => {
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    register,
  };
  return (
    <AUTHENTICATION_PROVIDER.Provider
      value={authInfo}
    ></AUTHENTICATION_PROVIDER.Provider>
  );
};

export default UserAuthentication;
