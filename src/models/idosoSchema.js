const mongoose = require("mongoose");

const idosoSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true, 
  },
  dataNascimento: {
    type: Date,
    required: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  genero: {
    type: String
  },

  situacao: String,

},{timestamps: true})

const Idoso = mongoose.model("idoso", idosoSchema);

module.exports = Idoso;