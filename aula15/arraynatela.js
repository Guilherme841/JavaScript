let valores = [8,7,4,5,2,3,1]
let soma = 0; 
//console.log(valores)
/*for (let valor =0; valor < valores.length; valor++) {
    console.log(`A posição ${valor} tem o valor ${valores[valor]}`)
}*/
for (let valor in valores) {
    console.log(`A posição ${valor} tem o valor ${valores[valor]}`)
}
// soma 
for (var i = 0; i < valores.length; i++) {
    soma+=valores[i];
}
console.log(soma);