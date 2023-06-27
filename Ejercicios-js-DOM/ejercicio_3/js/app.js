/* EJERCICIO 2
Escriba una función de JavaScript para obtener los valores de Nombre y 
Apellido del siguiente formulario.

Imprime los nombres en la consola. */


const form = document.querySelector('#form1');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const nombre = document.querySelector('#fname').value;
    const apellido = document.querySelector('#lname').value;

    resultado = console.log(`Hola ${nombre} ${apellido}`);

});

// El resultado en consolta se va muy rapido debido al envio del formulario
/* function getFormvalue() {
    

    const nombre = document.querySelector('#fname').value;
    const apellido = document.querySelector('#lname').value;

    resultado = console.log(`Hola ${nombre} ${apellido}`);
} */