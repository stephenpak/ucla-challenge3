var passwordArr = [];
var passwordLength = 8;
var lowerCaseLetter = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCaseLetter = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var specialCharacter = [
  '~',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '+',
  '-',
  '=',
  '[',
  ']',
  '{',
  '}',
  '|',
  '/',
  '?',
];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); ///
  var passwordText = document.querySelector('#password');

  if (correctPrompts) {
    var newPassword = generatePassword();

    passwordText.value = newPassword;
  } else {
    passwordText.value = '';
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
  var pssword = '';
  for (let i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * passwordArr.length);
    password = password + passwordArr[index];
  }
  return password;
}

function getPrompts() {
  passwordArr = [];

  passwordLength = parseInt(
    prompt(
      'Please enter the length of your password? (minimum is 8 and maximum is 128 characters)'
    )
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Incorrect value was entered!  Please try again.');
    return false;
  }

  if (confirm('Would you like lowercase letters in your password?')) {
    passwordArr = passwordArr.concat(lowerCaseLetter);
  }

  if (confirm('Would you like uppercase letters in your password?')) {
    passwordArr = passwordArr.concat(upperCaseLetter);
  }

  if (confirm('Would you like special characters in your password?')) {
    passwordArr = passwordArr.concat(specialCharacter);
  }

  if (confirm('Would you like numbers in your password?')) {
    passwordArr = passwordArr.concat(numbers);
  }
  return true;
}
