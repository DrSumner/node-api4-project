require('dotenv').config()

const cors = require('cors')
const express = require('express')

console.log(process.env.PORT, process.env.NODE_ENV) 

const server = require('./api/server');
const port = process.env.PORT || 9000

server.use(express.json())
server.use(cors())

const userData = [
    {name: 'Bob', age:'20', id: 0},
    {name: 'John', age:'21', id: 1},
    {name: 'Jane', age:'19', id: 2},
]


server.listen(port, () => {
    console.log('listening on', port)
})

server.get('/api/test', (req, res) => {
    res.json({message:'the test works'})
})

server.get('/api/users', (req, res) => {
    res.json(userData)
})