const Client = require('pg').Client;
const cliente = new Client({
    user: "postgres",
    password: "#",
    host: "127.0.0.1",
    port: 5432,
    database: "Neko"})

module.exports = cliente