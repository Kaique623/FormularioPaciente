const express = require('express')
const path = require("path");
const fs = require("fs");
const bodyparser = require("body-parser");

const file = require("../pacientes.json");
var nextId = file.nextId;

const app = express()
const port = 3000

app.use(bodyparser.json({limit: '50tb'}));

app.use(express.static("FormularioPaciente"))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../mainPage/index.html'))
})

app.get('/registros', (req, res) => {
  res.sendFile(path.join(__dirname, '../mainPage/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.urlencoded({ 
  extended: false,
  limit: 10000,
}))

app.post("/upload", function(req, res) {
  console.log("Body:")
  console.log(req.body)


  if (!(nextId in file["cadastros"])){
    file["cadastros"][nextId] = req.body;
    nextId++;
    file.nextId = nextId;
    saveJson();
  }
  else 
    console.log("Erro!\n Id Já existente!")
})

function saveJson(){
  fs.writeFileSync("FormularioPaciente/pacientes.json", JSON.stringify(file));
  console.log("Saved!");
}