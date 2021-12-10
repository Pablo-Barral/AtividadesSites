let botoes = document.querySelectorAll(".btnConta")
let btnZerar = document.querySelector(".btnZerar")
let valores = document.querySelectorAll("input")
let resultado = document.querySelector("#resultado")


btnZerar.addEventListener("click", () =>{
    valores.forEach( (valor) =>{
        valor.value = null
    })
    resultado.innerHTML = " "
})

// forEach não funcionou, permaneceu indefinido, substituido por for loop comum
for (let i = 0; i < botoes.length; i++) {
    botoes.item(i).addEventListener("click", () =>{
        let conta = valores.item(0).value + botoes.item(i).value + valores.item(1).value
        let result = eval(conta)
        resultado.innerHTML = result
        valores.item(0).value = result
        valores.item(1).value = null
    })
  }
