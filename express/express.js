const express = require('express')
const path = require("path");
const fs = require("fs");
const exp = require('constants');

const app = express()
const port = 3000

data = fs.read("FormularioPaciente/pacientes.json");
console.log(data);

app.use(express.static("FormularioPaciente"))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.urlencoded({ 
  extended: false,
  limit: 10000,
}))

app.post("/upload", function(req, res) {
  content = {"Nome": req.body.nomePaciente, "Idade": req.body.idadePaciente, "Genero": req.body.sexoRadio, "Comorbidade": req.body.comorbidade}

  console.log(content);

  saveJson(content);
})

function saveJson(content){
  fs.writeFileSync("FormularioPaciente/pacientes.json", JSON.stringify( content));
  console.log("Saved!");
}