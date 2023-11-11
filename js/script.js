const botones=document.getElementsByClassName("boton-jugada");
const resultado = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");
let puntuacionJugador = 0;
let puntuacionOrdenador = 0;



for(let i=0;i<botones.length;i++){
    console.log(botones[i]);
    botones[i].addEventListener("click",function(){
        let eleccion = this.dataset.jugada;
        console.log("jugador eligio " + eleccion);
        eleccionpc(eleccion)
    })
}
const arr = ["papel" , "tijera" , "piedra"];

function eleccionpc(eleccion){
    let numero = Math.floor(Math.random()*3);
    let ordenadorEligio = arr[numero];
    console.log(ordenadorEligio)
    comparacion(ordenadorEligio,eleccion)
}
function comparacion(computadora, usuario){
    if(computadora == "tijera"&& usuario == "tijera"){
        resultado.textContent = "empate";
        mostrarResultados();
    }
    if(computadora == "tijera"&& usuario == "papel"){
        resultado.textContent = "el usuario pierde";
        puntuacionOrdenador ++;
        mostrarResultados();
    }if(computadora == "tijera"&& usuario == "piedra"){
        resultado.textContent = "el usuario gana";
        puntuacionJugador ++;
        mostrarResultados();
    }
    ///////////////////////////////////////
    if(computadora == "papel"&& usuario == "tijera"){
        resultado.textContent = "el usuario gana";
        puntuacionJugador ++;
        mostrarResultados();
    }
    if(computadora == "papel"&& usuario == "papel"){
        resultado.textContent = "empate";
        mostrarResultados();
    }if(computadora == "papel"&& usuario == "piedra"){
        resultado.textContent = "el usuario pierde";
        puntuacionOrdenador ++;
        mostrarResultados();
    }
    /////////////////////////////////////////
    if(computadora == "piedra"&& usuario == "tijera"){
        resultado.textContent = "el usuario pierde";
        puntuacionOrdenador ++;
        mostrarResultados();
    }
    if(computadora == "piedra"&& usuario == "papel"){
        resultado.textContent = "el usuario gana";
        puntuacionJugador ++;
        mostrarResultados();
    }if(computadora == "piedra"&& usuario == "piedra"){
        resultado.textContent = "empate";
        mostrarResultados();
    }
}
function mostrarResultados(){
    contadorUsuario.textContent = "Tus puntos: " + puntuacionJugador;
    contadorOrdenador.textContent = "Puntos de la maquina: " + puntuacionOrdenador;
    
}