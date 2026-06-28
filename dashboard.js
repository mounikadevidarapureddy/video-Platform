

if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}


document.getElementById("profileName").textContent =
localStorage.getItem("name") || "User";

document.getElementById("profileUsername").textContent =
"@" + (localStorage.getItem("username") || "username");

document.getElementById("profileEmail").textContent =
localStorage.getItem("email") || "No Email";

// PROFILE DROPDOWN

const profileBtn =
document.getElementById("profileBtn");

const profileMenu =
document.getElementById("profileMenu");

profileBtn.addEventListener("click", () => {
    profileMenu.classList.toggle("active");
});



const openProfile =
document.getElementById("openProfile");

const profileModal =
document.getElementById("profileModal");

const closeProfile =
document.getElementById("closeProfile");

openProfile.addEventListener("click", (e) => {

    e.preventDefault();

    profileModal.classList.add("show");

    profileMenu.classList.remove("active");

});

closeProfile.addEventListener("click", () => {

    profileModal.classList.remove("show");

});



function logout() {

    const confirmLogout = confirm(
        "FLIXIT\n\nAre you sure you want to logout?"
    );

    if (confirmLogout) {

        localStorage.removeItem("loggedIn");

        window.location.href = "index.html";

    }

}