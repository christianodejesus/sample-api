import { config } from 'dotenv'
import { existsSync } from 'fs'
import { resolve } from 'path'

const resolveEnv = () => {
  if (process.env === 'test') {
    return '.env.test'
  } else {
    if (existsSync(resolve('.env.dev'))) {
      return '.env.dev'
    } else {
      return '.env'
    }
  }
}

config({ path: resolveEnv() })

export default process.env
