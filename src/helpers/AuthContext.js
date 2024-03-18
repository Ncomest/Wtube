import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
 return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
 const [isAuthenticated, setIsAuthenticated] = useState(false);

 useEffect(() => {
  // Читаем значение из localStorage при инициализации компонента
  const online = localStorage.getItem("online");
  setIsAuthenticated(online === "true"); // Преобразуем строку "true" в булево значение
 }, []);

 return (
  <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
   {children}
  </AuthContext.Provider>
 );
};
