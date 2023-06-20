/* Ejercicio #7
Crear una función con el nombre de funcionArray() que tome dos arreglos de números 
enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe 
estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6]. */

const array = [2,5,2];
const array2 = [1,5,3];

function funcionArray(array,array2) {
    let nuevoArreglo = [...array,...array2];

    for(let i = 0; i < nuevoArreglo.length; i++){
    nuevoArreglo[i] = nuevoArreglo[i] * 2;
    }
    return nuevoArreglo;
}

const resultado = funcionArray(array,array2);
console.log(resultado);