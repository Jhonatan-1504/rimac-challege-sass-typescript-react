import { useMemo, type ReactNode, CSSProperties } from "react";

type PropsText = {
  children: ReactNode;
  // is?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  size?: number;
  weight?: number;
  line?: number;
  className?: string;
};

export default function Text({
  children,
  size = 16, weight = 400, line = 24,
  className = "",
}: PropsText) {
  
  const style: CSSProperties = useMemo(() => {
    return {
      "--text-size": `${size}px`,
      "--text-weight": `${weight}`,
      "--text-line": `${line}px`,
    } as CSSProperties;
  }, [size, weight, line]);

  return (
    <div style={style} className={"text " + className}>
      {children}
    </div>
  );
}
