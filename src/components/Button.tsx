import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps): JSX.Element => {
  const { children, ...restProps } = props;
  return (
    <button className="button" {...restProps}>
      {children}
    </button>
  );
};

export default Button;
