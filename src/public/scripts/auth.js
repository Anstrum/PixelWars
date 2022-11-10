const LOGIN_FORM = "#login-form-content", REGISTER_FORM = "#register-form-content"
let actualForm = REGISTER_FORM


let loginForm = document.getElementById("login-form")
let registerForm = document.getElementById("register-form")
    loginForm.style.visibility = "hidden"
    registerForm.style.visibility = "visible"

let swapForm = document.getElementById("switch-form")
    swapForm.addEventListener("click", SwitchForm)

let loginErrorLabel = document.getElementById("login-error-label")
let registerErrorLabel = document.getElementById("register-error-label")

let loginSendButton = document.getElementById("login-send-button")
let registerSendButton = document.getElementById("register-send-button")

loginSendButton.addEventListener("click", () => {AuthRequest(LOGIN_FORM)})
registerSendButton.addEventListener("click", () => {AuthRequest(REGISTER_FORM)})



function AuthRequest(form) {

    let username = null
    let password = null
    let passwordConfirmation = null

    if(form == LOGIN_FORM)
    {
        username = document.querySelector(form + " .form-username").value
        password = document.querySelector(form + " .form-password").value
    }
    if(form == REGISTER_FORM)
    {
        username = document.querySelector(form + " .form-username").value
        password = document.querySelector(form + " .form-password").value
        passwordConfirmation = document.querySelector(form + " .form-password-confirmation").value
        CheckFormData(username, password, passwordConfirmation)
    }
}

function CheckFormData(username, password, passwordConfirmation) {
    if(actualForm == REGISTER_FORM ) {
        let errors = ""
        if(username == "" || username.length < 8) {
            errors += "Wrong username.<br>";
        }
        if(password == "") {
            errors += "Empty password.<br>"
        } else if(password.length < 8) {
            errors += "Too short password.<br>"
        }
        if(errors != "") {
            ShowError( )
        }
    } else {

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

function ShowError(errors) {
    if(actualForm == REGISTER_FORM)
    {
        loginErrorLabel.innerHTML = errors
        loginErrorLabel.style.visibility = visible
    } else {
        registerErrorLabel.innerHTML = errors
        registerErrorLabel.style.visibility = visible
    }
}