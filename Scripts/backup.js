const Client = require('pg').Client;
const cliente = new Client({
    user: "postgres",
    password: "#",
    host: "127.0.0.1",
    port: 5432,
    database: "Neko"
})

async function getBarbeiros (){
try {
    
    console.log("Iniciando a conexão.")
    await cliente.connect()
    console.log("Conexão bem sucedida!")
    const resultado = await cliente.query("select * from barbeiro")
    console.table(resultado.rows)
}
catch (ex){
    console.log("Ocorreu erro no getBarbeiros. Erro: "+ ex)
}
finally{
    await cliente.end()
    console.log("Cliente desconectado.")
}
}

