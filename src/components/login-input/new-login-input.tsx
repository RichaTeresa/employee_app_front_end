interface LoginInputProps {
  id: string;
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement | null>;
  name:string
  endAdornment?: React.ReactNode;
}

const NewLoginInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  endAdornment = null,
  ref,
  name,
}: LoginInputProps) => {
  return (
    <div className="form-input">
      <input
        type={type}
        value={value}
        ref={ref}
        onChange={onChange}
        id={id}
        name={name}
        placeholder=" "
        required
      />
      <label htmlFor={id}>{label}</label>
      {endAdornment ? endAdornment : null}
    </div>
  );
};

export default NewLoginInput;