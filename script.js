// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  alert(password)


}

// create generatePassword function
function generatePassword() {
  // generate a password here!
  var myPassword = ''

  // console.log(myLength);
  var lowerCasePool = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // console.log(lowerCasePool)
  var upperCasePool = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var numberPool = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0',]
  var specialPool = ['!', '@', '#', '$', '%'];


  // ask the user for character length
  var myLength = prompt('How many characters do you want for your password?');

  // 5 == 5 --> true
  // 5 == '5' --> true
  // 5 === '5' ---> false

  // 5 != 4 --> true
  // 5 !== '4' --> false

  while(myLength === '' || !parseInt(myLength) || myLength < 8 || myLength > 128) {
    myLength = prompt('Error! Please enter another value. How many characters do you want for your password?');
  }

  // ask the user if they want lowercase characters
  var containsLowerCase = confirm('Do you want lowercase characters?');

  // ask the user if they want uppercase characters
  var containsUpperCase = confirm('Do you want uppercase characters?');

  // ask the user if they want numbers characters
  var containsNumber = confirm('Do you want numbers?');
  // ask the user if they want special characters
  var containsSpecial = confirm('Do you want special characters?');

  var finalPool = [];

  // if the password contains lowercase, finalpool will combine with lowercasePool
  if (containsLowerCase) {
    finalPool = finalPool.concat(lowerCasePool)
  }

  // if the password contains uppercase, finalpool will combine with uppercasePool
  if (containsUpperCase) {
    finalPool = finalPool.concat(upperCasePool)
  }

  // if the password contains numbers, finalpool will combine with numbers
  if (containsNumber) {
    finalPool = finalPool.concat(numberPool)
  }

  // if the password contains specialpool, finalpool will combine with specialPool
  if (containsSpecial) {
    finalPool = finalPool.concat(specialPool)
  }


  // for loop - loop as many as myLength, and for each loop we add a random character

  for (var index = 0; index < myLength; index++) {

    var randomNumber = Math.floor(Math.random() * finalPool.length);

    myPassword = myPassword + finalPool[randomNumber];
  }


  // myPassword = myPassword + 'A';

  // myPassword = myPassword + '1';

  // myPassword = myPassword + 'f';

  // myPassword = myPassword + '8';


  // return the generated password
  return myPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// console.log("Hello" + hello)