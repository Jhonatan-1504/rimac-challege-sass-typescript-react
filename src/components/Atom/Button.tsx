import type { ButtonHTMLAttributes } from "react";

type PropsButton = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  text,
  className,
  ...propsButton
}: PropsButton) {
  return (
    <button type="button" className={"button " + className} {...propsButton}>
      {text}
    </button>
  );
}
