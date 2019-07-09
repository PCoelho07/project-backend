const express = require('express')

const ToolsController = require('./controllers/toolsController')

const router = express.Router()

router.get('/tools', ToolsController.index)
router.post('/tools', ToolsController.store)
router.delete('/tools/:toolsId', ToolsController.delete)



module.exports = router
