let Score = document.getElementById("Hscore")
let GuestScore = document.getElementById("Gscore")
let sumH = 0
let sumG = 0

function btn1(){
    sumH = sumH + 1
    Score.textContent = sumH
}

function btn2(){
     sumH = sumH + 2
    Score.textContent = sumH
}

function btn3(){
     sumH = sumH + 3
    Score.textContent = sumH
}

function btn4(){
    sumG = sumG + 1
    GuestScore.textContent = sumG
}

function btn5(){
    sumG = sumG + 2
    GuestScore.textContent = sumG
}

function btn6(){
    sumG = sumG + 3
    GuestScore.textContent = sumG
}