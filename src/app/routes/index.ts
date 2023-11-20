import express from 'express'

// helpers
import { getContext } from '../../helpers/context'

// controllers
import { WebController } from '../controllers/web'

export const routes = (app: express.Express) => {
  const webController = new WebController()
  app.get('/', (req, res) => webController.index(getContext(req, res)))
}
