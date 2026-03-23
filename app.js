function tabla7(){

let resultadoHTML = "";

console.log("Tabla del 7");

for(let i = 1; i <= 10; i++){

let resultado = 7 * i;

let linea = "7 x " + i + " = " + resultado;

console.log(linea);

resultadoHTML += linea + "<br>";

}

document.getElementById("resultado").innerHTML = resultadoHTML;

}