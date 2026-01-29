document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links li");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}
function closeMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('open');
}


/**
 * Animação de entrada com JS
*/

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('elemento-animado');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.animacao').forEach(el => {
  observer.observe(el);
});



