const express = require('express')
const cors = require('cors')

require('dotenv-safe').config() 
const db = require('./database/mongoConfig')

const app = express()

app.use(cors())
app.use(express.json())


db.connect() 

module.exports = app
