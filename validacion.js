//Haz tú validación en javascript acá
export function validaFormulario(input){
    const tipoInput = input.dataset.tipo;
    if(input.validity.valid)
    {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }
    else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoInput, input);
    }
}

const tipoError =[
    "valueMissing",
  "typeMismatch",
  "customError",
]

const mensajeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
      },
      email: {
        valueMissing: "El campo correo no puede estar vacío.",
        typeMismatch: "El campo correo no es válido.",
      },
    asunto : {
        valueMissing: "El campo asunto no puede estar vacío.",
    },
    mensaje:{
        valueMissing:"El campo mensaje no puede estar vacío.",
    },
}

function mostrarMensajeDeError (tipoInput, input){
let mensaje= "";
tipoError.forEach((error) => {
    if(input.validity[error]){
        mensaje = mensajeError[tipoInput][error];
    }
});
return mensaje;
}