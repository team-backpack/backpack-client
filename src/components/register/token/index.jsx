import { FaAsterisk } from "react-icons/fa";
import "./styles.css";
import { IoArrowBack } from "react-icons/io5";

function TokenConfirmation({ setCurrentStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentStep(0)
  }

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
            <input type="text" placeholder="Código" className="icon-left" />
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
