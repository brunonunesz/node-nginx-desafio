const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('FullCycle')`
connection.query(sql)

connection.end()

app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
    const select = `SELECT * FROM people`
    connection.query(select, function (err, result, fields) {
        if (err) throw err;
        res.send('<h1>Full Cycle Rocks</h1>' + JSON.stringify(result))
    })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})