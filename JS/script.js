// Obtenemos una referencia al elemento del menú de navegación
const navMenu = document.querySelector('nav ul');

// Agregamos un evento click al menú de navegación
navMenu.addEventListener('click', (event) => {
    // Verificamos si el elemento clickeado es un enlace
    if (event.target.tagName === 'A') {
        // Obtenemos el texto del enlace clickeado
        const text = event.target.textContent;
        console.log(`Se hizo clic en: ${text}`);
    }
});