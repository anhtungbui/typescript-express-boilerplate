import 'dotenv/config'
import express from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello World from typescript-express-boilerplate Server')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
