import { useState } from "react";
import TogglePassword from "./TogglePassword";
import { InputFieldProps, InputFieldTypesEnum } from "./types";
import { clsx } from "clsx";

function InputField(props: InputFieldProps) {
  const { id, name, label, className, placeholder, value, onChange } = props;
  const [type, setType] = useState(props.type || InputFieldTypesEnum.TEXT);
  const togglePassword = () => {
    setType(
      type === InputFieldTypesEnum.PASSWORD
        ? InputFieldTypesEnum.TEXT
        : InputFieldTypesEnum.PASSWORD
    );
  };

  const [isFocused, setIsFocused] = useState(false);

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
    <div className="tw-relative tw-inline-block">
      <label className="" htmlFor={id}>
        {props.type === InputFieldTypesEnum.PASSWORD && (
          <TogglePassword onClick={() => togglePassword()} type={type} />
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          className={clsx(
            "tw-border-b tw-border-grey-800 tw-p-2 focus-within:!tw-outline-gray-300 focus-within:tw-outline-0 tw-pr-8",
            typeClassName,
            className
          )}
          onChange={onChange}
        />
        <span
          className={clsx(
            isFocused || value
              ? "tw-absolute tw-left-2 tw--top-4 tw-bg-white"
              : "tw-absolute tw-left-2 tw-top-2",
            "tw-duration-100 tw-transition-all tw-ease-in-out"
          )}
        >
          {label}
        </span>
      </label>
    </div>
  );
}

export default InputField;
