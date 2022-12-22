
const pessoa = {
    nome: 'Guilherme',
    idade: 18
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

//console.log(calculaIdade.call(pessoa, 18))
console.log(calculaIdade.apply(pessoa, [20]))