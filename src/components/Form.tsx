import React, { useState } from "react";
import { generatePassword } from "../helpers/helpers";
import { useCopy } from "../hooks";
import { PasswordRules } from "../types/commons.type";
import { Button, Checkbox, Input } from "./";
import { MdContentCopy } from "react-icons/md";

const Form = (): JSX.Element => {
  const [password, setPassword] = useState<PasswordRules>({
    length: 10,
    uppercase: true,
    numbers: true,
    symbols: true,
  });
  const [passwordLength, setPasswordLength] = useState(
    password.length.toString()
  );
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isCopied, copyValue] = useCopy();

  const handleCheckboxChange = (
    property: "uppercase" | "numbers" | "symbols"
  ): void => {
    if (property in password) {
      setPassword({
        ...password,
        [property]: !password[property],
      });
    }
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || parseInt(value) <= 20) {
      setPasswordLength(value);
      setPassword({
        ...password,
        length: parseInt(value),
      });
    }
  };

  const handleGeneratePassword = () => {
    setGeneratedPassword(
      generatePassword(
        password.length,
        password.uppercase,
        password.numbers,
        password.symbols
      )
    );
  };

  return (
    <div className="form">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ margin: "1em" }}>{generatedPassword}</span>
        {generatedPassword.length > 0 ? (
          <div className="popover">
            <Button onClick={() => copyValue(generatedPassword)}>
              <MdContentCopy />
            </Button>
            {isCopied ? (
              <span className="popover__message success">Copied&nbsp;!</span>
            ) : null}
          </div>
        ) : null}
      </div>

      <Input
        label="Password length (20 max)"
        type="number"
        max={20}
        value={passwordLength}
        onChange={handleLengthChange}
      />

      <Checkbox
        label="Include uppercase letters"
        checked={password.uppercase}
        onChange={() => handleCheckboxChange("uppercase")}
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
