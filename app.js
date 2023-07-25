import { validaFormulario } from "./validacion.js";

const inputs = document.querySelectorAll(".formcontato__input, .formcontato__textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    validaFormulario(event.target);
  });
});
