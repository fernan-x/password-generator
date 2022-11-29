import React, { useRef, useState } from "react";
import { generatePassword } from "../helpers/helpers";
import { PasswordRules } from "../types/commons.type";
import { Button, Checkbox } from "./";

const Form = (): JSX.Element => {
  const [password, setPassword] = useState<PasswordRules>({
    length: 10,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [passwordLength, setPasswordLength] = useState(
    password.length.toString()
  );
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [copy, setCopy] = useState(false);
  const ref = useRef(null);

  const handleCheckboxChange = (
    property: "uppercase" | "lowercase" | "numbers" | "symbols"
  ): void => {
    if (property in password) {
      setPassword({
        ...password,
        [property]: !password[property],
      });
    }
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(e.target.value);
    setPassword({
      ...password,
      length: parseInt(e.target.value),
    });
  };

  const handleGeneratePassword = () => {
    setGeneratedPassword(
      generatePassword(
        password.length,
        password.uppercase,
        password.lowercase,
        password.numbers,
        password.symbols
      )
    );
  };

  const copyPassword = () => {
    if (generatedPassword.length > 0) {
      navigator.clipboard.writeText(generatedPassword);
      setCopy(true);
      setInterval(() => {
        setCopy(false);
      }, 2000);
    }
  };

  return (
    <div className="form">
      <div>
        <span ref={ref}>{generatedPassword}</span>
        <Button onClick={copyPassword}>
          {copy ? "Copied !" : "Copy text"}
        </Button>
      </div>
      <div>
        <label htmlFor="input-number">Password length</label>
        <input
          type="number"
          value={passwordLength}
          onChange={handleLengthChange}
        />
      </div>
      <Checkbox
        label="Include uppercase letters"
        checked={password.uppercase}
        onChange={() => handleCheckboxChange("uppercase")}
      />
      <Checkbox
        label="Include lowercase letters"
        checked={password.lowercase}
        onChange={() => handleCheckboxChange("lowercase")}
      />
      <Checkbox
        label="Include numbers"
        checked={password.numbers}
        onChange={() => handleCheckboxChange("numbers")}
      />
      <Checkbox
        label="Include symbols"
        checked={password.symbols}
        onChange={() => handleCheckboxChange("symbols")}
      />
      <Button onClick={handleGeneratePassword}>Generate password</Button>
    </div>
  );
};

export default Form;
