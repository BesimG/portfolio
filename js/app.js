const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

// toggle mobile menu
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
    } else {
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
    }
}

// event listener
toggle.addEventListener("click", toggleMenu, false);