// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here

var upperCaseConfirm, lowerCaseConfirm, numberConfirm, specialSymbolConfirm, lengthConfirm, inputValue;

var upperCase = [ 
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

var lowerCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var number = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

var specialSymbol = [
  "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"
];


// Dictate what is needed for the password

function generatePassword () {

  lengthConfirm = prompt ("Password needs to be between 8 and 128 characters. How many would you like?");

      if(!lengthConfirm) {
       alert("Required value");

      } else if (lengthConfirm < 8 || lengthConfirm > 128) {
        lengthConfirm = prompt("You must choose between 8 and 128");

      } else {

      upperCaseConfirm= confirm ("Do you want to utilize upper cases? Click ok for yes, and Cancel for no.");
 
      lowerCaseConfirm = confirm ("Do you want a utilize lower cases? Click ok for yes, and Cancel for no.");
  
      numberConfirm = confirm ("Do you want a utilize numbers? Click ok for yes, and Cancel for no.");

      specialSymbolConfirm = confirm ("Do you want a utilize special symobls? Click ok for yes, and Cancel for no.");

  };
// no answers
  if (!upperCaseConfirm && !lowerCaseConfirm && !numberConfirm && !specialSymbolConfirm) {
    inputValue = alert("You have include atleast 1 criteria for a valid password.");
// yes to all
  }else if (upperCaseConfirm && lowerCaseConfirm && numberConfirm && specialSymbolConfirm) {
    inputValue = upperCase.concat(lowerCase, number, specialSymbol);
//yes to 3 out of 4
  } else if (upperCaseConfirm && lowerCaseConfirm &&numberConfirm) {
    inputValue = upperCase.concat(lowerCase, number);

  } else if (upperCaseConfirm && lowerCaseConfirm && specialSymbolConfirm){
    inputValue = upperCase.concat(lowerCase,specialSymbol);

  }else if (upperCaseConfirm && numberConfirm && specialSymbolConfirm){
    inputValue = upperCase.concat(number, specialSymbol);

  } else if (lowerCaseConfirm && numberConfirm && specialSymbolConfirm) {
    inputValue = lowerCase.concat(number,specialSymbol);
// yes to 2 out 4
  }else if (upperCaseConfirm && lowerCaseConfirm) {
    inputValue = upperCase.concat(lowerCase);

  } else if (upperCaseConfirm && numberConfirm) {
    inputValue = upperCase.concat(number);

  }else if (upperCaseConfirm && specialSymbolConfirm) {
    inputValue = upperCase.concat(specialSymbol);

  }else if (lowerCaseConfirm && numberConfirm){
    inputValue = lowerCase.concat(number);

  } else if (lowerCaseConfirm && specialSymbolConfirm) {
    inputValue = lowerCase.concat(specialSymbol);

  } else if (numberConfirm && specialSymbolConfirm) {
    inputValue = number.concat(specialSymbol);
// 1 out 4 options selected
  } else if (upperCaseConfirm) {
    inputValue = upperCase;

  } else if (lowerCaseConfirm) {
    inputValue = lowerCase;

  }else if (numberConfirm) {
    inputValue = number;

  }else if (specialSymbolConfirm) {
    inputValue = specialSymbol;
  };

//randomizing the selection process 

var passwordBlank = [];

 for (var i = 0; i < lengthConfirm; i++) {
   var passwordChoice = inputValue [Math.floor(Math.random() * inputValue.length)];
   passwordBlank.push(passwordChoice)
 }

 var password = passwordBlank.join ("");
 return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
