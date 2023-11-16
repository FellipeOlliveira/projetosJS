//variaveis do programa
const horas = document.getElementById("hrs")
const minutos = document.getElementById("min")
const segundos = document.getElementById("sec")
var hrs = 0
var min = 0
var sec = 0
var milisec = 0
var contador = 0

//inicializando o contador
function ignition(){
    breaks()
    contador = setInterval(() => {deterninarHora(), 10})    
}

//encontrando a hora, logica do calculo do tempo
function deterninarHora(){
    if ((milisec += 10 ) == 1000){
        milisec = 0
        sec ++
    }
    if (sec == 60){
        sec = 0
        min ++
    }
    if (min == 60){
        min = 0
        hrs ++
    }
    horas.innerHTML = hrs
    minutos.innerHTML = min
    segundos.innerHTML = sec

}

//Para parar a função
function breaks(){
    clearInterval(contador)
}

//Revertendo as variaveis para o inicio
function reverb(){
    hrs = 0
    min = 0
    sec = 0
    milisec = 0
    contador = 0

    horas.innerHTML = hrs
    minutos.innerHTML = min + "0"
    segundos.innerHTML = sec + "0"

}