import { createServer } from './bootstrap'

createServer((config: any) => {
  console.log(`Server running on ${config.app.url}`)
})
