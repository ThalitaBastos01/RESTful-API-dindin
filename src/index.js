const express = require('express')
const config = require('./config')
const rotas = require('./rotas')

const app = express()

app.use(express.json())
app.use(rotas)

app.listen(config.serverPort)