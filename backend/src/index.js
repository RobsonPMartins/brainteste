const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const PORT = 3000
const SECRET_KEY = 'superSecreta'

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello Server!!!")
})


app.post('/login', (req, res) => {
    
    // Simulação
    const simulacaoDados = {
        email: "robson.p.martins2020@brainteste.com.br",
        senha: "brainteste"
    }

    const {email, senha} = req.body;

    // Imprimir no terminal os dados de email e senha recebidos
    console.log(`Dados recebidos ${email}, e senha: ${senha}`);
    
    // Se o usuário tentar enviar campo vazio retorna abaixo "Email e senha obrigatório!"
    if (!email || !senha) {
        return res.status(400).json({sucesso: false, mensagem: "Email e senha obrigatório!"})
    }
    // Se email e senha estiver igual a simulacaoDados = sucesso! e gera o token
    if (email === simulacaoDados.email && senha === simulacaoDados.senha) {

        const token = jwt.sign({email, senha}, SECRET_KEY, { expiresIn: '1h'} )

        return res.status(200).json({ sucesso: true, token })
    }
    // Negar a entrada ou os dados não bater
    res.status(400).json({ sucesso: false, mensagem: "Usuário não autorizado!!!" })
})

app.listen(PORT, () => {
    console.log(`Serivor rodando no http://localhost:${PORT}`);
})