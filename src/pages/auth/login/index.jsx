import { useState } from "react";
import { FiLock } from "react-icons/fi";
import { LuEye, LuEyeClosed, LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function Login() {
  const [inputs, setInputs] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { loading, login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(inputs);
    navigate("/");
  };

  return (
    <div className="container large">
      <div className="logo">
        <img src="src/assets/logo_shadow.png" alt="Logo backpack" />
      </div>

      <div className="partial-divider"></div>

      <div className="inputs">
        <div className="title">
          <h1>Olá novamente, aventureiro!</h1>
        </div>

        {loading ? (
          <div className="spinner">
            <BeatLoader loading={loading} />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label>E-mail ou nome de usuário</label>
              <div className="input-icons">
                <LuUser className="icon left" />
                <input
                  type="text"
                  placeholder="exemplo@email.com"
                  name="login"
                  className="icon-left"
                  value={inputs.login}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-control">
              <label>Senha</label>
              <div className="input-icons">
                <FiLock className="icon left" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={showPassword ? "123456789" : "*********"}
                  name="password"
                  className="icon-left icon-right"
                  value={inputs.password}
                  onChange={handleInputChange}
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
        )}
      </div>
    </div>
  );
}

export default Login;
