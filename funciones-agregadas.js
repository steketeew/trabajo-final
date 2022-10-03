
 
      // Mensaje de ingreso al sitio web.//
        const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));
        if(edadDelUsuario >= 18){
            alert("Eres mayor de edad ,puedes ingresar.");
        }else{
            alert("Eres menor de edad,ingresas bajo tu responsabilidad.");
        }

//alerta de salida de sitio web//

function salir() {
  alert("Estas saliendo de este sitio web.");
}

function newsletter() {
  alert("Gracias por suscribirte ,pronto recibirar todas nuestas novedades.");
}

//funcion de descuento si es de San Nicolas//

function ciudad() {
  ciudad = prompt("introduce tu ciudad");

  if (ciudad == "san nicolas") {
    alert(
      "Tienes un 15% de descuento por ser de San Nicolas el precio de tu curso es: $25.5OO."
    );
  } else {
    alert("El precio de tu curso es de: $3O.OOO.");
  }
}
