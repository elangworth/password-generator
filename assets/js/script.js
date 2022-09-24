// questions to ask "password length", "uppercase letters", "lowercase letters", "numbers", "symbols"

const askPasswordLength = 'Enter password length between 8 and 128';
const askIncludeUpper = 'Do you want to include uppercase letters?';
const askIncludeLower = 'Do you want to include lowercase letters?';
const askIncludeNumbers = 'Do you want to include numbers?';
const askIncludeSymbols = 'Do you want to include symbols?';
const alertMessage = "Please enter Y or N";

function generatePassword() {
  // Ask user for their choices
  const resultPasswordLength = Number(prompt(askPasswordLength, 'between 8 and 128'));
  
  // If user pressed Cancel or if input was not in scope of question immediately end function 
  if (!resultPasswordLength || isNaN(resultPasswordLength) || (parseInt(resultPasswordLength) < 8) || (parseInt(resultPasswordLength) > 128)) {
    return alert('Please enter a numeric value between 8 and 128');
  }
  const resultUpper = prompt(askIncludeUpper, 'Y/N');
  resultUpper = resultUpper.toUpperCase();
    if (!resultUpper || (resultUpper !== 'Y' && resultUpper !== 'N')) {
      return alert(alertMessage);
    }
  const resultLower = prompt(askIncludeLower, 'Y/N');
  resultLower = resultLower.toUpperCase();
    if (!resultLower || (resultLower !== 'Y' && resultLower !== 'N')) {
      return alert(alertMessage);
    }
  const resultNumbers = prompt(askIncludeNumbers, 'Y/N');
  resultNumbers = resultNumbers.toUpperCase();
    if (!resultNumbers || (resultNumbers !== 'Y' && resultNumbers !== 'N')) {
      return alert(alertMessage);
    }
  const resultSymbols = prompt(askIncludeSymbols, 'Y/N');
  resultSymbols = resultSymbols.toUpperCase();
  if (!resultSymbols || (resultSymbols !== 'Y' && resultSymbols !== 'N')) {
    return alert(alertMessage);
  }

  //sees which characters to include in the password and puts them in an array
  let whatToInclude = [];
  if (resultUpper === 'Y') {
    whatToInclude.push('upper');
  }
  if (resultLower === 'Y') {
    whatToInclude.push('lower');
  }
  if (resultNumbers === 'Y') {
    whatToInclude.push('numbers');
  }
  if (resultSymbols === 'Y') {
    whatToInclude.push('symbols');
  }
  if (whatToInclude.length === 0) {
    return alert("You must select at least one type of character");
  }

  // generates random lowercase letters, uppercase letters, numbers and symbols
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    const symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  //stores functions that generate the random characters
  const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
  }

  //initializes the empty password and then creates it and then adds it to the password
  let generatedPassword = '';
  for (let i = 0; i < resultPasswordLength; i++) {
    const type = whatToInclude[Math.floor(Math.random() * whatToInclude.length)];
    const func = randomFunctions[type];
    generatedPassword += func();
  }

  return generatedPassword;
}

// Get references to the #generate element and the password element
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector('#password');

//puts the password into the textfield
function handleClick() {
  const password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", handleClick); 













