let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displaytime");
let timer = null;



function startTime(){
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;
        if (minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10? "0" + hours : hours
    let m = minutes < 10? "0" + minutes : minutes
    let s = seconds < 10? "0" + seconds : seconds
    displayTime.innerHTML = h +':'+ m +':'+ s
}

function watchStart(){
    if (timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(startTime,1000)
}

function reset(){
    clearInterval(timer)
    hours = 0
    minutes = 0
    seconds = 0
    displayTime.innerHTML = "00:00:00"
}

function stop(){
    clearInterval(timer)
}