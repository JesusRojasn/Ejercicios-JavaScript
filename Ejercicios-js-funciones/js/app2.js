/* Ejercicio #2
Escriba una función con el nombre de esVocal() que tome un carácter, devuelva 
True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
 */

const vocal = prompt('Ingrese un caracter').toLowerCase();


function esVocal(vocal) {
    if (vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u') {
    console.log(true)
    
    } else if(vocal.length > 1 ){
        console.log(`Ingresaste mas de un caracter`)

    } else { console.log(false)

    } 
};
esVocal(vocal);