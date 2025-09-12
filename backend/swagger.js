const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'My Contacts API documentation',
  },
  host: 'localhost:3000',   // keep only localhost
  schemes: ['http'],        // remove https for local dev
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js', './server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
