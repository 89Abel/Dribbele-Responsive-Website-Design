// Open Close Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }


      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Reveal Animation
const sr = ScrollReveal({
    reset: true
  });
  sr.reveal(`header, .banner_btn_group, .services_title, .two`,{
    origin: 'top',
    interval: 500,
    distance: '50px',
    duration: 3000,
  })
  sr.reveal(`.left_banner, .right_banner, .one, .three, footer`,{
    origin: 'bottom',
    interval: 200,
    distance: '00px',
    duration: 2000,
  })
  sr.reveal(`.trail`,{
    origin: 'left',
    interval: 200,
    distance: '50px',
    duration: 3000,
  })