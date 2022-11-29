/**
 * Generate a password
 *
 * @param {number} length Password length
 * @param {boolean} uppercase Include uppercase letters
 * @param {boolean} lowercase Include lowercase letters
 * @param {boolean} numbers Include numbers
 * @param {boolean} symbols Include symbols
 * @returns {string} Generated password
 */
export const generatePassword = (
  length: number = 5,
  uppercase: boolean = false,
  lowercase: boolean = false,
  numbers: boolean = false,
  symbols: boolean = false
): string => {
  // Define possible characters array
  const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
  const lowercaseArray = characterCodes.map((letter) =>
    String.fromCharCode(letter)
  );
  const uppercaseArray = lowercaseArray.map((letter) => letter.toUpperCase());

  // Define available characters for the password generation
  let availableCharacters = [
    ...(uppercase ? uppercaseArray : []),
    ...(lowercase ? lowercaseArray : []),
    ...(numbers ? numbersArray : []),
    ...(symbols ? symbolsArray : []),
  ];
  availableCharacters = availableCharacters.sort(() => Math.random() - 0.5);

  return availableCharacters.slice(0, length).join("");
};
