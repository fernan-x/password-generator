import React from "react";
import { sanitizeToId } from "../helpers/helpers";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { checked, onChange, label, ...restProps } = props;
  const id = sanitizeToId(label);
  return (
    <div className="checkbox">
      <label className="checkbox__label" htmlFor={`input-${id}`}>
        {label}
      </label>
      <input
        className="checkbox__input"
        id={`input-${id}`}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...restProps}
      />
    </div>
  );
};

export default Checkbox;
