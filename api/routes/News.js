const Router = require('express')
const NewsController = require('../controller/News')
const router = new Router()

router.post('/', NewsController.add)
router.get('/item/:id', NewsController.getById)
router.get('/', NewsController.getAll)
router.get('/rand/', NewsController.getThree)

module.exports = router
