/* Diseña una función llamada sumaLista() capaz de sumar todos los números 
que forman el array que se le pase como argumento.
ejemplo : Si ejecuto sumaLista([2,4,5,1,2]) deberá devolver como resultado 14 */

const numeros = [2,4,5,1,2];

function sumaLista(numeros) {

    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
        
    };
    console.log(`El total de la sumatoria de los elementos del array es ${resultado}`);
    
};

sumaLista(numeros);