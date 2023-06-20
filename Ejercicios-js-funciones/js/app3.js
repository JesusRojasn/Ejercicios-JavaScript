/* Ejercicio #3
Crea una función llamada generar_caracteres() que tome como parámetro un 
número entero (n) y un carácter, retornar el carácter multiplicado por n. 
Por ejemplo, generar_caracteres(5,x), debería retornar “String” «xxxxx». */

const numero = parseInt(prompt('Ingrese un numero'));
const letra = prompt('Ingrese una letra');

function generar_caracteres(numero, letra)  {
  resultado = letra.repeat(numero);
  console.log(resultado)
}

generar_caracteres(numero, letra);