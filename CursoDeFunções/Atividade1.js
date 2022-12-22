const alunos = [
    {
        nome: 'João',
        nota: '5',
        turma: '1B',
    },
    {
        nome: 'Riquelme',
        nota: '6',
        turma: '1B',
    },
    {
        nome: 'Roberto',
        nota: '8',
        turma: '1B',
    },
];

function alunosAprovados (arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i]; // objects destruction

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6))
