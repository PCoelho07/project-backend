
const jwt = require('jsonwebtoken')

exports.isAuthenticated = (token) => {

  try {

    const decodedToken = jwt.verify(token, 'test')

    return decodedToken

  } catch (error) {
    console.log(error)
    return null
  }

}
