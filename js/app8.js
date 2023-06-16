// Ejercicio:
// Escribe un programa que pida un número y diga si es divisible por 2(consola)

/* En la variable declarada ocupo el parseFloat para aceptar decimales, aunque se que no son divisibles igualmente
si no acepto decimales redondea la consola y 2.2 lo puede tomar como 2 y daria SI, ademas el replace acepta el decimal ingresado con ""," */
const numero1 = parseFloat(prompt('Ingrese un numero para saber si es divisible por 2').replace(',','.'));

/* let numeroTransformado = parseFloat(numero1.replace(',','.'));
 */
if (numero1 % 2 === 0) {
    console.log(`El numero ${numero1} SI es divisible entre 2`);
} else {
    console.log(`El numero ${numero1} NO es divisible entre 2`);
};