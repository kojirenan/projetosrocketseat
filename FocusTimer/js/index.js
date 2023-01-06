import Events from "./timer.js";
import DarkMode from "./darkmode.js";
import {
  sound,
  kitchenTimer,
  soundForest,
  soundRain,
  soundCoffe,
  soundFireplace,
} from "./sounds.js";


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

const inputForest = document.querySelector(".forest-control")
const inputRain = document.querySelector(".rain-control")
const inputCoffe = document.querySelector(".coffe-control")
const inputFireplace = document.querySelector(".fireplace-control")

const html = document.querySelector("html")
const buttonLightMode = document.querySelector(".light")
const buttonDarkMode = document.querySelector(".dark")

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

let darkMode = DarkMode({
  html,
  buttonLightMode,
  buttonDarkMode,
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

buttonLightMode.addEventListener('click', darkMode.dark)
buttonDarkMode.addEventListener('click', darkMode.light)

inputForest.addEventListener('input', function () {
  soundForest.volume = (this.value) / 100
})
inputRain.addEventListener('input', function () {
  soundRain.volume = (this.value) / 100
})
inputCoffe.addEventListener('input', function () {
  soundCoffe.volume = (this.value) / 100
})
inputFireplace.addEventListener('input', function () {
  soundFireplace.volume = (this.value) / 100
})

