const express = require('express')

const { returnBase, createUsers,} = require('../controllers/usuario')

const router = express.Router()

router.get('/api/users', returnBase)
router.post('/api/users', createUsers)

module.exports = router