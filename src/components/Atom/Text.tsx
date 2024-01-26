import { useMemo, type ReactNode, CSSProperties } from "react";

type TextStyles = {
  "--text-size": string;
  "--text-weight": string;
  "--text-line": string;
  color?: string;
  align?:string;
};

type PropsText = {
  children: ReactNode;
  size?: number;
  weight?: number;
  line?: number;
  className?: string;
  color?: string;
  align?:"left"|"center"|"right";
};

export default function Text({
  children,
  size = 16,
  weight = 400,
  line = 24,
  className = "",
  color = "",
  align = "left"
}: PropsText) {
  const style: CSSProperties = useMemo(() => {
    const props: TextStyles = {
      "--text-size": `${size}px`,
      "--text-weight": `${weight}`,
      "--text-line": `${line}px`,
    };

    if (color) {
      props.color = color;
    }

    if(align){
      props.align = align
    }

    return props as CSSProperties;
  }, [size, weight, line, color,align]);

  return (
    <div style={style} className={"text " + className}>
      {children}
    </div>
  );
}
