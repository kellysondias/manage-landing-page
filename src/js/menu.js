const navBar = document.querySelector('.nav-bar')
const menu = document.querySelector('.menu')
const backdrop = document.querySelector('.backdrop')

menu.addEventListener('click', () => {
    if (navBar.getAttribute('class') === "dropOut") {
        navBar.classList.remove("dropOut")
        navBar.classList.add("dropIn")
        backdrop.classList.add("hide")
        
    } else {
        backdrop.classList.add("show")
        navBar.classList.remove("dropIn")
        navBar.classList.add("dropOut")
    }
})