// Ejercicio:
// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.(consola)

/* Declare dos variables y le aplique parseFloat para transformar el texto string a numero y que acepte numeros con decimales, ademas 
utilice el metodo replace, con la finalidad de que el usuario pueda usar la "," tambien*/

const numero1 = parseFloat(prompt('Ingrese un numero').replace(',','.'));
const numero2 = parseFloat(prompt('Ingrese otro numero').replace(',','.'));

// Use Math para ver cual es el mayor y almacenar el resultado en la variable declarada
let resultado = Math.max(numero1, numero2);

// Mostre en el body y ademas en consola
document.querySelector('body').innerHTML = `El numero mayor entre los numeros ${numero1} y ${numero2} es ${resultado}`;
console.log(resultado);
