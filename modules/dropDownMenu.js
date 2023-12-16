const dropdown = document.querySelector("[data-dropdown]")
const dropdownContent = document.querySelector("[data-dropdown-content]")

export default function addListeners() {
    dropdown.addEventListener('mouseover', () => {
        dropdownContent.style.display = 'block'
    })
    dropdown.addEventListener('mouseout', () => {
        dropdownContent.style.display = 'none'
    })
}

