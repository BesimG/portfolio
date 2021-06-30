// js functionality for dark mode
document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('theme');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'css/dark-theme.css';
            themeToggle.innerText = 'Light Mode';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'css/light-theme.css';
            themeToggle.innerText = 'Dark Mode';
        }
    });
});