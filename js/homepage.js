function addEvent(event, element, callback) {
  if (element.addEventListener) {
    element.addEventListener(event, callback, false)
  } else if (element.attachEvent) {
    element.attachEvent("on" + event, callback)
  } else {
    element["on" + event] = callback
  }
}

addEvent("load", window, function () {
  const $countdown = document.getElementById('countdown')
  const start = Date.parse($countdown.getAttribute('data-start'))
  if (start - Date.now() < 0) {
    $countdown.innerHTML = 'Start již proběhl'
  } else {
    let timer = setInterval(function () {
      const t = new Date(start - Date.now())
      if (t > 0) {
        const d = Math.floor(t.getTime() / 24 / 60 / 60 / 1000)
        const time = [
          d, ' dní ',
          t.getHours(), 'h ',
          t.getMinutes(), 'm ',
          t.getSeconds(), 's'
        ]

        if (d === 1) {
          time[1] = ' den '
        } else if (d < 5) {
          time[1] = ' dny '
        }

        $countdown.innerHTML = 'Startujeme již za ' + time.join('')
      } else {
        $countdown.innerHTML = 'Start již proběhl'
        clearInterval(timer)
        timer = null
      }
    }, 1000)
  }
})
