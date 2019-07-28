$(document).ready(function () {
  const $countdown = $('#countdown')
  const start = Date.parse($countdown.attr('data-start'))
  if (start - Date.now() < 0) {
    $countdown.text('Start již proběhl')
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

        $countdown.text('Startujeme již za ' + time.join(''))
      } else {
        $countdown.text('Start již proběhl')
        clearInterval(timer)
        timer = null
      }
    }, 1000)
  }
})
