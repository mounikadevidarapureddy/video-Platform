

const eye = document.getElementById("eye");
const password = document.getElementById("password");

eye.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        eye.innerHTML = "🙈";

    } else {

        password.type = "password";
        eye.innerHTML = "👁";

    }

});



document
.getElementById("loginForm")
.addEventListener("submit", (e) => {

    e.preventDefault();

    // Login Session Save
    localStorage.setItem("loggedIn", "true");

    // Success Message
    alert("FLIXIT\n\nLogin Successful!");

    // Redirect Dashboard
    window.location.href = "dashboard.html";

});