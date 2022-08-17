const Router = require('express')
const ApartmentController = require('../controller/Apartment')
const router = new Router()

router.post('/config', ApartmentController.addPara)
router.post('/', ApartmentController.addApar)
router.get('/', ApartmentController.get)
router.get('/city', ApartmentController.getCity)
router.get('/area/:city', ApartmentController.getArea)
router.get('/metro/:city', ApartmentController.getMetro)
router.post('/auto', ApartmentController.addAuto)

module.exports = router
