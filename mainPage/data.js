var comorbidades = [];
let information =  {"Nome": "", "Sexo": 0, "Idade": 0, "ComorbidadeBoolean": 0,"Comorbidade": comorbidades};

var nomeInput = document.getElementById("nomePaciente");
var sexoRadio =  document.getElementById("masc");
var idadePaciente = document.getElementById("idadePac");
var comorbidadeRadio = document.getElementById("comT");

function saveInfo(){
    
    information["Nome"] = nomeInput.value;
    information["Sexo"] = sexoRadio.checked ? information["Sexo"]: false;
    information["Idade"] = idadePaciente.value;

   if (comorbidadeRadio.checked){
        for (let i = 0; i < comorbidadeFrame.children.length; i++)
            if (comorbidadeFrame.children[i].tagName == "INPUT")
                if (comorbidadeFrame.children[i].value != "")
                    comorbidades.push(comorbidadeFrame.children[i].value)
        information["ComorbidadeBoolean"] = 1;
        information["Comorbidade"] = comorbidades;
    }
    else {
        information["ComorbidadeBoolean"] = 0;
        information["Comorbidade"] = [];
    }
    fetch("http://localhost:3000/upload", {
        method: "POST",
        body: JSON.stringify(information),
        headers: {
            "Content-Type": "application/json"
        },
        
    })

    console.log(information)

    return information;   
}