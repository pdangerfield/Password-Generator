// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  prompt("How many characters do you want?")
  var response = prompt;
  console.log(prompt)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);