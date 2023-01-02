import Events from "./timer.js";
import { sound, kitchenTimer } from "./sounds.js";

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFireplace = document.querySelector('.fireplace')

let minutes = Number(displayMinutes.textContent)
let seconds = Number(displaySeconds.textContent)


let events = Events({
  buttonPlay,
  buttonPause,
  displayMinutes,
  displaySeconds,
  minutes,
  seconds,
  kitchenTimer,
})

let sounds = sound({
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
})

buttonPlay.addEventListener('click', events.play)
buttonPause.addEventListener('click', events.pause)
buttonStop.addEventListener('click', events.reset)
buttonPlus.addEventListener('click', events.plusTime)
buttonMinus.addEventListener('click', events.minusTime)

buttonForest.addEventListener('click', sounds.forest)
buttonRain.addEventListener('click', sounds.rain)
buttonCoffee.addEventListener('click', sounds.coffe)
buttonFireplace.addEventListener('click', sounds.fireplace)