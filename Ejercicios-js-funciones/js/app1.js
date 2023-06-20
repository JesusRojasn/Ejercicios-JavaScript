/* Ejercicio #1
Crea una función llamada numeroMayor() que toma tres números como entrada y 
retornar el número mayor de ellos, si son iguales, devolver un String «Los números son iguales». */

const numero1 = parseInt(prompt('Ingrese un numero'));
const numero2 = parseInt(prompt('Ingrese un segundo numero'));
const numero3 = parseInt(prompt('Ingrese un tercer numero'));

function numeroMayor(numero1,numero2,numero3) {
    let calcular = Math.max(numero1,numero2,numero3);
    console.log(`el numero mayor es ${calcular}`)
};

if ( numero1 === numero2 && numero1 === numero3 && numero2 === numero3) {
    console.log(`Los numeros son iguales`)
 } else { numeroMayor(numero1,numero2,numero3);
 
 };