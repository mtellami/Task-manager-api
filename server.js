const express = require('express')
require('dotenv').config()
require('./src/db/mongoose')

const userRouter = require("./src/api/routes/user")

const app = express()
const port = process.env.PORT || 3000

// app.use(express.json())
app.use(userRouter)

app.listen(port, () => console.log(`server is running on port ${port}`))
