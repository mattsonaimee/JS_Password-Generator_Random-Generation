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










// ***********************copied from Google*******************
// generate random password
function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}



// **************aimee


function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}



// Start working code
// User input
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start password values
number =[1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
alpha= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Space used for uppercase conversion
space = [];

// Function used to return alpha characters to uppercaseo
var toUpper = function (x) {
  return x.toUpperCase();
}

// Creates variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = documnet.querySelector("#generate");

// Start of user input
get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {

  // user input password length
  enter = parseInt(prompt("How many characters would you like for you password lenth? (Password must be between 8-128 characters)"));
  
  if (!enter) {
    alert("You must input a value.");
  } else if(enter < 8 || enter > 128) { 
    enter = parseInt(prompt("Password length must be between 8 and 128 characters."));

    //confirm after user input validated
    } else {
    confirmNumber = confirm("Will this contain a number?");
    confirmCharacter = confirm("Will this contain special character?");
    confirmLowercase = confirm("Will this contain lowercase letters?");
    confirmUppercase = confirm("Will this contain uppercase letters?");
  };

//NEED TO FINISH CODE STARTONG HERE
