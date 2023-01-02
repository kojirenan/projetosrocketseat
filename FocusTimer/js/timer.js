export default function events({
  buttonPlay,
  buttonPause,
  displayMinutes,
  displaySeconds,
  minutes,
  seconds,
  kitchenTimer,
}) {
  let newMinutes = minutes
  let newSeconds = seconds
  let timerTimeOut

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    startTimer()
  }

  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(timerTimeOut)
  }

  function reset() {
    pause()
    minutes = newMinutes
    seconds = newSeconds
    updateDisplay(minutes, seconds)
  }

  function updateDisplay(minutes, seconds) {
    displaySeconds.innerText = String(seconds).padStart(2, "0")
    displayMinutes.innerText = String(minutes).padStart(2, "0")
  }

  function startTimer() {
    if (minutes == 0 && seconds == 0) {
      return pause()
    }
    countdown()
    timer()
  }

  function countdown() {
    --seconds

    if (seconds < 0) {
      seconds = 59
      --minutes
    }

    updateDisplay(minutes, seconds)
  }

  function timeIsUp() {
    pause()
    kitchenTimer.play()
  }

  function timer() {
    timerTimeOut = setTimeout(() => {
      countdown()

      if (minutes <= 0 && seconds == 0) {
        return setTimeout(timeIsUp, 1000)
      }

      timer()
    }, 1000
    )
  }

  function plusTime() {
    minutes += 5
    newMinutes = minutes
    updateDisplay(minutes, seconds)
  }

  function minusTime() {
    if (minutes > 1) {
      minutes--
      seconds = 0
    }
    newMinutes = minutes
    newSeconds = seconds
    updateDisplay(minutes, seconds)
  }

  return {
    play,
    pause,
    reset,
    plusTime,
    minusTime,
  }
}