const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;

    const saludo = document.querySelector("#saludo");

    saludo.textContent = `hola ${nombre} ${apellido}, gracias por llenar el formulario`;

})