// js functionality for dark mode
document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('theme');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('dark')){
            themeStylesheet.href = 'css/light-theme.css';
            themeToggle.innerText = 'Switch to dark mode'
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'css/dark-theme.css';
            themeToggle.innerText = 'Switch to light mode';
        }
    })
})