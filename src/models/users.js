const mongooose = require('mongoose')


const UsersSchema = new mongooose.Schema({
  username: String,
  password: String
}, {
    timestamps: true
  })


module.exports = mongooose.model('Users', UsersSchema)
