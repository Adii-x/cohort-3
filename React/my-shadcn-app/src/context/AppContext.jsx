import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AppStore = createContext();

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  return (
    <AppStore.Provider
      value={{
        navigate,
        userInfo,
        setUserInfo,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AppStore.Provider>
  );
};
