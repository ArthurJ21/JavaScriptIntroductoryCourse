let logico = 0;
let creativo = 0;

function responder(tipo){

if(tipo === "logico"){
logico++;
}

if(tipo === "creativo"){
creativo++;
}

}

function mostrarResultado(){

let resultado = document.getElementById("resultado");

if(logico > creativo){

resultado.innerHTML =
"Tu talento dominante es pensamiento lógico.";

}

else{

resultado.innerHTML =
"Tu talento dominante es pensamiento creativo.";

}

}