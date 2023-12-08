export class Pessoa {
  static totalPessoas = 0;
  _nome;
  _idade;
  _peso;
  _altura;
  _imc;

  constructor(nome, idade, peso, altura) {
    this._nome = nome;
    this._idade = idade;
    this._altura = altura;
    this._peso = peso;
    this._imc = this._peso / (this._altura * this._altura).toFixed(2);
    Pessoa.totalPessoas += 1;
  }

  get idade() {
    return this._idade;
  }

  set idade(novaIdade) {
    this._idade = novaIdade;
  }

  get totalPessoas() {
    return Pessoa.totalPessoas;
  }

  imcCalc() {
    return this.imc;
  }
}
