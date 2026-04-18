document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    
    // 自动判断当前页面并加粗（active class）
    const navHTML = `
        <a href="/index.html" class="${path.endsWith('index.html') || path === '/' ? 'active' : ''}">Home</a>
        <a href="/publications/index.html" class="${path.includes('publications') ? 'active' : ''}">Publications</a> 
        <a href="/projects/index.html" class="${path.includes('projects') ? 'active' : ''}">Projects</a>
        <a href="/services/index.html" class="${path.includes('services') ? 'active' : ''}">Services</a>
    `;

    const navElement = document.querySelector('nav');
    if (navElement) {
        navElement.innerHTML = navHTML;
    }
});
