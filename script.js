const characterAmountRange = document.getElementById("charRange");
const characterAmountNumber = document.getElementById("charNumber");
const form = document.getElementById("passwordGeneratorForm");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const passwordDisplay = document.getElementById('passwordz');

const UPPERCASE_CHAR_CODES = arrayGenerator(65, 90);
const LOWERCASE_CHAR_CODES = arrayGenerator(97, 122);
const NUMBER_CHAR_CODES = arrayGenerator(48, 57);
const SYMBOL_CHAR_CODES = arrayGenerator(33, 47)
  .concat(arrayGenerator(58, 64))
  .concat(arrayGenerator(91, 96))
  .concat(arrayGenerator(123, 126));

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  characterAmount = characterAmountNumber.value;
  includeNumbersElement = includeNumbers.checked;
  includeSymbolsElement = includeSymbols.checked;
  includeUppercaseElement = includeUppercase.checked;
  const newPassword = generatePassword(
    characterAmount,
    includeUppercaseElement,
    includeNumbersElement,
    includeSymbolsElement
  );
    passwordDisplay.innerText = newPassword;
});

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}

// console.log(SYMBOL_CHAR_CODES)

function generatePassword(chars, uc, nums, smbs) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if(uc) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if(nums) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if(smbs) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

    const password = []
    for(let i=0; i<chars; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        password.push(String.fromCharCode(characterCode))
    }

    return password.join('')
    
}

//based on ascii character code table and cheat sheet.
function arrayGenerator(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
