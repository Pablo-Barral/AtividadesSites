let btnLado = document.querySelectorAll(".menuLateral ul li button")
let btnBaixo = document.querySelectorAll(".menuBaixo ul li button")


const home = function home(){
    document.getElementById("cadastro").style.visibility = "hidden"
    document.getElementById("reprovado").style.visibility = "hidden"
    document.getElementById("aprovado").style.visibility = "hidden"
}

const cadastro = function cadastro(){
    document.getElementById("cadastro").style.visibility = "visible"
    document.getElementById("reprovado").style.visibility = "hidden"
    document.getElementById("aprovado").style.visibility = "hidden"
}

const aprovado = function aprovado(){
    document.getElementById("cadastro").style.visibility = "hidden"
    document.getElementById("reprovado").style.visibility = "hidden"
    document.getElementById("aprovado").style.visibility = "visible"
}

const reprovado = function reprovado(){
    document.getElementById("cadastro").style.visibility = "hidden"
    document.getElementById("reprovado").style.visibility = "visible"
    document.getElementById("aprovado").style.visibility = "hidden"
}

btnLado.item(0).addEventListener("click", home)
btnLado.item(1).addEventListener("click", cadastro)
btnLado.item(2).addEventListener("click", aprovado)
btnLado.item(3).addEventListener("click", reprovado)

btnBaixo.item(0).addEventListener("click", home)
btnBaixo.item(1).addEventListener("click", cadastro)
btnBaixo.item(2).addEventListener("click", aprovado)
btnBaixo.item(3).addEventListener("click", reprovado)
