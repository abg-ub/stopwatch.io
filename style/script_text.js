this.onload = () => {
    var tens = 00;
    var seconds = 00;
    var buttonTens = document.getElementById('tens');
    var buttonSeconds = document.getElementById('seconds');
    var buttonSet = document.getElementById('set');
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById('stop');
    var buttonReset = document.getElementById('reset');
    var buttonRestart = document.getElementById('restart');
    var Interval;

    buttonStart.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(StartTimer, 10);
    }
    buttonStop.onclick = () => {
        clearInterval(Interval);
        if (tens !== 00 & tens !== "00"){
        let app = document.querySelector('#app');
        let arr = [seconds + ":" + tens];
        let nodes = arr.map(user => {
            let li = document.createElement('li');
            li.textContent = user;
            return li;
        })
        app.append(...nodes);
    }
    }
    buttonReset.onclick = () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        buttonSeconds.innerHTML = seconds;
        buttonTens.innerHTML = tens;
    }
    buttonRestart.onclick = () => {
        location.reload();
    }
    buttonSet.onclick = () => {
        if (tens !== 00 && tens !== "00"){
            let app = document.querySelector('#app');
            let arr = [seconds + ":" + tens];
            let nodes = arr.map(user => {
                let li = document.createElement('li');
                li.textContent = user;
                return li;
            })
            app.append(...nodes);
        }

    }
    StartTimer = () => {
        tens++;
        if (tens <= 9) {
            buttonTens.innerHTML = "0" + tens;
        }
        if ( tens > 9) {
            buttonTens.innerHTML = tens;
        }
        if( tens > 99) {
            seconds++;
            buttonSeconds.innerHTML = "0" + seconds;
            buttonTens.innerHTML = "0" + 0;
            tens = 00;
        }
        if ( seconds > 9) {
            buttonSeconds.innerHTML = seconds;
        }
    }
}