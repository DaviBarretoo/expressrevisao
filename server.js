const express = require('express');
const app= express()

// C CREATE = POST
// R READ = GET
// U UPDATE = PUT
// D DELETE = DELETE


app.get("/Deus",(req,res)=>{
    // Requesição pro que o usuario fez
    res.send("<b>Deus é perfeito<b>")
})

app.get('/',(req,res)=>{
    res.send(`
        Deus é perfeito ! 🦁
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
       </form>
        
        `)
})

app.post('/',(req,res)=>{
    res.send(`Recebi o formulário`);
})

// Escutando a porta : 
app.listen(3000,() =>{
<<<<<<< HEAD
    console.log("🦁SERVIDOR EXECUTANDO NA PORTA 3000 http://127.0.0.1:3000/")
});
=======
    console.log("🦁🦁SERVIDOR EXECUTANDO NA PORTA 3000 http://127.0.0.1:3000/")
})

//parei aula 131
>>>>>>> 09475079eb522246eb5987a19897f74d73ed1e12
