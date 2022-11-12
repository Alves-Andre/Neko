const express = require("express");
const handlebars = require('express-handlebars');
const port = 8081;
const session = require('express-session');
var path = require('path');
const app = express();
const bodyParser = require('body-parser')
var log = require('./Scripts/logar')
const verificar = require('./Scripts/verificar')
const cadastrar = require('./Scripts/cadastrar');
const { type } = require("os");

app.use(session({secret: 'senha123'}))
app.use(bodyParser.urlencoded({extended:true}))

// Especificar local do CSS e das Imagens
app.use(express.static(__dirname+"/public"));


//config    '
    //Template Engine

    app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')




app.get('/index', (req, res) => {
    if (!req.session.login){
        res.redirect('/')
    }else {
        var nome = new String(resposta[0][1])
        res.render('logado', {nome: nome})
    }
    
})
app.post('/index', (req, res) => {
    req.session.login = null
    res.redirect('/')
})

app.get('/login', (req,res)=> {
    if (req.session.login){
        res.redirect('index')
        //res.render('logado', {nome: nome})
        //res.send("Usuario: "+resposta[1])

    }else{
        res.render('login')
    }
})
app.post('/login',async (req,res)=> {
    resposta = await log(req.body.login,req.body.password)
    //console.log(resposta)
    if (typeof resposta != 'string'){
        console.log('Logado com sucesso! Bem vindo '+resposta[0][1])
        req.session.login = resposta[0][1]
        res.redirect('login')
    }else{
        res.render('login', {resultado: resposta})
    }
})


app.get('/cadastro', (req,res) => {
    res.render('cadastro')
})

app.post('/cadastro', async (req, res) => {
    var result = await verificar(req.body.tell, req.body.password, req.body.cpassword);
    //console.log('Resultado do resut : '+result)
    if (result!=true){
        res.render('cadastro', {mensagem: result})
    }else{
        var responta = await cadastrar(req.body.nome,req.body.tell, req.body.login, req.body.password);
        if (responta==true) {
            res.render('cadastro', {mensagem: "Cadastro realizado com sucesso!"})
        }
    }
})














app.get("/", function(req,res){
    if (req.session.login){
        res.redirect('/index')
    }else {
        res.render('index')
    }
    
});

app.use(function (req, res, next) {
    res.status(404).send("Sinto muito, essa página está indisponível ou não existe!")
})

app.listen(port, function (){
    console.log("Servidor rodando na url: http://localhost:8081");
});