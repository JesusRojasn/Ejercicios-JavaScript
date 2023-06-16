/* Crear un objeto que se usa para guardar información sobre las calificaciones de un alumno. 
El curso contiene tres materias: Inglés, programación y HTM, y el objeto contendrá el nombre del 
alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media(promedio) de sus calificaciones. */

const alumno = {
    nombre: 'Jesus Rojas',
    calificaciones: {
        ingles: 10,
        programacion: 7,
        html: 8,
        promedio: function (){
            const calculo = (this.ingles + this.programacion + this.html) / 3;
            console.log(`El alumno ${alumno.nombre} tiene un promedio de ${calculo}`);
        }
    }
}

alumno.calificaciones.promedio();