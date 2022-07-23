const Voluntario = require('../models/voluntarioSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const loginVoluntario = (req, res) => {

  try {
    Voluntario.findOne({cpf: req.body.cpf}, (error, voluntario) => {
      console.log("Voluntário" , voluntario) 

      if(!voluntario) {
        return res.status(401).send({
          message: "Voluntario não encontrado", 
          cpf: `${req.body.cpf}`
        })
      }

      const validPassword = bcrypt.compareSync(req.body.password, voluntario.password);

      console.log("A senha é válida?", validPassword)

      if(!validPassword) {
        return res.status(401).send({
          "message": "Login não autorizado",
          "statusCode": 401
        })
      }

      const token = jwt.sign({nome: voluntario.nome}, SECRET);
      console.log("Token Criado", token);

      res.status(200).send({
        "message": "Login autorizado",
        token
      });
    })
  } catch (error) {
    console.error(error)
  }
};

module.exports = {
  loginVoluntario
}
