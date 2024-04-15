require('dotenv').config();
const express = require('express')

const app = express()
const port = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('iamdebesh391');
})

app.get('/facebook', (req, res) => {
  res.send('<h2>Debesh Halder(Dipu)</h2>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

