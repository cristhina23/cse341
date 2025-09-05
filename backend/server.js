const express = require('express')
const app = express()
const mongodb = require('./db/connect')


const PORT = process.env.PORT || 3000

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