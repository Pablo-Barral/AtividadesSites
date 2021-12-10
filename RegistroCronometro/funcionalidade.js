var aprovados = []
var reprovados = []

let informacaoAluno = document.querySelectorAll("input")
let btnSalvar = document.querySelector("#cadastro button")


//"escorrega" placeholder para cima quando em foco
informacaoAluno.item(0).addEventListener("focus", ()=>{
    document.getElementById("textoNome").style.visibility = "visible"
    informacaoAluno.item(0).placeholder = " "
})
informacaoAluno.item(1).addEventListener("focus", ()=>{
    document.getElementById("textoNota").style.visibility = "visible"
    informacaoAluno.item(1).placeholder = " "
})

informacaoAluno.item(0).addEventListener("blur", ()=>{
    document.getElementById("textoNome").style.visibility = "hidden"
    informacaoAluno.item(0).placeholder = "Nome"
})
informacaoAluno.item(1).addEventListener("blur", ()=>{
    document.getElementById("textoNota").style.visibility = "hidden"
    informacaoAluno.item(1).placeholder = "Nota"
})

btnSalvar.addEventListener("click", ()=>{
    
    class Aluno{
        nome = informacaoAluno.item(0).value
        nota = informacaoAluno.item(1).value
    }
    let aluno = new Aluno
    if (aluno.nota < 6){
        reprovados.push(aluno)

        var row = document.createElement("tr")

        var dataNome = document.createElement("td")
        dataNome.innerHTML = aluno.nome
        row.appendChild(dataNome)

        var dataNota = document.createElement("td")
        dataNota.innerHTML = aluno.nota
        row.appendChild(dataNota)

        var dataStatus = document.createElement("td")
        dataStatus.innerHTML = "Reprovado"
        row.appendChild(dataStatus)

        document.getElementById("listaReprovado").appendChild(row)
    }
    else{
        aprovados.push(aluno)

        var row = document.createElement("tr")

        var dataNome = document.createElement("td")
        dataNome.innerHTML = aluno.nome
        row.appendChild(dataNome)

        var dataNota = document.createElement("td")
        dataNota.innerHTML = aluno.nota
        row.appendChild(dataNota)

        var dataStatus = document.createElement("td")
        dataStatus.innerHTML = "Aprovado"
        row.appendChild(dataStatus)

        document.getElementById("listaAprovado").appendChild(row)
    }

    // reseta os inputs
    informacaoAluno.item(0).value = null
    informacaoAluno.item(1).value = null

    //mensagem de alunos cadastrados
    if ((parseInt(reprovados.length) + parseInt(aprovados.length)) == 1){
        document.getElementById("msgPainel").innerText = "Painel: 1 aluno cadastrado"
    }
    else{
        document.getElementById("msgPainel").innerHTML = "Painel: " + (parseInt(reprovados.length) + parseInt(aprovados.length)) + " alunos cadastrados"
    }
})
