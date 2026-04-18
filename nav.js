// nav.js
document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <a href="/index.html">Home</a>
        <a href="/publications/index.html">Publications</a> 
        <a href="/projects/index.html">Projects</a>
        <a href="/services/index.html">Services</a>
    `;
    const navElement = document.querySelector('nav');
    if (navElement) {
        navElement.innerHTML = navHTML;
    }
});
