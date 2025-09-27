const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'My Contacts API documentation',
  },
  host: 'cse341-stnx.onrender.com/',   
  schemes: ['https'],        
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js', './server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
