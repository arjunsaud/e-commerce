const express = require('express');
const routes = require('../router/Router');
const app = express();
const cors=require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api/',routes)

module.exports = app