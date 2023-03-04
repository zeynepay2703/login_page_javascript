const password = document.getElementById("password");
const checkbox = document.getElementById("icon-password");
let switched=false;
checkbox.addEventListener("click", (e) => {
    switched=!switched;
    if (switched == true) {
        password.setAttribute("type", "text");
    } else {
        password.setAttribute("type", "password");
    }
})
password.addEventListener("change", (z) => {
    console.log(z.target.value);
})
