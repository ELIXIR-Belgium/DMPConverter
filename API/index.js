const data = require("./config/data")
const cors = require("cors")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const Router = require("./routes")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/', Router)


app.listen(3000, () => {
    console.log("Server started!")
})