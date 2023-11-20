import express from 'express'
import config from './env'
import { plugins } from './plugins'
import { routes } from '../app/routes'

export const createServer = (cb: Function) => {
  const app = express()

  plugins(app)
  routes(app)

  app.listen(config.app.port, cb(config))
}
