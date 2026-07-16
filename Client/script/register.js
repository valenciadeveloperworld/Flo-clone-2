const submit = document.querySelector("#submit")
const form = document.querySelector("#registerForm")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")



form.addEventListener("submit", (e)=> {
  e.preventDefault()
})

submit.addEventListener("click", async ()=> {
   console.log(firstName.value)
   console.log(lastName.value)
   
  const data = {firstName: firstName.value, lastName: lastName.value}

   fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
   })
})