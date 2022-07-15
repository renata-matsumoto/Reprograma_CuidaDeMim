const express = require('express');
const router = express.Router();
const voluntarioController = require('../controller/voluntarioController')

router.post("/cadastrar", voluntarioController.cadastrarVoluntario)

router.get("/listar", voluntarioController.listarVoluntarios)

router.get("/listar/:id", voluntarioController.listarVoluntariosPorId)

router.put("/atualizar/:id", voluntarioController.atualizarVoluntarioPorId)

router.delete("/delete/:id", voluntarioController.deletarVoluntarioPorId)

module.exports = router;