const registerForm =
document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const fullName =
    document.getElementById("fullname").value;

    const username =
    document.getElementById("username").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const confirmPassword =
    document.getElementById("confirmPassword").value;


    if(password !== confirmPassword){

        alert("FLIXIT\n\nPasswords do not match!");

        return;
    }


    // Save User Details

    localStorage.setItem("name", fullName);

    localStorage.setItem("username", username);

    localStorage.setItem("email", email);

    localStorage.setItem("loggedIn", "true");


    alert("FLIXIT\n\nAccount Created Successfully!");

    window.location.href = "dashboard.html";

});