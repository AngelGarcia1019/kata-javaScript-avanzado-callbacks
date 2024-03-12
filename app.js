// Objetivo: Escribir una serie de funciones que simulan la verificación de un usuario en un sistema. Este proceso involucra tres pasos: verificar si el usuario existe, comprobar si la cuenta del usuario está activa, y finalmente, verificar si el usuario tiene permisos de acceso a un recurso específico.

// Descripción del Proceso:
// <b>Verificar Usuario:</b> Simula la búsqueda de un usuario en la base de datos.
// <b>Comprobar Cuenta Activa:</b> Verifica si la cuenta del usuario está activa.
// <b>Verificar Permisos:</b> Comprueba si el usuario tiene permisos para acceder a un recurso.
// Cada paso se simulará con una función que utiliza setTimeout para emular la asincronía, y cada función aceptará un callback para manejar el resultado de la operación.

// Explicación:
// El proceso comienza con la verificación de la existencia del usuario. Si el usuario no existe, el proceso termina.
// Si el usuario existe, se procede a verificar si su cuenta está activa. Si la cuenta no está activa, el proceso termina.

// Finalmente, si la cuenta está activa, se verifica si el usuario tiene permisos. Dependiendo del resultado, se concede o deniega el acceso.

const db = [
  {
    name: "ana",
    active: true,
    permissions: true,
  },
  {
    name: "luis",
    active: false,
    permissions: false,
  },
];

function verificarUsuario(usuario, callback) {
  setTimeout(() => {
    // Tu código
    const existe = db.filter((users) => users.name == usuario).length > 0;
    callback(existe);
  }, 1000);
}

function comprobarCuentaActiva(usuario, callback) {
  setTimeout(() => {
    // Simulamos que todas las cuentas excepto "luis" están activas
    const user = db.filter((users) => users.name == usuario)[0];
    const cuentaActiva = user.active;

    callback(cuentaActiva);
  }, 1000);
}

function verificarPermisos(usuario, callback) {
  setTimeout(() => {
    // Simulamos que solo "ana" tiene permisos
    const user = db.filter((users) => users.name == usuario)[0];
    const permissions = user.permissions;
    callback(permissions);
  }, 1000);
}

// Orquestación de las verificaciones
function procesoDeVerificacion(usuario) {
  console.log(`Iniciando verificación para el usuario: ${usuario}`);

  verificarUsuario(usuario, (existe) => {
    if (!existe) {
      return console.log("El usuario no existe.");
    }
    console.log("Usuario verificado exitosamente.");

    comprobarCuentaActiva(usuario, (activa) => {
      if (!activa) {
        return console.log("La cuenta del usuario no está activa.");
      }
      console.log("La cuenta del usuario está activa.");

      verificarPermisos(usuario, (permisos) => {
        if (!permisos) {
          return console.log("El usuario no tiene permisos.");
        }
        console.log("El usuario tiene permisos. Acceso concedido.");
      });
    });
  });
}

// Ejecución de la función con diferentes usuarios
// procesoDeVerificacion("ana"); // Usuario con acceso completo
// procesoDeVerificacion("luis"); // Usuario sin cuenta activa
procesoDeVerificacion("pedro"); // Usuario que no existe
