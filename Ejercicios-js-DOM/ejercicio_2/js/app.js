/* EJERCICIO 1
Modificar el estilo del texto del párrafo mediante código javascript. 
Ejemplo de archivo HTML:
Al hacer clic en el botón, la fuente, el tamaño de fuente y el 
color del texto del párrafo deben cambiar. */


const datos = document.querySelector('#text');
console.log(datos)

function js_style() {
    
    datos.style.fontFamily = 'Arial';
    datos.style.fontSize = '30px';
    datos.style.color = 'blue';

}