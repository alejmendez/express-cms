import express from 'express'

export interface Context {
  request: express.Request,
  response: express.Response,
  params: any,
}

export const getContext = (request: express.Request, response: express.Response): Context => {
  const params = request.params
  return {
    request,
    response,
    params,
  }
}
