const dropDownButton = document.querySelector(".ui-dropdown")

import { toggleDisplay } from "./dropDownMenu.js"

export function initUI() {
    dropDownButton.addEventListener('click', () => {
        toggleDisplay()
        dropDownButton.classList.toggle('active')
    })
}