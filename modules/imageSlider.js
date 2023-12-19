export function imageSlider() {
    const slides = document.querySelectorAll(".slide")
    const navLinks = document.querySelectorAll(".slider-navlink")
    const navButtonPrev = document.getElementById("nav-button--prev")
    const navButtonNext = document.getElementById("nav-button--next")

    let currentSlide = 0

    navButtonPrev.addEventListener('click', () => {
        changeSlide(currentSlide - 1)
    })
    navButtonNext.addEventListener('click', () => {
        changeSlide(currentSlide + 1)
    })

    navLinks.forEach((link, linkIndex) => {
        link.addEventListener('click', () => {
            console.log(link, linkIndex)
            if (currentSlide !== linkIndex) {
                changeSlide(linkIndex)
            }
        })
    })

    function changeSlide(moveTo) {
        if (moveTo >= slides.length) { moveTo = 0 }
        if (moveTo < 0) { moveTo = slides.length - 1}

        slides[currentSlide].classList.toggle('active-slide')
        navLinks[currentSlide].classList.toggle('active-navlink')
        slides[moveTo].classList.toggle('active-slide')
        navLinks[moveTo].classList.toggle('active-navlink')

        currentSlide = moveTo
    }
}

