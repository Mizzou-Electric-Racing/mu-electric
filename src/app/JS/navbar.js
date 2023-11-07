
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.container');
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});