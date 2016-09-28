// start.onclick = startTimer;
(function () {


    var clock;
    var startButton = document.getElementsByClassName('btn start')[0];
    var pauseButton = document.getElementsByClassName('btn pause')[0];
    var continueButton = document.getElementsByClassName('btn continue')[0];
    var clearButton = document.getElementsByClassName('btn clear')[0];
    var init = 0;
    var show = true;
    var my_timer = document.getElementById("my_timer");
    var time = my_timer.innerHTML;
    var msec = document.getElementById("mseconds");
    var ms = msec.innerHTML;
    var arr = time.split(":");
    var h = arr[0];
    var m = arr[1];
    var s = arr[2];
    function start() {
        startButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    }

   function startTimer() {
       start();
        if (ms >= 99) {
            if (s > 59) {
                m++;
                if (m < 10) {
                    m = m + "0" ;
                }
                s = 0;
                mc = 0;
            }
            s++;
            if (s < 10) {
                s = "0" + s;
            }
            ms = 0;
            if (m == 59) {
                h++;
                m = 0;
                if (h < 10) {
                    h = "0" + h;
                }
            }
        }
        else ms++;
        document.getElementById("my_timer").innerHTML = h + ":" + m + ":" + s;
        document.getElementById("mseconds").innerHTML = ms;
        clock = setTimeout(startTimer, 10);
    }

    function clearClock() {
        clearTimeout(clock);
        continueButton.style.display = '';
        startButton.style.display = 'inline-block';
        pauseButton.style.display = '';
        h = 0;
        m = 0;
        s = 0;
        document.getElementById("my_timer").innerHTML = h + "0" + ":" + "0" + m + ":" + "0" + s;
        init = 0;
        show = true;
    }

    function continueClock() {
        pauseButton.style.display = 'inline-block';
        continueButton.style.display = '';
        clock = setTimeout(startTimer, 10);
    }

    function pauseClock() {
        clearTimeout(clock);
        pauseButton.style.display = '';
        startButton.style.display = 'none';
        continueButton.style.display = 'inline-block';
        if (init == 0) {
            // dateObj = new Date();
            // startTimer();
            init = 1;
        } else {
            if (show) {
                show = false;
            } else {
                show = true;
            }
        }

    }


    startButton.addEventListener('click', startTimer);
    clearButton.addEventListener('click', clearClock);
    pauseButton.addEventListener('click', pauseClock);
    continueButton.addEventListener('click', continueClock);


})();



