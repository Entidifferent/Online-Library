document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("form-title");
    const confirmPasswordGroup = document.getElementById("confirm-password-group");
    const toggleLink = document.getElementById("toggle-link");
    const submitBtn = document.querySelector(".auth-btn");
    const authForm = document.getElementById("auth-form");

    // Navbar buttons
    const navbarSignIn = document.getElementById("navbar-signin");
    const navbarSignUp = document.getElementById("navbar-signup");

    // Chuyển sang chế độ Sign Up
    function switchToSignUp() {
        formTitle.textContent = "Sign Up";
        confirmPasswordGroup.style.display = "block";
        toggleLink.textContent = "Already have an account? Sign In";
        toggleLink.dataset.mode = "signin";
        submitBtn.textContent = "Sign Up";
        window.location.hash = "signup";
    }

    // Chuyển sang chế độ Sign In
    function switchToSignIn() {
        formTitle.textContent = "Sign In";
        confirmPasswordGroup.style.display = "none";
        toggleLink.textContent = "Don't have an account? Sign Up";
        toggleLink.dataset.mode = "signup";
        submitBtn.textContent = "Sign In";
        window.location.hash = ""; // Xóa hash nếu đang ở chế độ Sign In
    }

    // Xử lý khi nhấn vào liên kết chuyển đổi (toggle-link)
    toggleLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (toggleLink.dataset.mode === "signin") {
            switchToSignIn();
        } else {
            switchToSignUp();
        }
    });

    // Xử lý form submit
    authForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (formTitle.textContent === "Sign Up") {
            alert("Sign Up successful!");
        } else {
            alert("Sign In successful!");
        }
    });

    // Xử lý nút navbar
    navbarSignIn.addEventListener("click", (e) => {
        e.preventDefault();
        switchToSignIn();
    });

    navbarSignUp.addEventListener("click", (e) => {
        e.preventDefault();
        switchToSignUp();
    });

    // Tự động chuyển đổi chế độ theo URL hash
    if (window.location.hash === "#signup") {
        switchToSignUp();
    } else {
        switchToSignIn();
    }
});
