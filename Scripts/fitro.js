async function filtroCad(id) {
    const Client = require('pg').Client;
    const cliente = new Client({
    user: "postgres",
    password: "#",
    host: "127.0.0.1",
    port: 5432,
    database: "Neko"
    });
    
    await cliente.connect()
    var resultado =  await cliente.query("SELECT * FROM barbearia where id_categoria="+id)
    resultado = resultado.rows
    //console.log(resultado)
    var enderecos = await cliente.query("SELECT * FROM endereco");
    enderecos = enderecos.rows

    for (let x in resultado) {
        //console.log(resultado[x])
        for (let y in enderecos) {
            //console.log(resultado[x])
            //console.log(resultado[y])
            console.log()
            if (resultado[x].id_endereco==enderecos[y].id) {
                resultado[x].endereco = enderecos[y]
                var categoria = await cliente.query("SELECT nome FROM categorias where id="+resultado[x].id_categoria);
                resultado[x].categoria = categoria.rows[0].nome
                resultado[x].back = 'black';
                resultado[x].color = 'white';
            }
        } 
    }
    //console.log(resultado)
    return resultado
}

module.exports = filtroCad;
