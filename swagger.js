const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/idosoRoutes.js', './src/routes/voluntarioRoutes.js']


swaggerAutogen(outputFile, endpointsFiles)