let sec = 0
let min = 0

function timer(){

    document.getElementById('times').innerHTML = (min + ":" + sec);

    sec++;

    if (sec === 60){
        min++
        sec = 0;

        alert(min + "minute(s) vient de passer")
    }

    else{}

}
setInterval(timer,1000)