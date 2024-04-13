
// Sélectionnez la navbar
const navbar = document.getElementById('myNav');

// Initialisez une variable pour stocker la position de défilement précédente
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    // Obtenez la position de défilement actuelle
    const currentScrollPos = window.scrollY;

    // Si l'utilisateur défile vers le haut, ajoutez la classe 'sticky'
    if (prevScrollPos > currentScrollPos) {
        navbar.classList.add('sticky');
        navbar.classList.remove('hidden');
    } else {
        // Sinon, retirez la classe 'sticky'
        navbar.classList.remove('sticky');
        navbar.classList.add('hidden');
    }

    // Mettez à jour la position de défilement précédente
    prevScrollPos = currentScrollPos;
});



