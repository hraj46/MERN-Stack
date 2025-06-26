// createFile
// appendFile
// readFile
// renameFile
// unlinkFile

//! createFile
// const fs = require('node:fs');
// const greet = require('./greet');
// console.log(greet("Chacha"));

// fs.writeFile("Hello.txt", "HELLO HOW ARE YOU???", function (err){
//     if (err) console.log("Error : ", err)
//         else console.log("Done!!")
// })

//! appendFile
// fs.writeFile("Hello.txt", "\n ASI CHANGE TUC DASO !", function (err){
//     if (err) console.log("Error : ", err)
//         else console.log("Done!!")
// })

//! renameFile
// fs.rename('Hello.txt', 'Hi.txt', function (err){
//     if (err) console.log("Error : ", err)
//         else console.log('Rename complete!')
// });

//! unlinkFile
// fs.unlink('D:/MERN Stack/Hi.txt', function (err){
//     if (err) console.log("Error : ", err)
//         else console.log('Hi.txt was deleted')
// });

//! readFile
// fs.readFile("Hello.txt", "utf-8", (err, data) => {
//     if(err) console.log("Error: ", err)
//         else console.log("See Here buddy!!", data)
// }) 
//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000)
//-----------------------------------------------------------------------------

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
//-----------------------------------------------------------------------------

const express = require("express");
const app = express();

app.use(express.static('public'));

app.use((req, res, next)=>{  //It is a middleware
    console.log("HAHAHAHA")
    next();
})

// app.get(Router, routeMiddleware, callback);
app.get("/", (req, res)=>{
    res.send("Huiiiiiiiiii");
});
//-----------------------------------------------------------------------

app.get("/about", (req, res)=>{
    res.send("This is about page");
});
app.listen(3000);

// Middleware : Function that runs before the request response
