import express from 'express'
import path from 'path'

export const views = (app: express.Express) => {
  app.use('/static', express.static(__dirname + '../public'))
  // Se indica el motor del plantillas a utilizar
  app.set('view engine', 'pug')
  // Se indica el directorio donde se almacenarán las plantillas
  app.set('views', path.join(__dirname, '..', '..', 'app', 'views'))
}
