const express = require('express');
const router = express.Router();
const idosoController = require('../controller/idosoController')
const authIdosoController = require('../controller/authIdosoController')


router.post("/cadastrar", idosoController.cadastrarIdoso)

router.post("/loginIdoso", authIdosoController.loginIdoso)

router.get("/listar", idosoController.listarIdosos)

router.get("/listar/:id", idosoController.listarIdosoPorId)

router.put("/atualizar/:id", idosoController.atualizarIdosoPorId)

router.delete("/deletar/:id", idosoController.deletarIdosoPorId)

module.exports = router;