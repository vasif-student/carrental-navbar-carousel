const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});