import { ButtonHTMLAttributes, JSX } from "react";

type ButtonProps = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};
