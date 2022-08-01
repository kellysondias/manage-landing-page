const mobileMenu = document.querySelector('#hamburger-menu')

mobileMenu.addEventListener('click', () => {
    const background = document.querySelector('.backdrop')
    const secondBackgroundClass = background.classList[1]

    background.classList.add("show-menu")

    if (secondBackgroundClass === "show-menu") {
        background.classList.remove("show-menu")
    }
})