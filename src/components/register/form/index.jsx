import { useState } from "react";
import { FiAtSign, FiLock, FiShield } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuCake, LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function RegisterForm({ setCurrentStep }) {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    birthDate: "",
    password: "",
    confirmedPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ok = await register(inputs);
    if (!ok) return

    setCurrentStep(1);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  return (
    <>
      <div className="title">
        <h1>Arrume as malas!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Nome de usuário</label>
          <div className="input-icons">
            <FiAtSign className="icon left" />
            <input
              type="text"
              placeholder="username"
              className="icon-left"
              name="username"
              value={inputs.username}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-control">
          <label>E-mail</label>
          <div className="input-icons">
            <HiOutlineMail className="icon left" />
            <input
              type="text"
              placeholder="exemplo@email.com"
              className="icon-left"
              name="email"
              value={inputs.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-control">
          <label>Data de nascimento</label>
          <div className="input-icons">
            <LuCake className="icon left" />
            <input
              type="date"
              placeholder="exemplo@email.com"
              className="icon-left"
              name="birthDate"
              value={inputs.birthDate}
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
              autoComplete="new-password"
              className="icon-left icon-right"
              name="password"
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
          <label>Confirmar senha</label>
          <div className="input-icons">
            <FiShield className="icon left" />
            <input
              type={showConfirmedPassword ? "text" : "password"}
              placeholder={showConfirmedPassword ? "123456789" : "*********"}
              autoComplete="new-password"
              className="icon-left icon-right"
              name="confirmedPassword"
              value={inputs.confirmedPassword}
              onChange={handleInputChange}
            />
            {showConfirmedPassword ? (
              <LuEyeClosed
                className="icon right cursor"
                onClick={() => setShowConfirmedPassword(!showConfirmedPassword)}
              />
            ) : (
              <LuEye
                className="icon right cursor"
                onClick={() => setShowConfirmedPassword(!showConfirmedPassword)}
              />
            )}
          </div>
        </div>

        <div className="form-control">
          <button type="submit" className="blue">
            Cadastrar-se
          </button>

          <div className="form-links">
            <Link to={"/login"}>Entrar</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
