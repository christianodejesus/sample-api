import User from '../schemas/User'

class UserController {
  async index (ctx) {
    const users = await User.find()
    ctx.body = users

    return ctx
  }

  async create (ctx) {
    const { email, firstName, lastName } = ctx.request.body
    const user = await User.create({
      email, firstName, lastName
    })

    ctx.body = user
    return ctx
  }
}

export default new UserController()
