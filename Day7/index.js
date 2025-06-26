// const express = require('express');
// const app = express()
// const httpChild = require('http')


// app.get('/', (req,res) => {
//     res.end("Hello From Express!!");
// })

// app.listen(3000, () =>{
//     console.log('Server running on http://localhost:3000')
// })

// const server = httpChild.createServer((req, res) => {
//     res.end("Hello from Express")
// })

// server.listen(3000, () =>{
//     console.log('Server running on http://localhost:3000')
// })

const express = require('express');
const axios = require('axios')
const app = express()

app.get('/',(req,res) =>{
    res.send("Hello from express")
})

app.get('/users', async(req,res) =>{
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ error:'Failed to fetch😭'})
    }
})

app.listen(3000, () =>{
    console.log('Server running on http://localhost:3000')
})