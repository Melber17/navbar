
const navToggle = document.querySelector('.nav-toggle')
const links  = document.querySelector('.links'); 

navToggle.addEventListener('click', () => {
    if(links.classList.contains('show-links')) {
        links.classList.remove('show-links')
    } else {
        links.classList.add('show-links')
    }
})