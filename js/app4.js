// Ejercicio:
/* Escribe un programa de dos líneas que pida el nombre del usuario 
con un prompt y escriba un texto que diga “Hola nombreUsuario”(pantalla) */

const consulta = prompt('Cual es tu nombre?');
document.querySelector('body').innerHTML = `Hola ${consulta}`