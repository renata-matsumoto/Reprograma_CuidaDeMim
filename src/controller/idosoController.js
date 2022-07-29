const Idoso = require("../models/idosoSchema");
const bcrypt = require('bcrypt');
const { hashPassword } = require('../helpers/hashPassword')

//CRUD

const cadastrarIdoso = async (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashPassword;
  try {
    const { nome, endereco, dataNascimento, cpf, genero, situacao, password } = req.body;

    const novoIdoso = new Idoso({
      nome,
      endereco,
      dataNascimento,
      cpf,
      genero,
      situacao,
      password

    });

    const idosoExiste = await Idoso.findOne({ cpf: req.body.cpf });
    if (idosoExiste) {
      return res.status(418).json({
        error: "CPF já cadastrado.",
      });
    }

    const salvarIdoso = await novoIdoso.save();
    res.status(201).json({
      message: "Idoso cadastrado com sucesso.",
      salvarIdoso,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const listarIdosos = async (req, res) => {
  try {
    const idosos = await Idoso.find();
    res.status(200).json({
      message: "Lista de Idosos",
      idosos,
    });

    if (idosos.length == 0) {
      return res.status(404).json({
        message: "Nenhum idoso foi encontrado.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const listarIdosoPorId = async (req, res) => {
  try {
    const idoso = await Idoso.findById(req.params.id)

    if(!idoso) {
      return res.status(404),json({
        message: "Cadastro não encontrado."
      })
    }

    res.status(200).json({
      message: "Idoso:",
      idoso
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
  })
}
}

const atualizarIdosoPorId = async (req, res) =>{
  try {
    const { nome, endereco, dataNascimento, cpf, genero, situacao, password } = req.body;
    const idoso = await Idoso.findById(req.params.id);

    if(!idoso) {
      return res.status(404),json({
        message: "Cadastro não encontrado."
      })
    }

    idoso.nome = nome || idoso.nome 
    idoso.endereco = endereco || idoso.endereco
    idoso.cpq = cpf || idoso.cpf
    idoso.situacao = situacao || idoso.situacao
    idoso.password = password || idoso.password


    const atualizarIdoso = await idoso.save();
    res.status(200).json({
      message: "Cadastro atualizado com sucesso.",
      atualizarIdoso
    })


  } catch (error) {
    res.status(500).json({
      message: error.message
  })
  }
}


const deletarIdosoPorId = async (req, res) => {
  try {
    const idoso = await Idoso.findById(req.params.id);

    if(!idoso) {
      return res.status(404).json ({
        message: "Cadastro não encontrado."
      })
    }

    const deletarIdoso = await idoso.delete();
    res.status(200).json({
      message: "Cadastro deletado com sucesso.",
      deletarIdoso
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
  })
  }
}
module.exports = {
  cadastrarIdoso,
  listarIdosos,
  listarIdosoPorId,
  atualizarIdosoPorId,
  deletarIdosoPorId
};
