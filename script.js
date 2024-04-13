
// Sélectionnez la navbar
const navbar = document.getElementById('myNav');

// Initialisez une variable pour stocker la position de défilement précédente
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    // Obtenez la position de défilement actuelle
    const currentScrollPos = window.pageYOffset;

    // Si l'utilisateur défile vers le haut, ajoutez la classe 'sticky'
    if (prevScrollPos > currentScrollPos) {
        navbar.classList.add('sticky');
    } else {
        // Sinon, retirez la classe 'sticky'
        navbar.classList.remove('sticky');
    }

    // Mettez à jour la position de défilement précédente
    prevScrollPos = currentScrollPos;
});



