import { InputFieldProps, InputFieldTypesEnum } from "./types";
import { clsx } from "clsx";

function InputField({
  label,
  id,
  placeholder,
  value,
  name,
  className,
  onChange,
  type = InputFieldTypesEnum.TEXT,
}: InputFieldProps) {
  const typeClassName = clsx(
    type === InputFieldTypesEnum.TEXT && "",
    type === InputFieldTypesEnum.PASSWORD && "",
    type === InputFieldTypesEnum.EMAIL && "",
    type === InputFieldTypesEnum.NUMBER && "",
    type === InputFieldTypesEnum.DATE && "",
    type === InputFieldTypesEnum.TIME && "",
    type === InputFieldTypesEnum.DATE_TIME && ""
  );
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        className={clsx("", typeClassName, className)}
        placeholder={placeholder}
        onChange={onChange}
      />
      <label className="" htmlFor={id}>
        {label}
      </label>
    </>
  );
}

export default InputField;
