import "./input.css";

const Input = ({
  inputId,
  inputType,
  labelName,
  placeholder,
  value,
  onChange,
  disabled,
  noPassword
}: {
  inputId: string;
  inputType: string;
  labelName?: string;
  placeholder: string;
  value?: string|number;
  onChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void;
  disabled?:boolean
  noPassword?:boolean
}) => {
  if(noPassword){
    return 
  }
  return (
    <div className="form-element">
      <label htmlFor={inputId}>{labelName}</label>
      <input
        type={inputType}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      ></input>
    </div>
  );
};

export default Input;
