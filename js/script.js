var menu = document.querySelector(".menu");
var navegar = document.getElementById("navegar");

menu.onclick = function() {
    if (navegar.style.display == "block") {
        navegar.style.display = "none";
    } else {
        navegar.style.display = "block";
    }
};