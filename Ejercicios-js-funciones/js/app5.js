/* Ejercicio #5
Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, 
retornar la multiplicación del número menor del arreglo y el número mayor del arreglo. */

const numeros = [3, 6, 3, 4, 5]

// Utilizamos el spread operator para descomponer el arreglo
function multiplicarArreglo(numeros) {
    let numeroMenor = Math.min(...numeros);
    let numeroMayor = Math.max(...numeros);

    const resultado = numeroMenor * numeroMayor;
    console.log(`El resultado entre el numero mayor y numero menor es ${resultado}`)
};

multiplicarArreglo(numeros);