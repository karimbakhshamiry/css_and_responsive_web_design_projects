const toggleMenu = document.getElementById('open-close-menu')
const initialNavMenu = document.getElementById('nav-menu')
const closedNavMenu = document.getElementById('nav-menu-closed')


closedNavMenu.style.display = 'none'

toggleMenu.addEventListener("click", (e) => {

    if (e.target.textContent === '='){
        initialNavMenu.children[0].style.visibility = 'hidden'
        closedNavMenu.style.display = 'flex'
        e.target.textContent = 'X'
    } else {
        initialNavMenu.children[0].style.visibility = 'visible'
        closedNavMenu.style.display = 'none'
        e.target.textContent = '='
    }
})


