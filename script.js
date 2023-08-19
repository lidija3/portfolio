const hamburger = document.querySelector('.hamburger');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const mobileNavLink = document.querySelectorAll('.mobile-nav-link');
const main = document.querySelector('main');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNavMenu.classList.toggle('active');
    main.classList.toggle('inactive');
})

mobileNavLink.forEach(item => item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNavMenu.classList.remove('active');
    main.classList.remove('inactive');
}))
 