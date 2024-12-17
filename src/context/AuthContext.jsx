import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { validateRegisterData } from "../util/validation";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const register = async (data) => {
    const ok = validateRegisterData(data);
    if (!ok) return false;

    setLoading(true);
    try {
      const response = await fetch("/api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }
      
      setUser(res)
      localStorage.setItem("user", JSON.stringify(res))
    } catch (error) {
      toast.error(error.message);
      return false
    } finally {
      setLoading(false)
    }

    return true;
  };

  return (
    <AuthContext.Provider value={{ loading, user, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
