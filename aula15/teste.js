let num = [4,2,6,7,8,3,1,9]
//num[8] = 10  //Recebe um numero numa vaga especifica 
//num.push(11)  //cria uma ultima casa para um valor 
//num.length  tamanho do array
num.sort()  //colocar os valores em ordem crescente
console.log(`Array é o ${num}`)
console.log(`Array com o tamanho de ${num.length} vagas!`)
let pos = num.indexOf(1)
if (pos == -1) {
    console.log(`o valor nao foi encontrado!`)
} else {
console.log(`O valor pesquisado está na posição ${pos}`)
//var soma = 
//console.log(`${num+num}`)
}
