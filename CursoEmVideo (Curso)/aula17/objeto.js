let amigo = {nome:'guilherme',
idade: 18,
engordar(p=0){
    console.log('engordou')
    this.idade += p
}}
amigo.engordar(3)
console.log(`${amigo.idade}`)