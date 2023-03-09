// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creates the generatePassword function and asks the user how many characters they want the password to be
function generatePassword(){
 var passwordLength = prompt("How many characters (between 8 and 128) do you want?");
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
   alert("Your password must be between 8 and 128 characters.");
   return "";
}

// Asking what criteria the user wants in their password

var lowercase = confirm("Would you like to include lowercase characters?");
var uppercase = confirm("would you like to incluce uppercase characters?");
var numeric = confirm("Would you like to include numbers?");
var specialCh = confirm("Would you like to include special characters?")

// Check to make sure at least one type of character was selected
if(!lowercase && !uppercase && !numeric && !specialCh){
    alert("At least one type of character must be selected.");
    return "";
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