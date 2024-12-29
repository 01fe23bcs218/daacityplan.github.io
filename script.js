// Detect scroll event
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const homeSection = document.getElementById('home');
    
    if (window.scrollY > homeSection.offsetHeight) {
        navbar.classList.add('active'); // Add the 'active' class when scrolling down
    } else {
        navbar.classList.remove('active'); // Remove the 'active' class when back on the top
    }
});
