const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');

let currentSection = 'home';

window.addEventListener('scroll', () => {

    sections.forEach( section => {
        if (window.scrollY >= section.offsetTop) {
            currentSection = section.id;
        }
    })

    navLinks.forEach( link => {
        if (link.href.includes(currentSection)) {
            document.querySelector('.current-page').classList.remove('current-page');
            link.classList.add('current-page');
        }
    })
})


