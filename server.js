const express = require('express');
const app= express()

// C CREATE = POST
// R READ = GET
// U UPDATE = PUT
// D DELETE = DELETE


app.get("/", (req,res)=>{
    res.send("Deus e perfeito!")
})



app.listen(3000)