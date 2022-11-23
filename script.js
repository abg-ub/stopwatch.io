this.onload = () => {
    var seconds = 00;
    var tens = 00;
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonStart = document.getElementById("start");
    var buttonstop = document.getElementById("stop");
    var buttonreset = document.getElementById("reset");
    var buttonRestart = document.getElementById("restart");
   var buttonSet = document.getElementById("set");
    var Interval ;

        buttonSet.onclick= () => {
            if( tens !== 0){
                let app = document.querySelector('#app');
                let arr = [seconds + ':' + tens];
                let nodes = arr.map(lang => {
                    let li = document.createElement('li');
                    li.textContent = lang;
                    return li;
                });
                app.append(...nodes);
            }
        }

        buttonStart.onclick = () => {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        }
        buttonstop.onclick = () => {
            clearInterval(Interval);
            if( tens !== 0){
                let app = document.querySelector('#app');
                let arr = [seconds + ':' + tens];
                let nodes = arr.map(lang => {
                    let li = document.createElement('li');
                    li.textContent = lang;
                    return li;
                });
                app.append(...nodes);
            }
        }
        buttonreset.onclick = () => {
            tens = "00";
            seconds = "00";
            appendTens.innerHTML = tens;
            appendSeconds.innerHTML = seconds;
            clearInterval(Interval);

        }
        buttonRestart.onclick = () => {
            location.reload()
        }

  

 startTimer = () => {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9){
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
            }
            if (seconds > 9) {
                appendSeconds.innerHTML = seconds;

            }
    }
    
}