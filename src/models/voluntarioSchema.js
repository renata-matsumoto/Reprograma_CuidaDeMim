const mongoose = require("mongoose");

const voluntarioSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nome:{
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true
  },
  dataNascimento: {
    type: Date,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  estadoCivil: String,
  genero: String,
  ajudaOferecida: {
    type: String
  },

  idoso: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "idoso"
  }

}, {timestamps: true})

const Voluntario = mongoose.model("voluntario", voluntarioSchema)

module.exports = Voluntario;