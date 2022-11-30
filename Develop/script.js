var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '/', '>', '<', '+', '=', ']', '[',];
var lowercase = ['a', 'b', 'c', 'd', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var charCount = 8;
var choices = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", askPrompts);


function askPrompts() { //Asks the user a series of prompts, stores their choices
  initChoices = [];

  charCount = prompt("How many characters would you like to use? (8-128)");

  if (isNaN(charCount) || charCount < 8 || charCount > 128) {
    alert('Length must be a number and between 8 and 128. Try again.')
    return false;
  }

  if (confirm('Would you like to include numbers?')) {
    choices = choices.concat(numbers);
  }

  if (confirm('Would you like to include uppercase letters')) {
    choices = choices.concat(uppercase);
  }

  if (confirm('Would you like to include lowercase letters?')) {
    choices = choices.concat(lowercase);
  }

  if (confirm('Would you like to include special characters?')) {
    choices = choices.concat(special);
  }
  return true;
}

function writePassword() {
  // Write password to the #password input
  var successPrompts = askPrompts();

  if (successPrompts) {
    var newPass = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPass;
  }


}

function generatePassword() {
  //generatePassword based on prompt responses 
  var password = "";
  for (var i = 0; i < charCount; i++) {
    var randLetter = Math.floor(math.random() * choices.length);
    password = password + choices[randLetter];
  }
  return password;
}








