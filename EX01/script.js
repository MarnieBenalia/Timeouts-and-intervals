
const text = "prout";
let timer;
let i = 0;

function type() {

    document.write(text[i]);
    
    i++;

    if(i >= text.length)

    clearInterval(timer);
}

timer = setInterval(type, 1000);
