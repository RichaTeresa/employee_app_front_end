import Input from "../input/input";
import "./multiLineInput.css";

export const MultiLineInput = ({
  inputId,
  labelName,
  lines
}: {
  inputId: string;
  labelName: string;
  lines: { id: string; placeholder: string ;value:string ;onChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void;}[];

  
}) => {
  return (
    <>
      <label htmlFor={inputId}>{labelName}</label>
      <div className="Multi-line-input-form-element">
        {lines.map((line) => {
          return (
            <Input
              inputType="text"
              inputId={line.id}
              placeholder={line.placeholder}
              value={line.value}
              onChange={line.onChange}
            ></Input>
          );
        })}
      </div>
    </>
  );
};
