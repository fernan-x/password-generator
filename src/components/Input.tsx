import React from "react";
import { sanitizeToId } from "../helpers/helpers";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = (props: InputProps): JSX.Element => {
  const { label, ...restProps } = props;
  const id = sanitizeToId(label);

  return (
    <div className="input">
      <label className="input__label" htmlFor={`input-${id}`}>
        {label}
      </label>
      <input id={`input-${id}`} className="input__input" {...restProps} />
    </div>
  );
};

export default Input;
