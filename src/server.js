import app from './app'
import env from './env'

const server = app.listen(env.API_PORT)

export default server
