var comorCount = 1
var newRowCount = 2;
var comorbidadeFrame = document.getElementById("comorbidadeFrame");
var addButton = document.getElementById("addButton");

var diff = -1;

function addComorbidade(){  
    if (newRowCount == 2){
        comorCount = 1;
        lastinput = comorbidadeFrame.getElementsByTagName("input");
        lastinput[0].id = "inputComorbidade1";
        lastinput[0].style.gridRow = "2";
        diff++;
        addButton.style.gridRow = "2";
    }
        
    newRowCount++;
    comorCount++;

    newInput = document.createElement("input");
    newInput.id = "inputComorbidade" + comorCount;
    newInput.style.gridRow = newRowCount;
    newInput.style.gridColumn = 1;
    newInput.name = newInput.id;

    newRemoveButton = document.createElement("button");
    newRemoveButton.className = "roundButton";
    newRemoveButton.innerHTML = "-";
    newRemoveButton.style.gridColumn = 2;
    newRemoveButton.id  = comorCount;
    newRemoveButton.style.backgroundColor = "#FF3131";
    newRemoveButton.setAttribute("onclick", `removeButton(${newRemoveButton.id})`)
    newRemoveButton.gridRow = newRowCount;

    addButton.style.gridRow = newRowCount;

    comorbidadeFrame.appendChild(newInput);
    comorbidadeFrame.appendChild(newRemoveButton);
}

function removeButton(id) {
    comorbidadeFrame.removeChild(document.getElementById(id));
    comorbidadeFrame.removeChild(document.getElementById("inputComorbidade" + (parseInt(id)- 1)));
    newRowCount--;

    let inputs = comorbidadeFrame.getElementsByTagName("input");
    let removeButtons = comorbidadeFrame.getElementsByTagName("button")

    for (let i = 0; i < inputs.length; i++){
        inputs[i].style.gridArea = i + 2 + " / 1";
        removeButtons[i].style.gridRow = i + 1; 
    } 
    addButton.style.gridRow = inputs.length + 1;

    if (newRowCount != 2)
        addButton.gridRow--;
}
