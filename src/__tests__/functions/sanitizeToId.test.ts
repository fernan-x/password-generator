import { test } from "@jest/globals";
import { sanitizeToId } from "../../helpers/helpers";

test("Basic string", () => {
  const input = "SimpleTest";
  const expectedOutput = "simpletest";
  expect(sanitizeToId(input)).toBe(expectedOutput);
});

test("String with spaces", () => {
  const input = "Simple Test";
  const expectedOutput = "simple-test";
  expect(sanitizeToId(input)).toBe(expectedOutput);
});

test("String with spaces and special char", () => {
  const input = "Simple & Test | otHer";
  const expectedOutput = "simple-test-other";
  expect(sanitizeToId(input)).toBe(expectedOutput);
});

test("String with digit", () => {
  const input = "1Simple 20 Test | otHer";
  const expectedOutput = "1simple-20-test-other";
  expect(sanitizeToId(input)).toBe(expectedOutput);
});
