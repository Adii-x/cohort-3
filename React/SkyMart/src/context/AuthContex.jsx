import { createContext, useState } from "react";

export const AuthStore = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || {},
  );

  return (
    <AuthStore.Provider
      value={{ setUsers, setLoggedInUser, loggedInUser, users }}
    >
      {children}
    </AuthStore.Provider>
  );
};
