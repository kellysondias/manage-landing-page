const emailInput = document.querySelector(".email-input")
const emailButton = document.querySelector(".email-btn")
const unfoundEmail = document.querySelector(".unfound")
const invalidEmail = document.querySelector(".invalid")

emailButton.addEventListener("click", () => {
    if (emailInput.value === '') {
        invalidEmail.classList.remove("show")
        unfoundEmail.classList.add("show")
    } else {
        unfoundEmail.classList.remove("show")
    }
})

emailInput.addEventListener("input", () => {
    if (emailInput.value !== '') {
        unfoundEmail.classList.remove("show")
    }

    var emailValidation = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (!emailInput.value.match(emailValidation)) {
        unfoundEmail.classList.remove("show")
        invalidEmail.classList.add("show")
    } else {
        invalidEmail.classList.remove("show")
    } 
})

emailInput.addEventListener("blur", () => {
    if (emailInput.value === '') invalidEmail.classList.remove("show")
})