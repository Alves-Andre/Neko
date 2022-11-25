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
const getEstabelecimentos = require('./Scripts/getEsta.js')
const filtroCad = require('./Scripts/fitro.js');
const { get } = require("jquery");
const pesquisaEstabelecimentos = require("./Scripts/pesquisa.js")

app.use(session({secret: 'senha123'}))
app.use(bodyParser.urlencoded({extended:true}))

// Especificar local do CSS e da Imagem
app.use(express.static(__dirname+"/public"));


//teste login e senha

//config    '
    //Template Engine

    app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')




app.get('/index', async (req, res) => {
    if (!req.session.login){
        res.redirect('/')
    }else {
        nome = new String(resposta[0][1])
        var estabelecimentos = await getEstabelecimentos();
        res.render('logado', {estabelecimento: estabelecimentos, nome: nome})
    }

})
app.post('/index', async (req, res) => {
    if (req.body.search==undefined){
        req.session.login = null
        res.redirect('/')
    }else {
        var estabelecimentos = await pesquisaEstabelecimentos(req.body.search);
        var nome = req.session.login
        res.render('index', {estabelecimento: estabelecimentos, nome: nome})
    }
    
})

app.get('/login', (req,res)=> {
    if (req.session.login){
        res.redirect('index')
    }else{
        res.render('login')
    }
})
app.post('/login',async (req,res)=> {
    resposta = await log(req.body.login,req.body.password)
    if (typeof resposta != 'string'){
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
    result = verificar(req.body.tell, req.body.password, req.body.cpassword)
    if (result!=true){
        res.render('cadastro', {mensagem: result})
    }else{
        var result = await cadastrar(req.body.nome,req.body.tell, req.body.login, req.body.password);
        if (result==true) {
            res.render('cadastro', {resultado: "Cadastro realizado com sucesso!"})
        }
    }
});



app.get("/filtragem/:id", async function(req,res){
    var f = Number(req.params.id)
    var estabelecimentos = await filtroCad(f);
    res.render('index', {estabelecimento: estabelecimentos})
});

app.get("/index/filtragem/:id", async function(req,res){
    var f = Number(req.params.id)
    var estabelecimentos = await filtroCad(f);
    var nome = req.session.login
    res.render('logado', {estabelecimento: estabelecimentos, nome: nome})
});

app.get("/", async function(req,res){
    if (req.session.login){
        res.redirect('/index')
    }else{
        var estabelecimentos = await getEstabelecimentos()
        res.render('index', {estabelecimento: estabelecimentos})
    }
    
});

app.post("/", async function(req,res) {
    var estabelecimentos = await pesquisaEstabelecimentos(req.body.search);
    res.render('index', {estabelecimento: estabelecimentos})
})

app.post("/filtragem/:id", async function(req,res) {
    var estabelecimentos = await pesquisaEstabelecimentos(req.body.search);
    res.render('index', {estabelecimento: estabelecimentos})
})

app.post("/index/filtragem/:id", async function(req,res) {
    if (req.body.search==undefined){
        req.session.login = null
        res.redirect('/')
    }
    else{
        var estabelecimentos = await pesquisaEstabelecimentos(req.body.search);
        var nome = req.session.login
        res.render('logado', {estabelecimento: estabelecimentos, nome: nome})
    }
})

app.listen(port, function (){
    console.log("Servidor rodando na url: http://localhost:8081");
});