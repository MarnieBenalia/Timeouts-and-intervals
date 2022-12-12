let seconde = 0
let minute = 0

function timer(){

    document.getElementById('times').innerHTML = (minute + ":" + seconde);

    seconde++;

    if (seconde === 60){minute++}

    else{}

}
setInterval(timer,1000)