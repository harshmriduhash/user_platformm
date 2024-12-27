import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const signInWithGoogle = async (isSignUp = false) => {
    const provider = new GoogleAuthProvider();
    try {
      // Clear any previous errors
      setError(null);

      // If signing up, add custom parameter
      if (isSignUp) {
        provider.setCustomParameters({
          prompt: "select_account",
        });
      }

      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;

      // Check if this is a new or existing account
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (isSignUp && signInMethods.length > 0) {
        throw new Error("Account already exists. Please use Log In instead.");
      }

      return result.user;
    } catch (error) {
      console.error("Authentication error:", error);
      if (error.code === "auth/popup-closed-by-user") {
        setError("Authentication cancelled.");
      } else {
        setError(error.message);
      }
      throw error;
    }
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    error,
    signInWithGoogle,
    logout,
    setError,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
