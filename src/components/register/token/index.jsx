import { FaAsterisk } from "react-icons/fa";
import "./styles.css";
import { IoArrowBack } from "react-icons/io5";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TokenConfirmation({ setCurrentStep }) {
  const [inputs, setInputs] = useState({
    verificationToken: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const { verify } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await verify(inputs);
    navigate("/");
  };

  return (
    <>
      <div className="back-arrow" onClick={() => setCurrentStep(0)}>
        <IoArrowBack />
      </div>
      <div className="title">
        <h1>Código enviado!</h1>
      </div>
      <div className="text">
        <p>Um código foi enviado para example@wow.com. Confirme-o abaixo.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Código de verificação</label>
          <div className="input-icons">
            <FaAsterisk className="icon left" />
            <input
              type="text"
              placeholder="Código"
              name="verificationToken"
              className="icon-left"
              value={inputs.verificationToken}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-control">
          <button type="submit" className="blue">
            Confirmar
          </button>
        </div>
      </form>
    </>
  );
}

export default TokenConfirmation;
