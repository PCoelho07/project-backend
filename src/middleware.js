
const { isAuthenticated } = require('./services/auth')


authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  if (isAuthenticated(token) === null) {
    return res
      .status(400)
      .json({
        message: "Token not provided"
      })
  }

  next()
}


module.exports = {
  authMiddleware
}
