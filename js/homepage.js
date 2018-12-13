require(['jquery', 'moment'], function ($, moment) {
    const $countdown = $('#countdown');
    const $countdownTime = $countdown.find('.countdown-time');
    const start = moment($countdown.attr('data-start'), 'X');
    const isInFuture = !!$countdown.attr('data-is_in_future');

    setInterval(function () {
            const now = moment();
            const days = Math.floor(start.diff(now, 'days', true));
            const hours = Math.abs(now.diff(start, 'hours') % 24);
            const minutes = Math.abs(now.diff(start, 'minutes') % 60);
            const seconds = Math.abs(now.diff(start, 'seconds') % 60);
            const time = [hours, 'h ', minutes, 'm ', seconds, 's'];
            const showDays = function () {
                switch (days) {
                    case 1:
                        time.unshift(' den ');
                        break;
                    case 2:
                    case 3:
                    case 4:
                        time.unshift(' dny ');
                        break;
                    default:
                        time.unshift(isInFuture ? ' dní ' : ' dny ');
                        break;
                }
                time.unshift(days);
            };

        if (days > 0) {
            showDays();
        }

        $countdownTime.text(time.join(''));
    }, 1000);
});
