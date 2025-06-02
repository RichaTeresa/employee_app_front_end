import "./select.css";

export const Select = ({
  selectId,
  selectName,
  items,
  value,
  onChange
}: {
  selectId: string;
  selectName: string;
  items:{ label: string; value: string | number }[]
  value?: number|string;
  onChange?:(event:React.ChangeEvent<HTMLSelectElement>)=>void;
}) => {
  return (
    <>
      <div className="form-element">
        <label htmlFor={selectId}>{selectName}</label>
        <select name={selectName} id={selectId} value={value} onChange={onChange}>
          <option value="" selected disabled>
            choose {selectId}
          </option>
          {items.map((item) => {
            return <option value={item.value}>{item.label}</option>;
          })}
        </select>
      </div>
    </>
  );
};
