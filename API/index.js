#!/usr/bin/env node
const path = require('path')
const cors = require("cors")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const Router = require("./routes")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/', Router)
app.use(express.static(`${__dirname}/build`));
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'build/index.html')) })
app.listen(3003, () => {
    console.log("Server started!")
})