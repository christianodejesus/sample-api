import cors from '@koa/cors'
import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import mongoose from 'mongoose'
import env from '../env'
import routers from './routers'

class App {
  constructor () {
    this.app = new Koa()

    this.middlewares()
    this.database()
    this.routes()
  }

  middlewares () {
    // bodyparser middleware
    this.app.use(bodyparser())

    // Middleware to set header that enable CORS
    this.app.use(cors())

    // Middleware to handle exceptions
    this.app.use(async (ctx, next) => {
      try {
        await next()
      } catch (err) {
        ctx.status = 500
        ctx.body = { message: err.message }
      }
    })
  }

  routes () {
    // redirects routes from /* to /api/*
    this.app.use(async (ctx, next) => {
      if (ctx.url === '/') {
        ctx.redirect('/api')
      }

      await next()
    })

    // use the app routers
    this.app.use(routers.routes())
    this.app.use(routers.allowedMethods())
  }

  database () {
    const userStr = env.DB_USER !== undefined && env.DB_USER !== ''
      ? `${env.DB_USER}:${env.DB_PASS}@`
      : ''
    const portStr = env.DB_PORT !== undefined && env.DB_PORT > 0
      ? `:${env.DB_PORT}`
      : ''
    const connectionStr = `${env.DB_PROTOCOL}://${userStr}${env.DB_HOST}${portStr}/${env.DB_NAME}`

    mongoose.connect(connectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
}

export default new App().app
