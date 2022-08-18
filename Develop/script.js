// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = 'abcdefghijklmonpqrstuvwxyz';
  var upper = lower.toUpperCase();
  var numbers = '0123456789';
  var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

  var characters = 12;

  var hasLower = confirm('has lower case letter?');
  var hasUpper = confirm('has upper case letter?');
  var hasNumber = confirm('has number?');
  var hasSpecial = confirm('has special character?');

  var possible;

  if (hasLower) {
    possible += lower;
  }
  if (hasUpper) {
    possible += upper;
  }
  if (hasNumber) {
    possible += numbers;
  }
  if (hasSpecial) {
    possible += special;
  }

  
  debugger;

  return '';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  for (var i = 0; i < characters; i++) {
    var random = Math.floor(Math.random() * possible.length);
    console.log(random);
    password += password[random];
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
