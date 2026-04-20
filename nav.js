document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    
    const navHTML = `
        <a href="/" class="${path === '/' || path.endsWith('index.html') ? 'active' : ''}">Home</a>
        <a href="/publications/" class="${path.includes('publications') ? 'active' : ''}">Publications</a> 
        <a href="/projects/" class="${path.includes('projects') ? 'active' : ''}">Projects</a>
        <a href="/services/" class="${path.includes('services') ? 'active' : ''}">Services</a>
    `;

    const navElement = document.querySelector('nav');
    if (navElement) {
        navElement.innerHTML = navHTML;
    }
});
