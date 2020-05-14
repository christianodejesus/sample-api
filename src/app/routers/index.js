import Router from '@koa/router'
import { readdirSync } from 'fs'
import { basename, join } from 'path'

const mainRouter = new Router({ prefix: '/api' })

mainRouter.get('/', ctx => {
  ctx.body = {
    name: 'Sample Rest API Project',
    version: process.env.API_VERSION || '1.0.0'
  }
})

// import all *Router.js files in the directory
readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 &&
      file !== basename(__filename) &&
      file.slice(-9) === 'Router.js'
  )
  .forEach(async file => {
    const module = await require(join(__dirname, file))
    const childRouter = module.default
    mainRouter.use(childRouter.routes(), childRouter.allowedMethods())
  })

export default mainRouter
