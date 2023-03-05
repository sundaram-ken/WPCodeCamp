var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function (event) {
    event.preventDefault();

    // TODO: Create user object from submissio
    var first = firstNameInput.value
    var last = lastNameInput.value
    var email = emailInput.value
    var pass = passwordInput.value

    var obj = {
        firstName: first,
        lastName: last,
        emailAddy: email,
        passWord: pass
    };

    strObj = JSON.stringify(obj);

    // TODO: Set new submission to local storage 
    localStorage.setItem("userObj", strObj);

});
