const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')
const cookiesParser = require('cookie-parser')

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(express.json());

app.use(cookiesParser());  // parse cookies from request headers

const PORT = process.env.PORT || 1996

app.get('/', (req, res) => {
    res.json({
        message : "Ajja meri janam"
    })
})

//api endpoints
app.use('/api', router)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server listening on port " + PORT);
    })
})

