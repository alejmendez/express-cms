import { BaseController } from './base';
import { Context } from '../../helpers';

export class WebController extends BaseController {
  constructor() {
    super()
  }

  index({ response }: Context) {
    response.render('index.pug', { mensaje: 'Usando Pug JS en Express' })
  }
}
