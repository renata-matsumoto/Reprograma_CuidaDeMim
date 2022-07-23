require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const db = require('./database/mongoConfig');
const app = express()
db.connect()

app.use(express.json())
app.use(cors());

const idosoRotas = require('./routes/idosoRoutes')
const voluntarioRotas = require('./routes/voluntarioRoutes')
// const usuarioRotas = require("./routes/usuarioRoutes");
const index = require("./routes/indexRoutes");

app.use("/idoso", idosoRotas)
app.use("/voluntario", voluntarioRotas )
// app.use("/usuario", usuarioRotas)
app.use("/", index);
app.get("/terms", (req, res) => {
  return res.json({
      message: "Termos de Serviço"
  })
})
module.exports = app;