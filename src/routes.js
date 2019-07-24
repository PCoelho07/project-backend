const express = require('express')

const ToolsController = require('./controllers/toolsController')
const AuthController = require('./controllers/authController')
const { authMiddleware } = require('./middleware')

const router = express.Router()

router.get('/tools', authMiddleware, ToolsController.index)
router.post('/tools', authMiddleware, ToolsController.store)
router.delete('/tools/:toolsId', ToolsController.delete, authMiddleware, authMiddleware)


router.post('/auth/signin', AuthController.login)
router.post('/auth/signup', AuthController.create)



module.exports = router
