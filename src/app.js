require("dotenv-safe").config();
const express = require("express");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
const cors = require("cors");
const db = require('./database/mongoConfig');
const app = express()
db.connect()

app.use(express.json())
app.use(cors());

const idosoRotas = require('./routes/idosoRoutes')
const voluntarioRotas = require('./routes/voluntarioRoutes')
const index = require("./routes/indexRoutes");

app.use("/idoso", idosoRotas)
app.use("/voluntario", voluntarioRotas )
app.use("/", index);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;