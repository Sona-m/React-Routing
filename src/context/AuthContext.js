import { createContext, useState } from "react";

const AuthContext = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const value = (isAuth) => {
    setIsAuth(isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, value }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
export { Provider };
