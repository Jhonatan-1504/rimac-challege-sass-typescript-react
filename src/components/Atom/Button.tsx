import { useMemo, type ButtonHTMLAttributes, type CSSProperties } from "react";

type PropsButton = {
  text: string;
  bg?:string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  text,
  className,
  bg = "#03050F",
  ...propsButton
}: PropsButton) {

  const styles = useMemo(() => {
    return {
      "--button-bg": bg,
    } as CSSProperties;
  }, [bg])

  return (
    <button type="button" style={styles} className={"button " + className} {...propsButton}>
      {text}
    </button>
  );
}
