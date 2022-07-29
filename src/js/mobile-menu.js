const mobileMenu = document.querySelector('#hamburger-menu')

mobileMenu.addEventListener('click', () => {
    const background = document.querySelector('.backdrop')
    const secondBackgroundClass = background.classList[1]

    console.log(secondBackgroundClass)

    background.classList.add("show")

    console.log(background.classList[1])

    if (secondBackgroundClass === "show") {
        background.classList.remove("show")
    }
})