/* Ejercicio #6
Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como 
parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del 
nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false. */

const array = [1,2,3,2];
const array2 = [4,5,6,9,9,0];

function booleanoArray(array, array2) {
    let nuevoArray = [...array,...array2];

    if (nuevoArray.length >= 10) {
    console.log(true);
    } else {
        console.log(false)
    }
}

booleanoArray(array, array2);