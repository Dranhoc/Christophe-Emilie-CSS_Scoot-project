
// // Sélectionnez la navbar
// const navbar = document.getElementById('myNav');

// // Initialisez une variable pour stocker la position de défilement précédente
// let prevScrollPos = window.scrollY;

// window.addEventListener('scroll', () => {
//     // Obtenez la position de défilement actuelle
//     const currentScrollPos = window.scrollY;

//     // Si l'utilisateur défile vers le haut, ajoutez la classe 'sticky'
//     if (prevScrollPos > currentScrollPos) {
//         navbar.classList.add('sticky');
//         navbar.classList.remove('hidden');
//     } else {
//         // Sinon, retirez la classe 'sticky'
//         navbar.classList.remove('sticky');
//         navbar.classList.add('hidden');
//     }

//     // Mettez à jour la position de défilement précédente
//     prevScrollPos = currentScrollPos;
// });



var lastScrollTop = 0;
navbar = document.getElementById("myNav");
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

document.getElementById('hamburger-img').addEventListener('click', function () {
    var image = document.getElementById('hamburger-img');
    if (image.src.match("hamburger.svg")) {
        image.src = "./assets/cross.svg";
    } else {
        image.src = "./assets/hamburger.svg";
    }
});

window.addEventListener('click', function () {
    let blackDiv = document.getElementById('black-menu');
    let hamburger = document.getElementById('hamburger');
    var image = document.getElementById('hamburger-img');
    //si "black-div" est cliquée, input hamburger checked = false
    blackDiv.addEventListener('click', function () {
        hamburger.checked = false;
        image.src = "./assets/hamburger.svg";
    });
}
);

