var generateBtn = document.querySelector("#generate");

var characters = "abcdefghijklmnñopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var numbers = "0123456789";
var simbols = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

function generatePassword() {
  var passLink = prompt("How long does the password need to be?");
  console.log(passLink);

  if (passLink <= 128 && 7 < passLink) {
    var hasupperCasse = confirm("Do you want to have uppercase?");
    if (hasupperCasse) {
      var concat1 = characters + uppers;
      var espe = confirm("Do you want to have special characters?");
      if (espe) {
        var concat2 = concat1 + simbols;
        var numb = confirm("Do you want to have numbers?");
        if (numb) {
          var base = concat2 + numbers;
        } else {
          var base = concat2;
        }
      } else {
        var numer = confirm("Do you want to have numbers?");
        if (numer) {
          var base = concat1 + numbers;
        } else {
          var base = concat1;
        }
      }
    } else {
      var espet = confirm("Do you want to have special characters?");
      if (espet) {
        var concat3 = characters + simbols;
        var numbt = confirm("Do you want to have numbers?");
        if (numbt) {
          var base = concat3 + numbers;
        } else {
          var base = concat3;
        }
        return; 
      } else {
        var numb = confirm("Do you want to have numbers?");
        if (numb) {
          var base = numbers + characters;
        } else {
          prompt("You need to select at least one option");
          return; 
        }
      }
    }
  } else {
    alert("Select a number between 8 and 128")
    return; 
  }

  var finalPassword = "";
  for (var i = 0; i < passLink; i++) {
    var random = Math.floor(Math.random() * base.length);
    finalPassword += base.charAt(random);
  }
  return finalPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
