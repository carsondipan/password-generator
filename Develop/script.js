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
  var possibleSpecial = ['!#$%&()*+,-./:;<=>?@[\]^_`{|}~"];
  var letters = ['a', 'b', 'c', 'd', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = "0987654321";

  var isUppercase = confirm('Would you like to include uppercase letters?');
  var isLowercase = confirm('Would you like to include lowercase letters?');
  var isSpecial = confirm('Would you like to include special characters?');
  var isNumber = confirm('Would you like to include numbers?');
  var charCount = prompt('How many characters would you like to use? (8-128)');
    
  if (charCount < 8 || charCount > 128) {
      alert('Too many/Too few characters.');
    };
    console.log ('character number out of range')

    
}








