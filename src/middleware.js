
const { isAuthenticated } = require('./services/auth')


authMiddleware = (req, res, next) => {
  let token = null
  if ('authorization' in req.headers) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (isAuthenticated(token) === null) {
    return res
      .status(400)
      .json({
        message: "Must be authenticated"
      })
  }

  next()
}


module.exports = {
  authMiddleware
}
