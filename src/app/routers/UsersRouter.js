import Router from '@koa/router'
import UsersController from '../controllers/UsersController'

const usersRouter = new Router({ prefix: '/users' })

usersRouter.get('/', UsersController.index)
usersRouter.post('/', UsersController.create)

export default usersRouter
