const fs = require("node:fs");

/* Es un ejemplo de asincronia. Empieza al leer el primer archivo
mientras tanto sigue con la siguiente línes de código,
termina del leer el primer archivo lo muestra y finalmente muestra
el contenido de archivo2.txt. */

console.log("Leyendo el primer archivo...\n");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log("Primer texto:\n", text);
});

console.log("-----> Hacer cosas mientras lee el archivo... \n");

console.log("Leyendo el segundo archivo... \n");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log("Segundo texto:\n", text);
});
