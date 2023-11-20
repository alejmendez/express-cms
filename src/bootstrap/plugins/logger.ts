import * as express from 'express';

export const logger = (app: express.Express) => {
  app.use((req: express.Request, _res: express.Response, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}
