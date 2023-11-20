import bodyParser from 'body-parser';
import express from 'express'
import helmet from 'helmet';
import { logger } from './logger';
import { views } from './views';

export const plugins = (app: express.Express) => {
  app.use(express.urlencoded({ extended: false }))
  // app.use(express.json())
  app.use(bodyParser.json())
  app.use(helmet())

  logger(app)
  views(app)
}
