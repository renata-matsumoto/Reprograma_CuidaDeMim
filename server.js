const app = require('./src/app');
const PORT = process.env.PORT;



app.listen(PORT, () => console.log(`Estou aqui na porta ${PORT}`) )