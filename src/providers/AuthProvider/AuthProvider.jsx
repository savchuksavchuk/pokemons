import { createContext, useContext, useState } from "react";
import { AuthService } from "../../services/auth.service";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    const message = await AuthService.getMessageToSign();

    const signature = await AuthService.signNonce(message);

    const user = await AuthService.login(message, signature);

    setUser(user);
  };

  const value = {
    user,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Auth context should be used within AuthProvider");
  }

  return context;
};
