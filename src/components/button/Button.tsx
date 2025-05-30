import type { MouseEventHandler } from "react";


const Button = ({ buttonName,type,className,id ,onClick}: { buttonName: string ,type?:"submit" | "reset" | "button",className:string,id:string,onClick?:MouseEventHandler<HTMLButtonElement>}) => {
  return <button type={type} className={className}  id={id} onClick={onClick}>{buttonName}</button>;
};{}

export default Button;
