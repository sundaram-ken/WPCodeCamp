var passwordBtnEl = $('#password-btn');
console.log(passwordBtnEl);
var passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

passwordBtnEl.click(function () {
  console.log('fucked')
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});
