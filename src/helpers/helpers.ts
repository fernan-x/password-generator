export const NUMBERS_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const SYMBOLS_ARRAY = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
export const UPPERCASE_ARRAY = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
export const LOWERCASE_ARRAY = [
  ,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

/**
 * Generate a password
 *
 * @param {number} length Password length
 * @param {boolean} uppercase Include uppercase letters
 * @param {boolean} numbers Include numbers
 * @param {boolean} symbols Include symbols
 * @returns {string} Generated password
 */
export const generatePassword = (
  length: number = 5,
  uppercase: boolean = false,
  numbers: boolean = false,
  symbols: boolean = false
): string => {
  // Define available characters for the password generation
  let availableCharacters = [
    ...LOWERCASE_ARRAY,
    ...(uppercase ? UPPERCASE_ARRAY : []),
    ...(numbers ? NUMBERS_ARRAY : []),
    ...(symbols ? SYMBOLS_ARRAY : []),
  ];
  availableCharacters = availableCharacters.sort(() => Math.random() - 0.5);

  return availableCharacters.slice(0, length).join("");
};

/**
 * Sanitize a label to transform it into a valid html id.
 * This method will :
 * - Transform all uppercase into lowercase
 * - Remove all special characters
 * - Replace multiple spaces into one
 * - Replace spaces with dashes
 *
 * @param {string} value Value to sanitize
 * @returns {string} Sanitized value
 */
export const sanitizeToId = (value: string): string => {
  return value
    .toLowerCase()
    .replaceAll(/[^a-zA-Z0-9 ]/g, "")
    .replace(/ +(?= )/g, "")
    .replaceAll(" ", "-");
};
