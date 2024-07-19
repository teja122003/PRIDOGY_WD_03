document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('load', function() {
        loader.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.add('font-change');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.remove('font-change');
        }
    });
});
