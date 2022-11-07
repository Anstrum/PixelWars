let swapContainer = document.getElementById("swap-container")
let swapContainerText = document.querySelector(".swap-container h3")
let swapHideLogin = true;


let loginInputUsername = document.getElementById("login-input-username")
let loginInputPassword = document.getElementById("login-input-password")
let loginSubmitButton = document.getElementById("login-submit-button")

let registerInputUsername = document.getElementById("register-input-username")
let registerInputPassword = document.getElementById("register-input-password")
let registerInputPasswordConfirmation = document.getElementById("register-input-password-confirmation")
let registerSubmitButton = document.getElementById("register-submit-button")


swapContainer.addEventListener("click", () => {

    if(swapHideLogin) {
        swapContainer.style.left = "calc(50%)"
        swapContainer.style.borderRadius = "0 25px 25px 0"
        swapContainer.style.transition = "all 0.3s ease-in"

        swapContainerText.textContent = "Register"

        loginInputUsername.value = ""
        loginInputPassword.value = ""

        swapHideLogin = !swapHideLogin;
    } else {
        swapContainer.style.left = "calc(50% - 300px)"
        swapContainer.style.borderRadius = "25px 0 0 25px"
        swapContainer.style.transition = "all 0.3s ease-in"

        swapContainerText.textContent = "Login"

        registerInputUsername.value = ""
        registerInputPassword.value = ""
        registerInputPasswordConfirmation.value = ""

        swapHideLogin = !swapHideLogin;
    }
})