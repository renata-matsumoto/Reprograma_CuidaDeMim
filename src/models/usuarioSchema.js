const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
}, {timestamps: true})

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario;


