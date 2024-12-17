import toast from "react-hot-toast";

const validateRegisterData = ({
  username,
  email,
  birthDate,
  password,
  confirmedPassword,
}) => {
  if (!username || !email || !birthDate || !password || !confirmedPassword) {
    toast.error("Por favor, preencha todos os campos");
    return false;
  }

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isUsernameValid = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_.]{3,20}$/;
    return usernameRegex.test(username);
  };

  const isBirthDateValid = (birthDate) => {
    const today = new Date();
    const minimumAge = 13;
    const birthDateObj = new Date(birthDate);

    if (isNaN(birthDateObj)) {
      return false;
    }

    const age = today.getFullYear() - birthDateObj.getFullYear();
    const isOldEnough =
      age > minimumAge ||
      (age === minimumAge &&
        today.getMonth() >= birthDateObj.getMonth() &&
        today.getDate() >= birthDateObj.getDate());

    return isOldEnough;
  };

  if (!isUsernameValid(username)) {
    toast.error(
      "Nome de usuário inválido. Use apenas letras, números ou _. Deve ter entre 3 e 20 caracteres."
    );
    return false;
  }

  if (!isEmailValid(email)) {
    toast.error("E-mail inválido");
    return false;
  }

  if (password !== confirmedPassword) {
    toast.error("As senhas não batem");
    return false;
  }

  if (!isBirthDateValid(birthDate)) {
    toast.error("Data de nascimento inválida ou usuário sem idade suficiente");
    return false;
  }

  return true;
};

export { validateRegisterData }
