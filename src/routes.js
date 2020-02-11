import Router from '@koa/router'
import UserController from './controllers/UserController'

const router = new Router({ prefix: '/api' })

router.get('/', ctx => {
  ctx.body = {
    name: 'Api',
    version: process.env.API_VERSION || '1.0.0',
    description: 'Rest API'
  }
})

router.get('/users', UserController.index)
router.post('/users', UserController.create)

export default router
