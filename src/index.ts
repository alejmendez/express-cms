import express from 'express'
import config from './env'

const app = express()
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('hola mundo')
})

app.listen(config.app.port, () => {
  console.log(`Server running on port ${config.app.port}`)
})
