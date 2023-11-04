import React, { useState } from 'react';

const Formulario = ({ setError, setRegistroExitoso }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const passwordRequirements = "La contraseña debe contener al menos 6 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula, un número y al menos un carácter especial.";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    const validarDatos = !name || !email || !password || !confirmPassword;
    const validatePassword = password !== confirmPassword;
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%^&*]).{6,}$/;

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

      
      setTimeout(() => {
        setRegistroExitoso(false);
      }, 2000);
    }
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
      <form className='formulario-css' onSubmit={(e) => handleFormSubmit(e)}>
        <div className='form-group mx-3'>
          <input
            className='form-control mb-3'
            type="text"
            name="name"
            placeholder='Nombre'
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className='form-group mx-3'>
          <input
            className='form-control mb-3'
            type="email"
            name="email"
            placeholder='ejemplo@ejemplo.com'
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className='form-group mx-3'>
          <input
            className='form-control mb-3'
            type="password"
            name="password"
            placeholder='Contraseña'
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className='form-group mx-3'>
          <input
            className='form-control mb-3'
            type="password"
            name="confirmPassword"
            placeholder='Confirmar contraseña'
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>

        <button className="btn btn-success btn-input-width" type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Formulario;
