import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
  email: String,
  password: String
}, { timestamps: true })

// UserSchema.methods.fullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

export default model('User', UserSchema)
