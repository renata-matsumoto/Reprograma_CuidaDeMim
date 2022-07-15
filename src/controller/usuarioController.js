const Usuario = require("../models/usuarioSchema");
const hashPassword = requerie("../helpers/hashPassword.js")

const cadastrarUsuario = async (req, res) =>{
  try {
    const {email, password} = req.body;

    const novoUsuario = new Usuario({
      email,
      password
    })

    const passwordHashed = await hashPassword(novoUsuario.password, res);
    novoUsuario.password = passwordHashed;

    const usuario = await Usuario.findOne({email: req.body.email})

    if(usuario) {
      return res.status(400).json({
        message: "Usuário já cadastrado no sistema."
      })
    }

    const salvarUsuario = await novoUsuario.save();

    res.status(201).json({
      message: "Cadastro efetuado com sucesso!",
      salvarUsuario
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}