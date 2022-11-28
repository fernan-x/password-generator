import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { checked, onChange, label, ...restProps } = props;
  return (
    <div className="checkbox">
      <label className="checkbox__label" htmlFor={`input-${label}`}>
        {label}
      </label>
      <input
        className="checkbox__input"
        id={`input-${label}`}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...restProps}
      />
    </div>
  );
};

export default Checkbox;
