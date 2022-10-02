

// Nombre y apellidos
const ExpRegNombre = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$"; 

//Pass fuerte
// eslint-disable-next-line no-useless-escape
const ExpRegPassFuerte = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

// eslint-disable-next-line no-useless-escape
const ExpRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;


export const evaluarFromRegistro = () => {
 /*
    Esta expresión regular valida los nombres de usuarios con letras minúsculas, 
    números, guion bajo y guion medio. Los nombres de usuarios deben tener entre 3 y 16 caracteres.
    */
    var NomUsuarioValida = "pedro-85";
    if (NomUsuarioValida.match(ExpRegNombre) != null) 
        console.log("Nombres de Usuario Válida");
    /*
    Esta expresión regular valida una contraseña fuerte que debe tener una letra minúscula, 
    una letra mayúscula, un número, un carácter especial y mínimo 8 dígit
    */
    var PassFuerteValida = "wMH432595@";
    if (PassFuerteValida.match(ExpRegPassFuerte) != null)
        console.log("Contraseña Fuerte Válida");

    /*
    Esta expresión regular valida un correo electrónico.
    */
     var EmailValido = "contacto.estilow3b@gmail.com";//Cadena de Email
     //Evaluación de Cadena Valida de Email 
     if (EmailValido.match(ExpRegEmail) != null)
         console.log("Email Válido");
    
}
   