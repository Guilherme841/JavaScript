`Variaveis e Tipos

Atribuição de valores

case type 

Original Variable as String | some awesome var
Camel case  | someAwesomeVar
snake case  | some_awesome_var
kebab case  | some-awesome-var
pascal case | SomeAwesomeVar
Upper case snake case | SOME_AWESOME_VAR

Var e let 

let - tem escopo de bloco

var - tem escopo global

hoisting- atribui um valor a uma variavel antes de declarar ela (só acontece com o var.)

Redeclaração - (só acontece com o var) Ex : (var a =2;)

Reatribuição - Ex : ( A = 2; )

Todas as variaveis são usadas com camelCase 

Constantes 

- Declarada em SNAKE_UPPER_CASE
- escopo de bloco 
- não faz hoisting
- não muda o valor, não posso reatribuir uma constante
- não posso redeclarar uma constante 

Var, Let e Const


           |      var        | const | let 
escopo     | global ou local | bloco | bloco
redeclarar |      sim        |  não  | não
reatribuir |      sim        |  não  | sim
hoisting   |      sim        |  não  | não

Tipos de Dados 

- JavaScript é uma linguagem de típagem dinâmica 

- ou Seja, antes de declarar um valor, você precisa especificar o tipo delete.

dados primitivos

-Números
-Strings
-Valores booleanos
-Null
-Indefined

-Tipos primitivos não tem metodos dentro deles

Não primitivos

-Objetos
-Arrays

Strings- são textos

-valores declarados entre aspas ou crases
- .concat(var) - para concatenar variaveis
- new String("dlkhsada") - declara uma string objeto 
- Indice [1] - procura a case
- /n pula linha - escapar
- .split - separa os argumentos .split("")(" ") - obs: coloque espaço para procurar palavras separadas por espaço
- .includes - verifica se tem uma palavra especifica - .includes("")
- .startWith("a") - Verifica se a palavra começa com a letra a 
- .endsWith("?") - Verifica se termina com a interrogação
- .replace(",","!") - Modifica o texto de vírgula para exclamação

Numbers 

- Math.floor(variavel) - arredonda pra baixo
- Math.ceil(variavel) - arredonda pra cima
- .toString() - converte para string
- exclamação(!) mostra o contrario 

Arrays 

- .push adiciona um elemento no final do array
- .pop tira o elemento do final do array
- .shift tirar o primeiro elemento do array
- .unshift adiciona um elemento no começo do array
- .includes verifica se tem o elemento especificado
- .every (item => item === 5) verifica se todos os item são iguais a cinco 
- .some (item => item === 5) verifica se algum deles é cinco

Objetos 

- Da pra criar um chave e um valor usando obj.name = "Guilherme"
- Objects.value(obj) - retorna os valores do objeto
- Objects.keys(obj) - retorna os valores da chave do objeto
- objeto.name - retorna o valor da chave name
- objeto["name"] - retorna o valor da chave name
- person[mom] = "Maria" - a variavel mom recebe maria 

`