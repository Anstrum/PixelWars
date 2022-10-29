let swapContainer = document.getElementById("swap-container")
let swapContainerText = document.querySelector(".swap-container h3")
let swapHideLogin = true;


swapContainer.addEventListener("click", () => {

    if(swapHideLogin) {
        swapContainer.style.left = "calc(50%)"
        swapContainer.style.borderRadius = "0 25px 25px 0"
        swapContainer.style.transition = "all 0.3s"

        swapContainerText.textContent = "Register"

        swapHideLogin = !swapHideLogin;
    } else {
        swapContainer.style.left = "calc(50% - 300px)"
        swapContainer.style.borderRadius = "25px 0 0 25px"
        swapContainer.style.transition = "all 0.3s"

        swapContainerText.textContent = "Login"

        swapHideLogin = !swapHideLogin;
    }

})