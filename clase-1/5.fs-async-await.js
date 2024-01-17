const { readFile } = require("node:fs/promises");

// IIFE - Immediately Invoked Function Expression
// Función que se llama así misma, y se ejecuta automáticamente.

(async () => {
  console.log("Leyendo el primer archivo...\n");
  const texto = await readFile("./archivo.txt", "utf-8");
  console.log("Primer texto:\n", texto);

  console.log("-----> Hacer cosas mientras lee el archivo... \n");

  console.log("Leyendo el segundo archivo... \n");
  const texto2 = await readFile("./archivo2.txt", "utf-8");
  console.log("Segundo texto:\n", texto2);
})();
