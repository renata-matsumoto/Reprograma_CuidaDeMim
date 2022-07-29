
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

exports.checkAuth = (req, res, next) => {
  const authHeader = req.get('authorization')
  console.log("Auth Header", authHeader)
  const tokeon = authHeader.split(' ')[1];
  console.log("TOKEN", token)

  if (!token) {
    return res.status(401).send("Erro no header")
  }

  try {
    jwt.verify(token, SECRET, (error) => {
      if(error) {
        return res.status(401).send("Login não autorizado")
      }
    });

    next();

  } catch (error) {
    console.error(error);
  }
}