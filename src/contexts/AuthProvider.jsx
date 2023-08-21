/* eslint-disable comma-dangle */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useMemo, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //   console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  //   const authInfo = {
  //     user,
  //     loading,
  //     setLoading,
  //     createUser,
  //     signIn,
  //     signInWithGoogle,
  //     resetPassword,
  //     logOut,
  //     updateUserProfile,
  //   };

  const authInfo = useMemo(
    () => ({
      user,
      loading,
      setLoading,
      createUser,
      signIn,
      signInWithGoogle,
      resetPassword,
      logOut,
      updateUserProfile,
      setRole,
      role,
    }),
    [loading, user, role]
  );

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
