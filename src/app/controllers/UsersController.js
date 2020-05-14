import User from '../schemas/User'

class UsersController {
  async index (ctx) {
    const users = await User.find()
    ctx.body = users
  }

  async create (ctx) {
    const { name, email, password } = ctx.request.body
    const user = await User.create({
      name, email, password
    })

    ctx.body = user
  }
}

export default new UsersController()
