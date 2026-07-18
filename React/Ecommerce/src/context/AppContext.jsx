import { createContext, useState } from "react";

export const AppStore = createContext();

export const AppProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {},
  );

  return (
    <AppStore.Provider
      value={{ setUser, setShowPassword, showPassword, setUser, user }}
    >
      {children}
    </AppStore.Provider>
  );
};
