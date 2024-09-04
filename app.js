const express = require('express')
const app = express()
app.get("/", (req,res) =>{
    res.send("Hola Mundo")
} )
app.get("/nombre", (req,res) =>{
    res.send("Talento Tech")
})
app.listen(3000, ()=>{ console.log("servidor express en puerto 3000")  } )