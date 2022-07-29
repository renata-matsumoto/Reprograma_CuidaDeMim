const Voluntario = require("../models/voluntarioSchema")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET


const cadastrarVoluntario = async (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashPassword;

  try {
    const { nome, email, endereco, dataNascimento, cpf, estadoCivil, genero, ajudaOferecida, idoso, password } = req.body;

    const novoVoluntario = new Voluntario({
      nome,
      email,
      endereco, 
      dataNascimento,
      cpf,
      estadoCivil,
      genero,
      ajudaOferecida,
      idoso,
      password

  })

    const voluntarioExiste = await Voluntario.findOne({cpf: req.body.cpf})
    if(voluntarioExiste) {
      return res.status(418).json ({
        error: "CPF já cadastrado."
      })
    }

    const salvarVoluntario = await novoVoluntario.save();
    res.status(201).json({
      message: "Voluntario cadastrado com sucesso.",
      salvarVoluntario
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
} 

const listarVoluntarios = async (req, res) => {
  try {
    const voluntario = await Voluntario.find().populate("idoso");
    res.status(200).json({
      message: "Lista de Voluntários",
      voluntario
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const listarVoluntariosPorId = async (req, res) => {
  try {
    const voluntario = await Voluntario.findById(req.params.id).populate("idoso")

    if(!voluntario) {
      return res.status(404).json({message: "Cadastro não encontrado."})
    }

    res.status(200).json({
      message: "Voluntário:",
      voluntario
    })

  } catch (error) {
    res.status(500).json({
    message: error.message
  })
}
}

const atualizarVoluntarioPorId = async (req, res) => {
  try {
    const { nome, endereco, cpf, ajudaOferecida, idoso, password } = req.body;

    const voluntario = await Voluntario.findById(req.params.id).populate("idoso");

    if(!voluntario) {
      return res.status(404).json({message: "Cadastro não encontrado."})
    }

    voluntario.nome = nome || voluntario.nome
    voluntario.endereco = endereco || voluntario.endereco
    voluntario.cpf = cpf || voluntario.cpf
    voluntario.ajudaOferecida = ajudaOferecida || voluntario.ajudaOferecida
    voluntario.idoso = idoso || voluntario.idoso
    voluntario.password = password || voluntario.password

    const atualizarVoluntario = await voluntario.save();

    res.status(200).json({
      message: "Cadastro atualizado com sucesso!",
      atualizarVoluntario
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deletarVoluntarioPorId = async (req, res) => {
  try {
    const voluntario = await Voluntario.findById(req.params.id).populate("idoso")

    if(!voluntario){
      return res.status(404).json({message: "Cadastro não encontrado."})
    }

   const deletarVoluntario = await voluntario.delete();
    res.status(200).json({
      message: "Cadastro deletado com sucesso.",
    deletarVoluntario
  })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  cadastrarVoluntario,
  listarVoluntarios,
  listarVoluntariosPorId,
  atualizarVoluntarioPorId,
  deletarVoluntarioPorId
}