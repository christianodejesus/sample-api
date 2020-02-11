import User from '../schemas/User'

class UserController {
  async index (ctx) {
    const users = await User.find()
    ctx.body = users

    return ctx
  }

  async create (ctx) {
    const { name, email, password } = ctx.request.body
    const user = await User.create({
      name, email, password
    })

    ctx.body = user
    return ctx
  }
}

export default new UserController()
