import React from "react";
import Swal from "sweetalert2";

const Alert = ({ error, registroExitoso }) => {
  {
    {
      error.error && Swal.fire("Error", `${error.mensaje}`, `${error.color}`);
    }
    {
      registroExitoso && Swal.fire("Éxito", `Se creó con éxito`, `success`);
    }
  }
};

export default Alert;
