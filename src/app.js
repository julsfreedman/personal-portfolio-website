const hamburgerMenu = document.getElementById('hamburger')
const menuItems = document.getElementById('menu-items')

function toggleMenu() {
    menuItems.classList.toggle('show')
}

hamburgerMenu.addEventListener('click', toggleMenu)