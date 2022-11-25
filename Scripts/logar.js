const { response } = require('express');
async function logar (email,senha) {
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
        console.log("Conexão com banco de dados bem sucedida!")
        const sql =  "SELECT id,nome,email,senha FROM clientes"
        const resultado = await cliente.query({rowMode: 'array', text: sql})
        var resposta = resultado.rows
        //console.log(resposta)
        cont = resultado.rowCount
        for (let i = 0; i<cont; i++){
            if (email == resposta[i][2]){
                if (senha == resposta[i][3]){
                    console.log('Logado com sucesso! Bem vindo '+resposta[i][1])
                    const devolve = await cliente.query({rowMode: 'array', text: "SELECT * FROM clientes where id = "+resposta[i][0]})
                    return devolve.rows
                }else {
                    return "Senha incorreta"
                }
            }
        }
        return "Email incorreto"
    }
    catch (ex){
        console.log("Ocorreu erro na funcao de logar. Erro: "+ ex)
    }
    finally{
        await cliente.end()
        console.log("Cliente desconectado.")
    }
}
module.exports = logar
