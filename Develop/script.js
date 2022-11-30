// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var possibleSpecial = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxzy";
  var numbers = "0987654321";


  var isUppercase = confirm('Would you like to include uppercase letters?');
  var isLowercase = confirm('Would you like to include lowercase letters?');
  var isSpecial = confirm('Would you like to include special characters?');
  var isNumber = confirm('Would you like to include numbers?');
  var charCount = confirm('How many characters would you like to use? (8-128')
  
  if (isUppercase) {
    // USE UPPERCASE
    console.log('uppercase')

    if (isLowercase) {
      // USE LOWERCASE
      console.log('lowercase')
    }

    if (isSpecial) {
      // USE SPECIAL
      console.log('special')
    }

    if (isNumber) {
      // USE NUMBERS
      console.log('number')
    }
  }






}








