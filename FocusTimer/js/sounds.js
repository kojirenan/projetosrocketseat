const kitchenTimer = new Audio("./sounds/Timer.mp3")

function sound({
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
}) {
  const soundForest = new Audio("./sounds/Floresta.wav")
  const soundRain = new Audio("./sounds/Chuva.wav")
  const soundCoffe = new Audio("./sounds/Cafeteria.wav")
  const soundFireplace = new Audio("./sounds/Lareira.wav")

  soundForest.loop = true
  soundRain.loop = true
  soundCoffe.loop = true
  soundFireplace.loop = true


  function forest() {
    buttonForest.classList.toggle('on')
    buttonRain.classList.remove('on')
    buttonCoffee.classList.remove('on')
    buttonFireplace.classList.remove('on')
    onOff(soundForest)
    soundRain.pause()
    soundCoffe.pause()
    soundFireplace.pause()
  }
  function rain() {
    buttonForest.classList.remove('on')
    buttonRain.classList.toggle('on')
    buttonCoffee.classList.remove('on')
    buttonFireplace.classList.remove('on')
    soundForest.pause()
    onOff(soundRain)
    soundCoffe.pause()
    soundFireplace.pause()
  }
  function coffe() {
    buttonForest.classList.remove('on')
    buttonRain.classList.remove('on')
    buttonCoffee.classList.toggle('on')
    buttonFireplace.classList.remove('on')
    soundForest.pause()
    soundRain.pause()
    onOff(soundCoffe)
    soundFireplace.pause()
  }
  function fireplace() {
    buttonForest.classList.remove('on')
    buttonRain.classList.remove('on')
    buttonCoffee.classList.remove('on')
    buttonFireplace.classList.toggle('on')
    soundForest.pause()
    soundRain.pause()
    soundCoffe.pause()
    onOff(soundFireplace)
  }

  function onOff(myAudio) {
    return myAudio.paused ? myAudio.play() : myAudio.pause()
  }

  return {
    forest,
    rain,
    coffe,
    fireplace,
    kitchenTimer,
  }
}

export {
  sound,
  kitchenTimer,
}