/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== Business ===============*/
window.addEventListener("load", () => {

    const scroll = document.getElementById("logoScroll");

    // Duplicar contenido hasta que cubra mínimo 2 veces el ancho de pantalla
    while (scroll.scrollWidth < window.innerWidth * 2) {
        scroll.innerHTML += scroll.innerHTML;
    }

    let position = 0;
    const speed = 0.5;

    function animate() {
        position -= speed;

        if (Math.abs(position) >= scroll.scrollWidth / 2) {
            position = 0;
        }

        scroll.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});


/*========== SERVICES SCROLL ==========*/
const wrapper = document.getElementById("servicesWrapper");
const section = document.querySelector(".services-section");

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  if (scrollTop >= sectionTop && scrollTop <= sectionTop + sectionHeight) {

    // Progreso entre 0 y 1
    let progress = (scrollTop - sectionTop) / (sectionHeight - window.innerHeight);

    // Ajusta cuánto quieres que se mueva
    let moveY = progress * (wrapper.scrollHeight - window.innerHeight);

    wrapper.style.transform = `translateY(-${moveY}px)`;
  }

});