/* Ejercicio #4
Crear una función sumaArreglo() que tome como parámetro un arreglo de números, 
retornar la longitud del arreglo + la suma de todos los números del arreglo.

[1,2,3,4] = 
longitud = 4 */

const numeros = [1,2,3,4];

function sumaArreglo(numeros) {

    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
        
    };
    console.log(`El total de la sumatoria de los elementos del array es ${resultado} y su longitud es ${numeros.length}`);
    
};

sumaArreglo(numeros);