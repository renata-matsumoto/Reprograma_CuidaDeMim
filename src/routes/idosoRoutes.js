const express = require('express');
const router = express.Router();
const idosoController = require('../controller/idosoController')


router.post("/cadastrar", idosoController.cadastrarIdoso)

router.get("/listar", idosoController.listarIdosos)

router.get("/listar/:id", idosoController.listarIdosoPorId)

router.put("/atualizar/:id", idosoController.atualizarIdosoPorId)

router.delete("/deletar/:id", idosoController.deletarIdosoPorId)

module.exports = router;