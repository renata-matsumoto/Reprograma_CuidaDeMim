const express = require('express');
const router = express.Router();
const voluntarioController = require('../controller/voluntarioController')

router.post("/cadastrar", voluntarioController.cadastrarVoluntario)


module.exports = router;