const http = require('node:http') // protoco
const fs = require('node:fs') // filesystem

console.log(process.env)

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200
    res.end('Bienvenidos a mi servidor de William Rodríguez Cruz.')
  } else if (req.url === '/about') {
    res.statusCode = 200
    res.end('Esta es la página de about')
  } else if (req.url === '/mi-imagen-fullhd.webp') {
    res.setHeader('Content-Type', 'image/webp')

    fs.readFile('./DrNefario.webp', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>Error al leer la imagen<h1>')
      } else {
        res.statusCode = 200
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404
    res.end('Página no encontrada')
  }
}
const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
