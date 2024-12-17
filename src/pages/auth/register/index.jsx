import { useEffect, useState } from "react";
import RegisterForm from "./form";
import TokenConfirmation from "./token";

function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentComponent, setCurrentComponent] = useState();

  const step = (value) => {
    setCurrentStep(value);
  };

  const steps = [
    <RegisterForm key={0} setCurrentStep={step} />,
    <TokenConfirmation key={1} setCurrentStep={step} />,
  ];

  useEffect(() => {
    setCurrentComponent(steps[currentStep]);
  }, [currentStep]);

  return (
    <div className="container large">
      <div className="inputs">{currentComponent}</div>

      <div className="partial-divider"></div>

      <div className="logo">
        <img src="icon.png" alt="Logo backpack" />
      </div>
    </div>
  );
}

export default Register;
