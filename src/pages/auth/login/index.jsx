import { useState } from "react";
import { FiLock } from "react-icons/fi";
import { LuEye, LuEyeClosed, LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container large">
      <div className="logo">
        <img src="src/assets/logo.png" alt="Logo backpack" />
      </div>

      <div className="divider"></div>

      <div className="inputs">
        <div className="title">
          <h1>Olá novamente, aventureiro!</h1>
        </div>

        <form>
          <div className="form-control">
            <label>E-mail ou nome de usuário</label>
            <div className="input-icons">
              <LuUser className="icon left" />
              <input type="text" placeholder="exemplo@email.com" />
            </div>
          </div>

          <div className="form-control">
            <label>Senha</label>
            <div className="input-icons">
              <FiLock className="icon left" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder={showPassword ? "123456789" : "*********"}
              />
              {showPassword ? (
                <LuEyeClosed
                  className="icon right cursor"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <LuEye
                  className="icon right cursor"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>

          <div className="form-control">
            <button type="submit" className="blue">
              Entrar
            </button>

            <div className="form-links">
              <Link to={"/register"}>Criar conta</Link>
              <Link to={"/register"}>Esqueci a senha</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
