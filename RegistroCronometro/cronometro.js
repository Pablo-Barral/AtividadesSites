var ms = "000"
var seg = "00"
var min = "00"
var hr = "00"
let crono = document.querySelector("#tempo")
var parado = true
let controle = document.querySelectorAll(".menuCronometro ul li button")
let icone = document.querySelector("#iconeCrono i")

function cronometrar(){
    if (parado == false){
        icone.className = "fas fa-play-circle"
        ms = parseInt(ms) + 1
        if (10 > ms){
            ms = "0" + ms
        }
        if (10 > ms < 100){
            ms = "0" + ms
        }

        if (ms == 99){
            ms = 0
            seg = parseInt(seg) + 1
            if (seg < 10){
                seg = "0" + seg
            }
        }

        if (seg == 60){
            seg = 00
            min = parseInt(min) + 1
            if (min < 10){
                min = "0" + min
            }
        }

        if (min == 60){
            min = 00
            hr = parseInt(hr) + 1
            if (hr < 10){
                hr = "0" + hr
            }
        }

        crono.innerHTML = hr + ":" + min + ":" + seg + ":" + ms

        setTimeout("cronometrar()", 10)
}}

controle.item(0).addEventListener("click", ()=>{
    parado = false
    cronometrar()
})

controle.item(1).addEventListener("click", ()=>{
    parado = true
    icone.className = "fas fa-pause-circle"
})

controle.item(2).addEventListener("click", ()=>{
    parado = true
    icone.className = "fas fa-stop-circle"
    ms = 0
    seg = 0
    min = "00"
    hr = "00"
    crono.innerHTML = "00:00:00:000"
})

controle.item(3).addEventListener("click", ()=>{
    ms = 0
    seg = "00"
    min = "00"
    hr = "00"
    if (parado == true){
        crono.innerHTML = "00:00:00:000"
    }
})
