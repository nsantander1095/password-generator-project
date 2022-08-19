// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = 'abcdefghijklmonpqrstuvwxyz';
  var upper = lower.toUpperCase();
  var numbers = '0123456789';
  var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

  var characters = prompt('Password length must be between 8 and 128 characters.');

  var possible = '';
  var password = '';

  if (characters >= 8 && characters <= 128) {
    var needLower = confirm('Do you require a lowercase letter?');
    var needUpper = confirm('Do you require an uppercase letter?');
    var needNumber = confirm('Do you require a number?');
    var needSpecial = confirm('Do you require a special character?');

    if (needLower) {
      possible += lower;
    }
    if (needUpper) {
      possible += upper;
    }
    if (needNumber) {
      possible += numbers;
    }
    if (needSpecial) {
      possible += special;
    }
    for (var i = 0; i < characters; i++) {
      var random = Math.floor(Math.random() * possible.length);
      console.log(random);
      password += possible[random];
    }
    alert(password);
  } else {
    alert('Please reload page.');
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
