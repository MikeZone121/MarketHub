import { TextProps, TextVariantEnum } from "../Text/types";
import { clsx } from "clsx";

function Text({
  text,
  variant = TextVariantEnum.NORMAL,
  classNames,
}: TextProps) {
  const textClassName = clsx(
    variant === TextVariantEnum.SMALL &&
      "tw-mb-4 tw-mt-0 tw-font-normal tw-leading-normal tw-text-black",
    variant === TextVariantEnum.NORMAL &&
      "tw-mb-0 tw-mt-0 tw-text-base tw-leading-relaxed tw-text-black",
    variant === TextVariantEnum.QUOTE &&
      "tw-mb-0 tw-mt-0 tw-text-base tw-font-light tw-leading-relaxed tw-text-gray-600",
    variant === TextVariantEnum.LEAD &&
      "tw-mb-4 tw-mt-6 tw-text-xl tw-font-light tw-leading-relaxed tw-text-black"
  );
  return <p className={clsx(textClassName, classNames)}>{text}</p>;
}

export default Text;