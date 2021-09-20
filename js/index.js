const links = document.querySelectorAll('.header__link');
if(links.length > 0) {
    links.forEach(link => {
        link.addEventListener("click", onLink)
    })
}

function onLink(e) {
    e.preventDefault();
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        let currPos = window.scrollY;
        let elemPos = gotoBlock.offsetTop - document.body.scrollTop;
        if (currPos == elemPos) {
          var diff = 50;
        } else {
          var diff = elemPos - currPos;
        }
        window.scrollBy({
          top: diff - 50, 
          left: 0, 
          behavior: 'smooth'
        });
    }
}

const menuBtn = document.querySelector('.header__button');
const menu = document.querySelector('.header__list');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.className = 'header__list-open';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.className= 'header__list list';
    menuOpen = false;
  }
});