import { useState } from "react";
import { FiAtSign, FiLock, FiShield } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuCake, LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router-dom";

function RegisterForm({ setCurrentStep }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentStep(1)
  }

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
            <input type="text" placeholder="username" className="icon-left" />
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
              className="icon-left icon-right"
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
              className="icon-left icon-right"
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
