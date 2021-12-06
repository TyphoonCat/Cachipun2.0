var rondas = parseInt(prompt("Hola Jugador!, ¿cuantas rondas desea jugar? "));

//PLAYER OPTIONS
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

//MACHINE OPTIONS
const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

//CALLING THE ELEMENTS
const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const Resultado = document.getElementById("Resultado");
const JugadorImg = document.getElementById("Jugador-img");
const MaquinaImg = document.getElementById("Maquina-img");

//PLAYER OPTION on CLICK
piedraBtn.addEventListener("click",()=>{
    AJugar(PIEDRA)
});
papelBtn.addEventListener("click",()=>{
    AJugar(PAPEL)
});
tijeraBtn.addEventListener("click",()=>{
    AJugar(TIJERA)
});


function AJugar(jugador){
    const Machine = OpcionMaquina();
    const resultado = calcularResultado(jugador, Machine);

    //MACHINE & PLAYER CHOSEN OPTIONS
    JugadorImg.src = "assets/img/"+jugador+".png";
    MaquinaImg.src = "assets/img/"+Machine+".png";
    
    //RESULT OF THE GAME
    switch(resultado){
        case EMPATE:
            Resultado.innerHTML = ("Es un EMPATE!");
            break;
        case GANASTE:
            Resultado.innerHTML = ("GANASTE!");
            break;
        case PERDISTE:
            Resultado.innerHTML = ("PERDISTE!");
            break;
    }
}


//MACHINE CHOSEN OPTION BECOME A STRING
function OpcionMaquina(){
    const OpcionMaquina = Math.floor(Math.random() * 3);
    switch(OpcionMaquina){
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;     
    }
}

function calcularResultado(jugador, Machine){

    if(jugador === Machine){
        return EMPATE;

    }else if(jugador === PIEDRA){

        if(Machine === PAPEL) return PERDISTE;
        if(Machine === TIJERA) return GANASTE;

    }else if(jugador === PAPEL){

        if(Machine === TIJERA) return PERDISTE;
        if(Machine === PIEDRA) return GANASTE;

    }else if(jugador === TIJERA){

        if(Machine === PIEDRA) return PERDISTE;
        if(Machine === PAPEL) return GANASTE;
    
    }

}

