const navbar = document.querySelector(".navbar")

export function toggleDisplay() {
    navbar.style.display = 
        (navbar.style.display === 'none' || navbar.style.display === '') 
            ? 'block' : 'none'
}

