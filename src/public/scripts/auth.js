const LOGIN_FORM = "#login-form-content", REGISTER_FORM = "#register-form-content"
let actualForm = REGISTER_FORM


let loginForm = document.getElementById("login-form")
let registerForm = document.getElementById("register-form")
    loginForm.style.visibility = "hidden"
    registerForm.style.visibility = "visible"

let swapForm = document.getElementById("switch-form")
    swapForm.addEventListener("click", SwitchForm)

let loginSendButton = document.getElementById("login-send-button")
let registerSendButton = document.getElementById("register-send-button")

loginSendButton.addEventListener("click", () => {AuthRequest(LOGIN_FORM)})
registerSendButton.addEventListener("click", () => {AuthRequest(REGISTER_FORM)})



function AuthRequest(form) {
    if(form == LOGIN_FORM)
    {
        let username = document.querySelector(form + " .form-username").value
        let password = document.querySelector(form + " .form-password").value

        console.log(username, password)
    }
    if(form == REGISTER_FORM)
    {
        let username = document.querySelector(form + " .form-username").value
        let password = document.querySelector(form + " .form-password").value
        let passwordConfirmation = document.querySelector(form + " .form-password-confirmation").value

        console.log(username, password, passwordConfirmation)
    }
}

function SwitchForm() {

    ClearForms()

    if(actualForm == REGISTER_FORM) {
        swapForm.value = "Sing Up instead"
        registerForm.style.animation = "hide-form 0.5s forwards"
        loginForm.style.animation = "show-form 0.5s forwards"

        actualForm = LOGIN_FORM
    } else {
        swapForm.value = "Sing In instead"
        loginForm.style.animation = "hide-form 0.5s forwards"
        registerForm.style.animation = "show-form 0.5s forwards"

        actualForm = REGISTER_FORM
    }
}

function ClearForms() {
    document.querySelector(LOGIN_FORM + " .form-username").value = ""
    document.querySelector(LOGIN_FORM + " .form-password").value = ""

    document.querySelector(REGISTER_FORM + " .form-username").value = ""
    document.querySelector(REGISTER_FORM + " .form-password").value = ""
    document.querySelector(REGISTER_FORM + " .form-password-confirmation").value = ""
}