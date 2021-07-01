const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);



// js functionality for dark mode
document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('theme');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'css/dark-theme.css';
            themeToggle.innerText = 'Activate Light Mode';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'css/light-theme.css';
            themeToggle.innerText = 'Activate Dark Mode';
        }
    });
});