const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("¡Bienvenido!");

// Elemento de secuencia: Preguntar la edad
rl.question("Por favor, introduce tu edad: ", function (input) {
  const edad = parseInt(input);

  // Elemento de selección (if-else): Determinar si eres mayor o menor de edad
  if (edad >= 18) {
    console.log("Eres mayor de edad.");
  } else {
    console.log("Eres menor de edad.");
  }

  // Elemento de secuencia: Realizar acción iterativa
  rl.question("¿Te gustaría realizar una acción iterativa? (Sí/No): ", function (respuesta) {
    // Elemento de iteración (while): Realizar acción iterativa si la respuesta es "Sí"
    while (respuesta.toLowerCase() === "sí") {
      console.log("Realizando acción iterativa...");

      // Elemento de secuencia: Incrementar la edad para el próximo ciclo
      edad++;

      // Elemento de selección (if): Mostrar mensaje específico si la edad es un número par
      if (edad % 2 === 0) {
        console.log(`Tu edad incrementada (${edad}) es un número par.`);
      }

      rl.question("¿Te gustaría realizar otra acción iterativa? (Sí/No): ", function (nuevaRespuesta) {
        respuesta = nuevaRespuesta;
      });
    }

    console.log("Fin del programa. ¡Hasta luego!");
    rl.close();
  });
});
