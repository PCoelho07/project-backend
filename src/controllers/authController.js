
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('../models/users')


exports.login = async (req, res) => {

  const { username, password } = req.body

  const user = await Users.findOne({ username })

  if (!user) {
    return res
      .json({
        auth: false,
        message: "Email or password invalid!"
      })
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    return res
      .json({
        auth: false,
        message: "Email or password invalid!"
      })
  }

  user.password = undefined

  const token = jwt.sign({ userId: user._id }, 'test', { expiresIn: '5 days' })

  return res.json({
    auth: true,
    token,
    user
  })
}


exports.create = async (req, res) => {

  const { username, password } = req.body

  const userCheck = await Users.findOne({ username })

  if (userCheck) {
    return res
      .status(422)
      .json({
        message: "Username must be unique!"
      })
  }

  const user = await Users.create({
    username,
    password: bcrypt.hashSync(password, 10)
  })

  return res
    .json({
      user
    })
}
