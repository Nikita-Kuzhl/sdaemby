const Router = require('express')
const UserController = require('../controller/User')
const router = new Router()

router.post('/signin', UserController.signin)
router.post('/signup', UserController.signup)
router.get('/', UserController.getInfo)
module.exports = router
