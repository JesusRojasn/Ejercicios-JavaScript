// Ejercicio: 
// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra "a" (pantalla)


// declaramos variable y aplicamos toLowerCase para transformar a minuscula
const frase = prompt('Ingrese una palabra').toLowerCase();

// Se declara una variable donde se almacenara la cantidad
let contador = 0;

/*Ciclo for para contar la longitud del string y ver donde hay una letra a, ademas
agregue que tambien compare si hay una con acento, al detectar una agrega 1 a contador.*/

for ( let i = 0; i < frase.length ; i++) {
    if (frase.charAt(i) === 'a' || frase.charAt(i) === 'á') {
       contador++;
    };
};


/* Realice una comprobacion solo para cambiar la frase y no sea en plurar cuando exista solo 1 "a", ademas si no
 existe muestre un mensaje*/
if (contador === 1) {
    document.querySelector('body').innerHTML = `La letra "a" aparece ${contador} vez en la frase ''${frase}".`;
}else if (contador > 1){
    document.querySelector('body').innerHTML = `La letra "a" aparece ${contador} veces en la frase ''${frase}".`;
    } else {
        document.querySelector('body').innerHTML = `La letra "a" no aparece en la frase ''${frase}".`;

    };



