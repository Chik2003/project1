alert("welcome to project website");
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
    loginForm.computedStyleMap.marginleft = "-50%";
    loginText.computedStyleMap.marginleft = "-50%";
};
loginBtn.onclick = () => {
    loginForm.computedStyleMap.marginleft = "0%";
    loginText.computedStyleMap.marginleft = "0%";
};
signupLink.onclick = () => {
    signupBtn.click();
    return false;
};
