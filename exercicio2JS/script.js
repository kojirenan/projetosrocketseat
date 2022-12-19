/*
    Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

  - nome;
  - nota da primeira prova;
  - nota da segunda prova.

  Depois de criada a lista:

  - [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
  - [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

  A média do(a) aluno(a) name é: x
  Parabéns, name! Você foi aprovado(a) no concurso!
  Não foi dessa vez, name! Tente novamente!
*/

const students = [
  {
    name: "Renan",
    n1: 8,
    n2: 9,
  },
  {
    name: "Larissa",
    n1: 7,
    n2: 7,
  },
  {
    name: "Bárbara",
    n1: 5,
    n2: 6,
  },
  {
    name: "Thiago",
    n1: 9,
    n2: 6,
  },
]

// functions
function averageStudent(n1, n2) {
  let average = (n1 + n2) / 2
  return average
}

// repetitions
for (let i = 0; i < students.length; i++) {
  let averageNotes = averageStudent(students[i].n1, students[i].n2)
  if (averageNotes < 7) {
    alert(`
      A média do(a) aluno(a) ${students[i].name} é: ${averageNotes}
      Não foi dessa vez, ${students[i].name}! Tente novamente!
    `)
  } else {
    alert(`
      A média do(a) aluno(a) ${students[i].name} é: ${averageNotes}
      Parabéns, ${students[i].name}! Você foi aprovado(a) no concurso!
    `)
  }
}
