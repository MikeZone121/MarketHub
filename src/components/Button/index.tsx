export interface ButtonProps {
  text?: string;
  onClick: Function;
  hasIcon?: boolean;
  iconPosition?: "left" | "right";
  classNames?: "string";
}

function Button({
  hasIcon,
  iconPosition = "left",
  onClick,
  text,
}: ButtonProps) {
  return (
    <button onClick={() => onClick()} className="tw-bg-primary">
      {iconPosition === "left" && hasIcon && <span>icon</span>}
      {text}
      {iconPosition === "right" && hasIcon && <span> icon</span>}
    </button>
  );
}

export default Button;
