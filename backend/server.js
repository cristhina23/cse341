const express = require('express')
const app = express()
const mongodb = require('./db/connect');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



const PORT = process.env.PORT || 3000
app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(bodyParser.json())
  .use(cors());

app.use('/', require('./routes'));
app.use('/contacts', require('./routes/contacts'));




mongodb.initDb((err, db) => {
  if (err) {
    console.log(err)
  } else {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  }
})