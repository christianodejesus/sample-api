import cors from '@koa/cors'
import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import mongoose from 'mongoose'
import env from './env'
import router from './routes'

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
  }

  routes () {
    // redirects routes from /* to /api/*
    this.app.use(async (ctx, next) => {
      if (ctx.url === '/') {
        ctx.redirect('/api')
      }

      await next()
    })

    // use the app routes
    this.app.use(router.routes())
    this.app.use(router.allowedMethods())
  }

  database () {
    mongoose.connect(`mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
}

export default new App().app
