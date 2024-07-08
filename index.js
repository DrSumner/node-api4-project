require('dotenv').config()

const cors = require('cors')
const express = require('express')

console.log(process.env.PORT, process.env.NODE_ENV) 

const server = require('./api/server');
const port = process.env.PORT || 9000

server.use(express.json())
server.use(cors())

server.listen(port, () => {
    console.log('listening on', port)
})

server.get('/api/test', (req, res) => {
    res.json({message:'dsasd'})
})