// Archivo: script.js

// Función para suavizar el desplazamiento a los enlaces del menú
function suaveDesplazamiento(evento) {
    evento.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const targetId = evento.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  // Agregar event listeners a los enlaces del menú
  const menuLinks = document.querySelectorAll('header nav a');
  menuLinks.forEach(link => {
    link.addEventListener('click', suaveDesplazamiento);
  });
  
  // Validación del formulario de contacto
  const form = document.querySelector('#contacto form');
  form.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita el envío del formulario
  
    // Obtener los valores de los campos
    const nombre = document.querySelector('#contacto form input[name="nombre"]').value;
    const email = document.querySelector('#contacto form input[name="email"]').value;
    const mensaje = document.querySelector('#contacto form textarea[name="mensaje"]').value;
  
    // Validar los campos
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, a través de una API
    console.log('Formulario enviado:', { nombre, email, mensaje });
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
  
    // Limpiar los campos del formulario
    form.reset();
  });

// Seleccionar elementos
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Alternar clases al hacer clic en el menú hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
