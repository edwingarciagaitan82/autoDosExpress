const express = require('express')
const app = express()
const puerto = 3001
app.get("/", (req,res) =>{
    res.send("Hola Mundo")
} )
app.get("/nombre", (req,res) =>{
    res.send("Talento Tech")
})
app.listen(puerto, ()=>{ console.log("servidor express en puerto " , puerto)  } )