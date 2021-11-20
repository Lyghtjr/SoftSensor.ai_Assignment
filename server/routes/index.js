const router = require('express').Router()
const getAllProducts = require('../controllers/index')

router.get("/", getAllProducts)

module.exports = router;