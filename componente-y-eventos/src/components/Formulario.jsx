import React, { useState } from "react";

const Formulario = ({ setError, setRegistroExitoso }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [genderSelection, setGenderSelection] = useState({
    selection: "",
    isGenderSelected: false,
  });
  const genders = ["male", "female", "other"];
  const [male, female, other] = genders;
  const { selection, isGenderSelected } = genderSelection;

  const passwordRequirements =
    "La contraseña debe contener al menos 6 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula, un número y al menos un carácter especial.";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    const validarDatos =
      !name || !email || !password || !confirmPassword || !isGenderSelected;
    const validatePassword = password !== confirmPassword;
    const regexPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;

    if (validarDatos) {
      setError({
        error: true,
        mensaje: "Completa los campos",
        color: "danger",
      });
      setRegistroExitoso(false);

      setTimeout(() => {
        setError({
          error: false,
          mensaje: "",
          color: "danger",
        });
      }, 2000);
    } else if (validatePassword) {
      setError({
        error: true,
        mensaje: "Las contraseñas no coinciden",
        color: "danger",
      });
      setRegistroExitoso(false);

      setTimeout(() => {
        setError({
          error: false,
          mensaje: "",
          color: "danger",
        });
      }, 2000);
    } else if (!regexPassword.test(password)) {
      setError({
        error: true,
        mensaje: passwordRequirements,
        color: "danger",
      });
      setRegistroExitoso(false);

      setTimeout(() => {
        setError({
          error: false,
          mensaje: "",
          color: "danger",
        });
      }, 2000);
    } else {
      setRegistroExitoso(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setGenderSelection({
        selection: "choice",
        isGenderSelected: e.target.value !== "choice",
      });

      setTimeout(() => {
        setRegistroExitoso(false);
      }, 2000);
    }
  };

  const handleSelectChange = (e) => {
    const updatedGenderSelection = {
      selection: e.target.value,
      isGenderSelected: e.target.value !== "choice",
    };
    setGenderSelection(updatedGenderSelection);
    console.log(updatedGenderSelection);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="formulario-container">
      <form className="formulario-css" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="form-group mx-3">
          <input
            className="form-control mb-3"
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className="form-group mx-3">
          <input
            className="form-control mb-3"
            type="email"
            name="email"
            placeholder="ejemplo@ejemplo.com"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div
          className="select-cont
        "
        >
          <select
            className="form-select mb-3 p-2  w-100"
            aria-label="Default select example"
            name="genderChoice"
            onChange={handleSelectChange}
            value={selection}
          >
            <option value="choice">Selecciona género</option>
            <option value={male}>Masculino</option>
            <option value={female}>Femenino</option>
            <option value={other}>Otro</option>
          </select>
        </div>
        <div className="form-group mx-3">
          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="form-group mx-3">
          <input
            className="form-control mb-3"
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>

        <button className="btn btn-success btn-input-width" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Formulario;
