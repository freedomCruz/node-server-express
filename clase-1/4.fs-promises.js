// Esto solo en los módulos nativos
// // que no tienen promesas nativas
// const{promisify} = require("node:util");
// const readFilePromise = promisify(fs.readFile);

const fs = require("node:fs/promises");

console.log("Leyendo el primer archivo...\n");
fs.readFile("./archivo.txt", "utf-8").then((texto) => {
  console.log("Primer texto:\n", texto);
});

console.log("-----> Hacer cosas mientras lee el archivo... \n");

console.log("Leyendo el segundo archivo... \n");
fs.readFile("./archivo2.txt", "utf-8").then((texto) => {
  console.log("Segundo texto:\n", texto);
});
