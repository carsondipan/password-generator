var possibleSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '/', '>', '<', '+', '=', ']', '[',];
var letters = ['a', 'b', 'c', 'd', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var charCount = 8;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", askPrompts);


function askPrompts(){ //Asks the user a series of prompts, stores their choices
  isNumber = confirm('Would you like to include numbers?');
    if(confirm('Do you want numbers in your password?'));
  
    isUppercase = confirm('Would you like to include uppercase letters?');
  
  isLowercase = confirm('Would you like to include lowercase letters?');
  
  isSpecial = confirm('Would you like to include special characters?');
  
  charCount = prompt("How many characters would you like to use? (8-128)");
    
    if(isNaN(charCount) || charCount < 8 || charCount > 128) {
      alert('Length must be a number and between 8 and 128. Try again.')
      return false;
    }


}
  
function generatePassword() {
  //generatePassword based on prompt responses 
  if (charCount < 8 || charCount > 128) {
      alert('Too many/Too few characters.');
    };
    console.log ('character number out of range')

    
}

function writePassword() {
  // Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}






