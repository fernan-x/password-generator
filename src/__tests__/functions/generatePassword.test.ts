import { test } from "@jest/globals";
import {
  generatePassword,
  UPPERCASE_ARRAY,
  LOWERCASE_ARRAY,
  SYMBOLS_ARRAY,
  NUMBERS_ARRAY,
} from "../../helpers/helpers";

test("Test default arguments", () => {
  const generatedPassword = generatePassword();
  expect(generatedPassword.length).toBe(5);
  expect(
    generatedPassword.split("").some((r) => LOWERCASE_ARRAY.indexOf(r) >= 0)
  ).toBeTruthy();
});

test("Test lowercase password generation", () => {
  const passwordLength = 15;
  const generatedPassword = generatePassword(passwordLength);
  expect(generatedPassword.length).toBe(passwordLength);
  expect(
    generatedPassword.split("").some((r) => LOWERCASE_ARRAY.indexOf(r) >= 0)
  ).toBeTruthy();
  expect(
    generatedPassword.split("").some((r) => UPPERCASE_ARRAY.indexOf(r) >= 0)
  ).toBeFalsy();
  expect(
    generatedPassword.split("").some((r) => SYMBOLS_ARRAY.indexOf(r) >= 0)
  ).toBeFalsy();
  expect(
    generatedPassword
      .split("")
      .some((r) => NUMBERS_ARRAY.indexOf(parseInt(r)) >= 0)
  ).toBeFalsy();
});

test("Test uppercase password generation", () => {
  const passwordLength = 15;
  const generatedPassword = generatePassword(passwordLength, true);
  expect(generatedPassword.length).toBe(passwordLength);
  expect(
    generatedPassword.split("").some((r) => SYMBOLS_ARRAY.indexOf(r) >= 0)
  ).toBeFalsy();
  expect(
    generatedPassword
      .split("")
      .some((r) => NUMBERS_ARRAY.indexOf(parseInt(r)) >= 0)
  ).toBeFalsy();
});

test("Test numbers password generation", () => {
  const passwordLength = 15;
  const generatedPassword = generatePassword(passwordLength, false, true);
  expect(generatedPassword.length).toBe(passwordLength);
  expect(
    generatedPassword.split("").some((r) => UPPERCASE_ARRAY.indexOf(r) >= 0)
  ).toBeFalsy();
  expect(
    generatedPassword.split("").some((r) => SYMBOLS_ARRAY.indexOf(r) >= 0)
  ).toBeFalsy();
});

test("Test symbols password generation", () => {
  const passwordLength = 15;
  const generatedPassword = generatePassword(
    passwordLength,
    false,
    false,
    true
  );
  expect(generatedPassword.length).toBe(passwordLength);
  expect(
    generatedPassword.split("").some((r) => UPPERCASE_ARRAY.indexOf(r) >= 0)
  ).toBeFalsy();
  expect(
    generatedPassword
      .split("")
      .some((r) => NUMBERS_ARRAY.indexOf(parseInt(r)) >= 0)
  ).toBeFalsy();
});
