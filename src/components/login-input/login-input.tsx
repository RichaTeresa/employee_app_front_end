import type React from "react";
import "./login-input.css";

interface LoginInputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement | null>;
  checked?: boolean;
  endAdornment?: React.ReactNode;
}

const LoginInput = ({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  ref,
  checked,
  endAdornment,
}: LoginInputProps) => {
  return (
    <>
      <div className="form-input-two">       
        <div className="add-adornment">
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
            ref={ref}
            defaultChecked={checked}
          ></input>
          <label htmlFor={id}>{label}</label>
          {endAdornment ? endAdornment : null}
          
        </div>
      </div>
    </>
  );
};
export default LoginInput;
