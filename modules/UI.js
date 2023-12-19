const cssNavbarButton = document.querySelector("[data-css-navbar-button]")
const jsNavbarButton = document.querySelector("[data-js-navbar-button]")
const sideMenuButton = document.querySelector("[data-side-menu-button]")
const imageSliderButton = document.querySelector("[data-image-slider]")
const cssNavbar = document.querySelector(".css-navbar")
const jsNavbar = document.querySelector(".js-navbar")
const menubar = document.querySelector(".left-menubar")
const imageContainer = document.querySelector(".image-container")

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
    imageSliderButton.addEventListener('click', () => {
        toggleDisplay(imageContainer)
        imageSliderButton.classList.toggle('active')
    })
}

function toggleDisplay(target) {
    if (target.classList.contains("left-menubar") || target.classList.contains("image-container")) {
        target.style.display = 
        (target.style.display === 'none' || target.style.display === '')
        ? 'flex' : 'none'
    } else {
        target.style.display = 
        (target.style.display === 'none' || target.style.display === '')
        ? 'block' : 'none'
    }
}