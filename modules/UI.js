const cssNavbarButton = document.querySelector("[data-css-navbar-button]")
const jsNavbarButton = document.querySelector("[data-js-navbar-button]")
const sideMenuButton = document.querySelector("[data-side-menu-button]")
const cssNavbar = document.querySelector(".css-navbar")
const jsNavbar = document.querySelector(".js-navbar")
const menubar = document.querySelector(".left-menubar")

export default function initUI() {
    cssNavbarButton.addEventListener('click', () => {
        toggleDisplay(cssNavbar)
        cssNavbarButton.classList.toggle('active')
    })
    jsNavbarButton.addEventListener('click', () => {
        toggleDisplay(jsNavbar)
        jsNavbarButton.classList.toggle('active')
    })
    sideMenuButton.addEventListener('click', () => {
        toggleDisplay(menubar)
        sideMenuButton.classList.toggle('active')
    })
}

function toggleDisplay(target) {
    if (target.classList.contains("left-menubar")) {
        target.style.display = 
        (target.style.display === 'none' || target.style.display === '')
        ? 'flex' : 'none'
    } else {
        target.style.display = 
        (target.style.display === 'none' || target.style.display === '')
        ? 'block' : 'none'
    }
}