console.log("Hello my banking app");
// DECLARACIÓN DE VARIABLES
let nombreUsuario = "Jhonatan Quirama Pino";
let saldoEnCuenta = 5000;
let limiteExtraccion = 500;
let claveCorrecta = 12345;
//console.log("clave correcta " + typeof claveCorrecta);
// SE DEFINE LA FUNCIÓN PARA INICIAR SESIÓN
function iniciarSesion() {
  var clave = parseInt(
    prompt("Por favor ingrese su clave para iniciar sesión"),
    0
  );
  //console.log(typeof clave);
  // 1234 == "1234" -> true
  // 1234 === "1234" -> false
  if (clave === claveCorrecta) {
    alert("Bienvenido/a " + nombreUsuario + " a tu Home Banking");
    document.body.style.display = "block";
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
  } else {
    saldoEnCuenta = 0;
    alert("Clave incorrecta. le quitamos toda su platica :(");
  }
}
//Función para poder cargar el nombre en pantalla
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Hello" + nombreUsuario;
}

//actualizar saldo en pantalla
function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$ " + saldoEnCuenta;
}

//función flecha limite en pantalla fuction --- =>
const actualizarLimiteEnPantalla = () => {
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de estraccion es: $ " + limiteExtraccion;
};

//INVOCAR LA FUNCIÓN INICIAR SESIÓN
iniciarSesion();

const pagarServicios = () => {
  let agua = 500;
  let telefono = 425;
  let luz = 215;
  let internet = 100;

  let misServicios = ["Agua", "Telefono", "Luz", "Internet"];

  let servicio = prompt(`Ingrese el número que corresponda al servicio a pagar 
  1. Agua - Valor ${agua}
  2. Telefono - Valor ${telefono} 
  3. Luz - Valor ${luz}
  4. Internet - Valor ${internet}
  `);

  switch (servicio) {
    case "1":
      depositarServicio(agua, misServicios[0]);
      break;
    case "2":
      depositarServicio(telefono, misServicios[1]);
      break;
    case "3":
      depositarServicio(luz, misServicios[2]);
      break;
    case "4":
      depositarServicio(internet, misServicios[3]);
      break;
    default:
      alert("No hay opción valida");
      break;
  }
};

function depositarServicio(tipoDeServicio, nombreServicio) {
  saldoEnCuenta -= tipoDeServicio;
  actualizarSaldoEnPantalla();
  alert(
    `Has pagado ${tipoDeServicio} del servicio ${nombreServicio} y tu nuevo saldo es ${saldoEnCuenta}`
  );
}
// switch(servicio){
//       break;
//     case "2":
//       depositarServicio(telefono, misServicios[1]);
//       break;
//     case "3":
//       depositarServicio(luz, misServicios[2]);
//       break;
//     case "4":
//       depositarServicio(internet, misServicios[3]);
//       break;
//     default:
//       alert("No hay opción valida");
//       break;
//   }
// };

function depositarServicio(tipoDeServicio, nombreServicio) {
  saldoEnCuenta -= tipoDeServicio;
  actualizarSaldoEnPantalla();
  alert(
    `Has pagado ${tipoDeServicio} del servicio ${nombreServicio} y tu nuevo saldo es ${saldoEnCuenta}`
  );
}
//evento para pagar servicios
//listener sobre el elemento,
document.getElementById("servicios").addEventListener("click", pagarServicios);
function extraerDinero() {
  let dineroAExtraer = parseInt(prompt("Digite el Valor a extraer"), 0);

  if (dineroAExtraer > saldoEnCuenta) {
    alert("Error, su saldo es insuficiente");
  } else if (dineroAExtraer > limiteExtraccion) {
    alert("No puede exceder el limite de extraccion");
  } else if (dineroAExtraer < saldoEnCuenta) {
    saldoEnCuenta -= dineroAExtraer;
    alert("su saldo se actualizo");
    actualizarSaldoEnPantalla();
  } else if (saldoEnCuenta >= 0) {
    alert("no se puede ingresar letras");
    // }else {
    //     alert("Error,Digite un valor correcto");
  } else if (dineroAExtraer > 0) {
    alert("no se pueden numeros negativos");
  }
}

function depositarDinero() {
  var cantidad = parseInt(prompt("ingrese la cantidad a depositar"), 0);

  if (isNaN(cantidad)) {
    return alert("Ingrese numeritooos no retiramos letras");
  } else if (cantidad <= 0) {
    return alert("Ups! si hago esto te robo platica");
  }
  //saldoEnCuenta = saldoEnCuenta + cantidad
  saldoEnCuenta += cantidad;
  actualizarSaldoEnPantalla();
  alert("Su nuevo saldo es: " + saldoEnCuenta);
}

function cambiarLimiteDeExtraccion() {
  var nuevoLimite = parseInt(
    prompt("Ingrese su nuevo límite de extraccion"),
    0
  );
  if (isNaN(nuevoLimite)) {
    return alert("No se puede ingresar letras solo numero");
  } else if (nuevoLimite < 0) {
    return alert("no se puede ingresar numeros negativos");
  } else if (nuevoLimite > 0) {
    alert("su limite se actulizado");
    actualizarLimiteEnPantalla();
  } else {
    nuevoLimite = 0;
    return alert("ingrese su numero limite de extraccion");
  }
  limiteExtraccion = nuevoLimite;
  actualizarLimiteEnPantalla();
  alert(
    "Se ha actualizado tu límite de extracción, nuevo valor " + limiteExtraccion
  );
}
