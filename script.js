var lastScrollTop; // 

var navbar = document.querySelector("nav"); // 

window.addEventListener("scroll", function () {
    

    var scrollTop =
         document.documentElement.scrollTop;
    

    if (scrollTop < lastScrollTop) {
        
        if (!navbar.classList.contains("visible")) {
            navbar.classList.add("visible");
        }
        
    } else {
        if (navbar.classList.contains("visible")) {
            navbar.classList.remove("visible");
        }
    }

    lastScrollTop = scrollTop; 
});




 