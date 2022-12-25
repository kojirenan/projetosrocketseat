//Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let numberRandom = Math.round(Math.random() * 3)

// frases
const phrases = [
  "Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.",
  "A persistência realiza o impossível.",
  "Seus sonhos não precisam de plateia, eles só precisam de você.",
  "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
]

//Funções
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function generatorPhrases() {
  screen2.querySelector('p').innerText = `${phrases[numberRandom]}`
}

function clickReset() {
  generatorPhrases();
  numberRandom = Math.round(Math.random() * 3)
  toggleScreen();
}

//Eventos
openCookie.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', clickReset)
