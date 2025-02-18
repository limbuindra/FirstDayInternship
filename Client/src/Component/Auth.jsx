import React from "react";
import { auth, provider, signInWithPopup, signOut } from "../Config/Firebase";

const Auth = ({ setUser }) => {
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Firebase Chat</h1>
      <button onClick={login} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
        Sign in with Google
      </button>
      <button onClick={logout} className="mt-2 text-red-500 underline">Sign out</button>
    </div>
  );
};

export default Auth;
