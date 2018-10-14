const express = require('express')
const app = express()

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.'
  })
)

const PORT = process.env.PORT || 5000
app.listen(PORT)
