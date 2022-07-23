const Idoso = require('../models/idosoSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const loginIdoso = (req, res) => {

  try {
    Idoso.findOne({cpf: req.body.cpf}, (error, idoso) => {
      console.log("Idoso" , idoso) 

      if(!idoso) {
        return res.status(401).send({
          message: "Idoso não encontrado", 
          cpf: `${req.body.cpf}`
        })
      }

      const validPassword = bcrypt.compareSync(req.body.password, idoso.password);

      console.log("A senha é válida?", validPassword)

      if(!validPassword) {
        return res.status(401).send({
          "message": "Login não autorizado",
          "statusCode": 401
        })
      }

      const token = jwt.sign({nome: idoso.nome}, SECRET);
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
  loginIdoso
}
