const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

let Fname = document.getElementById("fullName").value
let email = document.getElementById("email").value
let username = document.getElementById("username").value
let password = document.getElementById("password").value

let stringifiedUserInfo = JSON.stringify(Fname + email + username + password)

let submitButton = document.getElementById("submit")
submitButton.addEventListener("click", event.preventDefault())

console.log(stringifiedUserInfo)

fetch ("stringifiedUserInfo"