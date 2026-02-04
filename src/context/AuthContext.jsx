import { createContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔐 Login
  const login = async ({ email, password }) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // 🚪 Logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  // 🔁 Persistencia
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        await firebaseUser.getIdToken(true);
        const tokenResult = await firebaseUser.getIdTokenResult();

        if (!tokenResult.claims.admin) {
          await signOut(auth);
          setUser(null);
          setLoading(false);
          return;
        }

        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          admin: tokenResult.claims.admin,
        });
      } catch (error) {
        console.error("AuthContext:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
