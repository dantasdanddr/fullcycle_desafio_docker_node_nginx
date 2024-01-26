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

//inserindo pessoas
const insert = `INSERT INTO people(name) 
             values
             ('Beltrano'),
             ('Lorem'),
             ('Fulano'),
             ('Ciclano')`
connection.query(insert)

//variáveis
let people = []
let html = ''

//selecionando pessoas
const select = `SELECT * FROM people`
connection.query(select, function (err, result, fields) {
  if (err) throw err;
  console.table(result);
  
  //converter para array 
  people = result.map(person => [person.id, person.name])
  //iterando pessoas
  people.forEach(([id, name]) => {
    html += `<tr>
              <td>${id}</td>
              <td>${name}</td>
            </tr>`;
  });
});
connection.end()

app.get('/', (req,res) => {
  res.send(`<h1>Full Cycle Rocks!</h1>
            <hr />
            <table border='1|1' cellpadding='2' cellspacing='0'>
              <caption><b>Lista de Pessoas</b></caption>
              <tr>
                <th style="width:30px">Id</th>
                <th style="width:80px">Name</th>
              </tr>
              ${html}`)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})