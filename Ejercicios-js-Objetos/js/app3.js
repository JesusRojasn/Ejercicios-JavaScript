/* Define un objeto, que tenga dos propiedades: precio y descuento y un método neto. 
El método calculará el precio con el descuento aplicado. Mostrar por consola. */

const polera = {
    precio: 1000,
    descuento: 0.10,
    calculo: function() {
        const resultado = ( this.precio - (this.precio * this.descuento));
        console.log(`El valor del producto con un 10% de descuento aplicado es ${resultado}`)
    }

}

polera.calculo();