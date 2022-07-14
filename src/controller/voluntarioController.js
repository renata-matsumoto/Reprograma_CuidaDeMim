const Voluntario = require("../models/voluntarioSchema")

const cadastrarVoluntario = async (req, res) => {
  try {
    const { nome, endereco, dataNascimento, cpf, estadoCivil, genero, ajudaOferecida, idoso } = req.body;

    const novoVoluntario = new Voluntario({
      nome,
      endereco, 
      dataNascimento,
      cpf,
      estadoCivil,
      genero,
      ajudaOferecida,
      idoso
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

module.exports = {
  cadastrarVoluntario
}