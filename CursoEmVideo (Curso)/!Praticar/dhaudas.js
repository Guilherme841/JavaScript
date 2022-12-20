/*var campo = document.querySelector("input")
var but = document.querySelector("button")
var resu = document.querySelector("#resu")
var medicamentos = [];
but.onclick = function(){
    medicamentos.push(campo.value);
    resu.innerHTML = `${medicamentos}`
}
function finalizar() {
    for (let valor in medicamentos) {
        resu.innerHTML += (`A posição ${valor} tem o valor ${medicamentos[valor]}`)
    }
} */
const values = [1,5,3,10,4,6,56,87,9];
const maxValue = values.reduce(function(prev, current) { 
	return prev > current ? prev : current; 
});
console.log(maxValue);