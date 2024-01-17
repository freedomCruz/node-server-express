import { lectura } from 'node:fs/promises'

Promise.all([
    lectura('./archivo.txt', 'utf-8'),
    lectura('./archivo2.txt', 'utf-8'),
]).then(([text, secondText]) => {
    console.log('Primer texto: ', text)
    console.log('Segundo texto: ', secondText)
})





