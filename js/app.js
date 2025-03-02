const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('modal-open');
});

// Crear un botón de cerrar
const closeButton = document.createElement('span');
closeButton.innerHTML = '&times;'; // Símbolo de la X
closeButton.classList.add('close-modal');
navLinks.appendChild(closeButton);

// Evento para cerrar el modal
closeButton.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.classList.remove('modal-open');
});

// Estilos para el modal
const style = document.createElement('style');
style.innerHTML = `
    .modal-open {
        overflow: hidden; /* Evita el desplazamiento de fondo */
    }
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .nav-links.active a {
        color: white;
        font-size: 2rem;
        margin: 1rem 0;
    }
    .close-modal {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 2rem;
        color: white;
        cursor: pointer;
    }
`;
document.head.appendChild(style);


function enviarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    const nombre = document.querySelector('input[placeholder="Nombre"]').value;
    const correo = document.querySelector('input[placeholder="Correo electrónico"]').value;
    const mensaje = document.querySelector('textarea[placeholder="Mensaje"]').value;

    // Aquí puedes agregar la lógica para enviar el formulario, como una llamada a una API o un servicio de correo

    console.log(`Nombre: ${nombre}, Correo: ${correo}, Mensaje: ${mensaje}`);
    alert('Formulario enviado con éxito!'); // Mensaje de éxito
}

// Agregar el evento de envío al formulario
const formulario = document.querySelector('form');
formulario.addEventListener('submit', enviarFormulario);
