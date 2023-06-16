// Ejercicio:
// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.(consola)

const numero1 = parseFloat(prompt('Ingrese un numero').replace(',','.'));
const numero2 = parseFloat(prompt('Ingrese otro numero').replace(',','.'));
const numero3 = parseFloat(prompt('Ingrese un numero mas').replace(',','.'));

let resultado = Math.max(numero1, numero2, numero3);

document.querySelector('body').innerHTML = `El numero mayor entre los numeros ${numero1} // ${numero2} // ${numero3} es ${resultado}`;
console.log(`El numero mayor entre los numeros ${numero1} // ${numero2} // ${numero3} es ${resultado}`);