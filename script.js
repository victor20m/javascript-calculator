let valorDisplay = "";
let displayHtml = document.getElementById("display").children[0];
let resultadoListo = false;

function numBtn(y){
    if(resultadoListo){
        valorDisplay = "";
        resultadoListo = false;
    }
    valorDisplay += y;
    displayHtml.innerHTML = valorDisplay;
}

function operacion(x){
    resultadoListo = false;
    valorDisplay += x;
    displayHtml.innerHTML = valorDisplay;
}

function clearBtn(){
    valorDisplay = "";
    displayHtml.innerHTML = "0";
}

function raizCuadrada(){
    displayHtml.innerHTML = Math.sqrt(eval(valorDisplay));
}

function resultadoBtn(){
    let tamaño = valorDisplay.length;
    if(valorDisplay.charAt(0) == 0){
        valorDisplay = valorDisplay.slice(1, tamaño);
    }
    displayHtml.innerHTML = eval(valorDisplay);
    valorDisplay = eval(valorDisplay);
    resultadoListo = true;
}

function cambioSigno(){
    let tamaño = valorDisplay.length;
    if(valorDisplay.charAt(0) === "-"){
        valorDisplay = valorDisplay.slice(1,tamaño);
        displayHtml.innerHTML = valorDisplay;
    }else{
        valorDisplay = "-"+ valorDisplay;
        displayHtml.innerHTML = valorDisplay;
    }
}

function borrar(){
    let tamaño = valorDisplay.length;
    if(tamaño <= 1){
        valorDisplay = "";
        displayHtml.innerHTML = "0";
    }else{
        valorDisplay = valorDisplay.slice(0, tamaño-1);
        displayHtml.innerHTML = valorDisplay;
    }
    
}