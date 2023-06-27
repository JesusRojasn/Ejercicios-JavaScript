/* EJERCICIO 3
Escribe el código que hará lo siguiente:
 */

// 1. Seleccione la sección con una identificación de contenedor sin usar querySelector.
const seleccion1 = document.getElementById('container');
// 2. Seleccione la sección con una identificación de contenedor usando querySelector.
const seleccion2 = document.querySelector('#container');
// 3. Seleccione toda la lista de elementos con una clase de "second".
const elementos = document.querySelectorAll('.second');
/* 4. Seleccione un elemento de la lista con una clase de “third”, pero solo el elemento de 
la lista dentro de la etiqueta ol. */
const elemento2 = document.querySelector('ol .third');
console.log(elemento2);

// 5. Dar el texto "¡Hola!" a la sección con un ID de contenedor.
const texto = document.createElement('p');
texto.textContent = '¡Hola!';

const primerElemento = seleccion1.firstChild;
seleccion1.insertBefore(texto, primerElemento);

// 6. Agregue la clase principal al div con una clase de pie de página.
const footer = document.querySelector('.footer');
footer.classList.add('principal');
console.log(footer.classList);
// 7. Elimine la clase principal en el div con una clase de pie de página.
footer.classList.remove('principal');
console.log(footer.classList);

// 8. Crea un nuevo elemento li.
const lista = document.createElement('li');

// 9. Dale al li el texto "cuatro".
lista.textContent = 'cuatro';
console.log(lista);

// 10. Agregue el li al elemento ul
const listaPrincipal = document.querySelector('ul')
listaPrincipal.appendChild(lista);