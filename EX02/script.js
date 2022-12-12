let timer = 0

function secPassed(){

    document.getElementById('times').innerHTML = (sec)
    sec++
}

function minPassed(){

    document.getElementById('timer').innerHTML = (min)
    min++
}

setInterval(secPassed, 1000);
setInterval(minPassed, 60000);