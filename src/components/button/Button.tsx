import type { MouseEventHandler } from "react";

const Button = ({
  buttonName,
  type,
  className,
  id,
  onClick,
  disabled,
}: {
  buttonName: string;
  type?: "submit" | "reset" | "button";
  className: string;
  id: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      className={className}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
};

export default Button;
