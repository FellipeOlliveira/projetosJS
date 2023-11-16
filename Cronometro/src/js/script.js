const horas = document.getElementById("hrs")
const minutos = document.getElementById("min")
const segundos = document.getElementById("sec")
var hrs = 0
var min = 0
var sec = 0
var contador = 0

function increment(){
    let valores = valor
    contador ++
    valores.innerHTML = contador
    print("deu certo")
}
//Stts: Concluido
function reverb(){
    hrs = 0
    min = 0
    sec = 0
    contador = 0

    horas.innerHTML = hrs
    minutos.innerHTML = min + "0"
    segundos.innerHTML = sec + "0"

}