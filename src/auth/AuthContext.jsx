import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (values) => {
    // Implement your login logic here
    console.log(values);
    setIsAuthenticated(true);
    navigate("/dashboard/analysis");
  };

  const logout = () => {
    // Implement your logout logic here
    setIsAuthenticated(false);
  };
  console.log(isAuthenticated);
  console.log("qqqq");
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
