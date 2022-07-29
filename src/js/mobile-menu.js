/* const navBar = document.querySelector('.nav-bar') */


const mobileMenu = document.querySelector('#hamburger-menu')

mobileMenu.addEventListener('click', () => {
    const backdrop = document.querySelector('.backdrop')

    const backdropClasses = backdrop.classList.value

    backdrop.classList.add("show")
    if (backdropClasses === "show") backdrop.classList.remove("show")
})







/* menu.addEventListener('click', () => {
    if (navBar.getAttribute('class') === 'dropOut') {
        navBar.classList.remove('dropOut')
        backdrop.classList.remove("show")
        
    } else {
        navBar.classList.add('dropOut')
        backdrop.classList.add("show")
    }
}) */