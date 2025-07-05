
const newsletter = document.querySelector(".newsletter")
const emailInput = document.querySelector(".emailInput")
const submitButton = document.querySelector("#form-btn")
const warning = document.querySelector(".warning")
const successWarning = document.querySelector(".success-warning")
const successEmail = document.querySelector(".succesful-email")





function showSuccess(){
     successWarning.classList.add("show")
}


function emailValid(e){
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(!emailRegex.test(emailInput.value)){
         warning.classList.add("info")
      } else {
         warning.classList.remove("info")
       }
    

}


submitButton.addEventListener("click", (e) => {
     e.preventDefault()
     showSuccess()

})


emailInput.addEventListener("input", emailValid)





