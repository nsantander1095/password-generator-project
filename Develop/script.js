// Assignment Code
var generateBtn = document.querySelector("#generate");
// Main function declaration
function generatePassword() {
  var lower = 'abcdefghijklmonpqrstuvwxyz'; //string of lowercase possibles
  var upper = lower.toUpperCase(); //string of uppercase possibles
  var numbers = '0123456789'; //string of numeric possibles
  var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'; //string of special possibles
  
  var characters = prompt('Password length must be between 8 and 128 characters.');

  var possible = '';
  var password = '';
  //limits password length to required amounts
  if (characters >= 8 && characters <= 128) {
    var needLower = confirm('Do you require a lowercase letter?');
    var needUpper = confirm('Do you require an uppercase letter?');
    var needNumber = confirm('Do you require a number?');
    var needSpecial = confirm('Do you require a special character?');
    //creates a string of all possible characters from the slected criteria from prompts
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
    //Builds a password by randomly selecting a character from the string of all
    //possible characters and then adding that to the string as many times as the 
    //password length requires
    for (var i = 0; i < characters; i++) {
      var random = Math.floor(Math.random() * possible.length);
      password += possible[random];
    }
    //prints password to the page in lieu of writePassword
    alert(password);
  } else {
    alert('Please reload page.'); //Password must be 8-128 characters.
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
