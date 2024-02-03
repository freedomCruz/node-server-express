import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.disable('x-powered-by')

app.use(json())
app.use(corsMiddleware())

const port = process.env.PORT ?? 1234

app.use('/movies', moviesRouter)

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})
