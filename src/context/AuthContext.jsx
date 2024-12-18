import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { validateLoginData, validateRegisterData } from "../util/validation";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const logout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/logout/", {
        method: "POST",
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }

      setUser(null);
      localStorage.setItem("user", null);
    } catch (error) {
      toast.error(error.message);
      return;
    } finally {
      setLoading(false);
    }
    toast.success("Usuário deslogado com sucesso");
  };

  const login = async (data) => {
    if (!data) return;

    const ok = validateLoginData(data);
    if (!ok) return;

    let request = { password: data.password };

    if (data.login.includes("@")) {
      request.email = data.login;
    } else {
      request.username = data.login;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }

      setUser(res);
      localStorage.setItem("user", JSON.stringify(res));
    } catch (error) {
      toast.error(error.message);
      return;
    } finally {
      setLoading(false);
    }
    toast.success("Usuário logado com sucesso");
  };

  const register = async (data) => {
    if (!data) return;

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

      setUser(res);
      localStorage.setItem("user", JSON.stringify(res));
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
    toast.success("Cadastrado com sucesso");

    return true;
  };

  const verify = async (data) => {
    if (!data) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/auth/verify/${user.userId}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }

      setUser({ ...user, verified: true });
    } catch (error) {
      toast.error(error.message);
      return;
    } finally {
      setLoading(false);
    }
    toast.success("Usuário verificado com sucesso");
  };

  return (
    <AuthContext.Provider
      value={{ loading, user, register, verify, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
