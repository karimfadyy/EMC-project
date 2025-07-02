function validateLogin(event) {
    event.preventDefault();

    const password = document.forms["userForm"]["password"].value;
    const messageBox = document.getElementById("loginMessage");
    const errorBox = document.getElementById("ErrorMessage");

    if (password.length < 6) {
        errorBox.textContent = "Short Password.";
        errorBox.style.display = "block";

        setTimeout(() => {
            errorBox.style.display = "none";
        }, 1500);
        return false;
    }
    messageBox.textContent = "Login Succesful! Redirecting...";
    messageBox.style.display = "block";

    localStorage.setItem("isLoggedIn", "true");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);

    return false;
}
function validateRegister(event) {
    event.preventDefault();

    const username = document.forms["registerForm"]["username"].value;
    const email = document.forms["registerForm"]["email"].value;
    const password = document.forms["registerForm"]["password"].value;
    const confirm_pass = document.forms["registerForm"]["confirmPassword"].value;
    const messageBox = document.getElementById("loginMessage");
    const errorBox = document.getElementById("ErrorMessage");

    if (username.length < 6) {
        errorBox.textContent = "Short username. (Min 6 letters)";
        errorBox.style.display = "block";

        setTimeout(() => {
            errorBox.style.display = "none";
        }, 1500);
        return false;
    }

    if (password.length < 6 || confirm_pass.length < 6) {
        errorBox.textContent = "Short Password. (Min 6 characters)";
        errorBox.style.display = "block";

        setTimeout(() => {
            errorBox.style.display = "none";
        }, 1500);
        return false;
    }

    if (password != confirm_pass) {
        errorBox.textContent = "Not the same password!";
        errorBox.style.display = "block";

        setTimeout(() => {
            errorBox.style.display = "none";
        }, 1500);
        return false;
    }
    messageBox.textContent = " Succesful! Redirecting...";
    messageBox.style.display = "block";

    localStorage.setItem("isLoggedIn", "true");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);

}
window.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.getElementById("login-link");
    const logoutLink = document.getElementById("logout-link");

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn == "true") {
        loginLink.style.display = "none";
        logoutLink.style.display = "inline";
    }
    else {
        loginLink.style.display = "inline";
        logoutLink.style.display = "none";
    }
    if (logoutLink) {
        logoutLink.addEventListener("click", () => {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "login.html";
        });
    }
});
