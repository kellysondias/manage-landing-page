const mobileMenu = document.querySelector('#hamburger-menu')

mobileMenu.addEventListener('click', () => {
    const backdrop = document.querySelector('.backdrop')
    const secondBackDropClass = backdrop.classList[1]

    console.log(secondBackDropClass)

    backdrop.classList.add("show")

    if (secondBackDropClass === "show") backdrop.classList.remove("show")

})