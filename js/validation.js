const form = document.querySelector(".nm-form")
const newsletter = document.querySelector(".newsletter")
const emailInput = document.querySelector(".emailInput")
const submitButton = document.querySelector("#form-btn")
const warning = document.querySelector(".warning")
const successWarning = document.querySelector(".success-warning")
const closeBtn = document.querySelector(".close-btn")

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form.addEventListener("submit", async (e) => {
      e.preventDefault()
      let email = emailInput.value
      if (!emailRegex.test(email)) {
         warning.classList.add("info")
         setTimeout(() => {
            warning.classList.remove("info")

         }, 4000)
         return;
      }


      try {
         submitButton.disabled = true;
         warning.classList.add("info")
         warning.innerHTML = "Sending"
         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               email: email
            }),
         })

         if (!response.ok) {
            throw new Error(`hata ${response}`)
         }


         const data = await response.json()
         console.log(data)
         successWarning.classList.add("show")

      } catch (error) {
         console.error(error)
         warning.classList.add("info")
         warning.innerHTML = "Error Happened"
      }

   }

)

closeBtn.addEventListener("click", () => {
   successWarning.classList.remove("show")
   warning.innerHTML = ""
})