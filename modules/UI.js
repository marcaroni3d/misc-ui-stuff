const cssNavbarButton = document.querySelector("[data-css-navbar-button]")
const jsNavbarButton = document.querySelector("[data-js-navbar-button]")
const cssNavbar = document.querySelector(".css-navbar")
const jsNavbar = document.querySelector(".js-navbar")

export default function initUI() {
    cssNavbarButton.addEventListener('click', () => {
        toggleDisplay(cssNavbar)
        cssNavbarButton.classList.toggle('active')
    })
    jsNavbarButton.addEventListener('click', () => {
        toggleDisplay(jsNavbar)
        jsNavbarButton.classList.toggle('active')
    })
}

function toggleDisplay(target) {
    target.style.display = 
        (target.style.display === 'none' || target.style.display === '')
        ? 'block' : 'none'
}