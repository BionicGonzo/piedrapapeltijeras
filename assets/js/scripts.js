// Entrada
var jugadas = prompt("Digita la cantidad de veces que quieres jugar");
var usuario = 0;
var centinela = 0;

/* Opciones >>> 1: Piedra | 2: Papel | 3: Tijeras */

// Proceso
/* Variables >>> máximo 4 mínimo 1 para que el rango de resultados sea solo de 1 a 3, ocupando Math.floor más abajo */
var max = 4;
var min = 1;

while(centinela<jugadas) {
    var random = Math.random()*(max-min)+min;
    var maquina = Math.floor(random);
    /* Solicitud al usuario para ingresar un número */
    usuario = parseInt(prompt("Ingresa tu jugada. 1: Piedra, 2: Papel, 3: Tijeras."));
    /* Validación de opción ingresada */
    if(usuario>3 || usuario<0) {
        alert("La jugada no es válida. Inténtalo de nuevo.");
    }
    else {
        /* Número ingresado es entre 1 y 3 */
        /* Gana Piedra a Tijeras */
        if(usuario==1&&maquina==3){
            alert(`¡Has ganado! Jugaste ${usuario} Piedra y la IA jugó ${maquina} Tijeras.`);
        }
        /* Pierde Piedra a Papel */
        else if(usuario==1&&maquina==2){
            alert(`¡Has perdido! Jugaste ${usuario} Piedra y la IA jugó ${maquina} Papel.`);
        }
        /* Gana Papel a Piedra */
        else if(usuario==2&&maquina==1){
            alert(`¡Has ganado! Jugaste ${usuario} Papel y la IA jugó ${maquina} Piedra.`);
        }
        /* Pierde Papel a Tijeras */
        else if(usuario==2&&maquina==3){
            alert(`¡Has perdido! Jugaste ${usuario} Papel y la IA jugó ${maquina} Tijeras.`);
        }
        /* Gana Tijeras a Papel */
        else if(usuario==3&&maquina==2){
            alert(`¡Has ganado! Jugaste ${usuario} Tijeras y la IA jugó ${maquina} Papel.`);
        }
        /* Pierde Tijeras a Piedra */
        else if(usuario==3&&maquina==1){
            alert(`¡Has perdido! Jugaste ${usuario} Papel y la IA jugó ${maquina} Piedra.`);
        }
        /* Empate */
        else {
            alert(`¡Has empatado! (1: Piedra, 2: Papel, 3: Tijeras) Jugaste ${usuario} y la IA también.`);
        }
    }
    centinela++;
}