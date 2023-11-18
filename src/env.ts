import { config } from 'dotenv'

config()

const configuration = {
  app: {
    url: process.env.app_url,
    port: process.env.app_port,
  }
}

export default configuration
