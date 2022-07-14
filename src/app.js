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


app.use("/idoso", idosoRotas)
app.use("/voluntario", voluntarioRotas )

module.exports = app;