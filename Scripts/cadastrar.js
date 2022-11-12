var cadastrarCliente = async function  (nome,numero,email,senha){
    const Client = require('pg').Client;
    const cliente = new Client({
        user: "postgres",
        password: "#",
        host: "127.0.0.1",
        port: 5432,
        database: "Neko"})
    try {
        
        console.log("Iniciando a conexão.")
        await cliente.connect()
        console.log("Conexão bem sucedida!")
        const sql =  "INSERT INTO clientes (nome, telefone, email, senha) VALUES ($1, $2, $3, $4)"
        const values = [nome, numero, email, senha]
        const resultado = await cliente.query(sql, values)
        //console.table(resultado.rows)
        return true
    }
    catch (ex){
        console.log("Ocorreu erro ao tentar cadastrar. Erro: "+ ex)
    }
    finally{
        await cliente.end()
        console.log("Cliente desconectado.")
    }
}
module.exports = cadastrarCliente 