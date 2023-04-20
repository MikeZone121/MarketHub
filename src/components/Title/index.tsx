import { createElement } from "react";
import { TitleProps } from "./types";
import clsx from "clsx";

function Title({ text, size = "h2", classNames }: TitleProps) {
  const titleClassName = clsx(
    size === "h1" &&
      "tw-mb-2 tw-mt-0 tw-text-5xl tw-font-medium -twleading-tight tw-text-primary",
    size === "h2" &&
      "tw-mb-2 tw-mt-0 tw-text-4xl tw-font-medium tw-leading-tight tw-text-primary",
    size === "h3" &&
      "tw-mb-2 tw-mt-0 tw-text-3xl tw-font-medium tw-leading-tight tw-text-primary",
    size === "h4" &&
      "tw-mb-2 tw-mt-0 tw-text-2xl tw-font-medium tw-leading-tight tw-text-primary",
    size === "h5" &&
      "tw-mb-2 tw-mt-0 tw-text-xl tw-font-medium tw-leading-tight tw-text-primary"
  );
  return createElement(
    size,
    { className: clsx(titleClassName, classNames) },
    text
  );
}

export default Title;
