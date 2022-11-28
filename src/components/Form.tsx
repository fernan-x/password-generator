import React, { useState } from "react";
import { PasswordRules } from "../types/commons.type";
import { Button, Checkbox } from "./";

const Form = (): JSX.Element => {
  const [password, setPassword] = useState<PasswordRules>({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [passwordLength, setPasswordLength] = useState(
    password.length.toString()
  );

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

  const generatePassword = () => {
    // TODO : Implement password generation algorithm
  };

  return (
    <div className="form">
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
      <Button onClick={generatePassword}>Generate password</Button>
    </div>
  );
};

export default Form;
