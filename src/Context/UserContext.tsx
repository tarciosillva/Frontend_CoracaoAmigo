import React, { useContext, useState } from "react";

interface LoginContextTypes {
  token?: string;
  setToken?: React.Dispatch<React.SetStateAction<string>>;
  validateAcess: () => {};
}

const contextDefault = {
  validateAcess: () => { return false }
}

const LoginContext = React.createContext<LoginContextTypes>(contextDefault);

export const UseUserContext = () => useContext(LoginContext);

export const LoginContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string>("");

  const validateAcess = () => {
    const token = localStorage.getItem("token");
    if (token && token !== "") {
      return true;
    } else return false;
  };

  return (
    <LoginContext.Provider
      value={{
        token,
        validateAcess,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
