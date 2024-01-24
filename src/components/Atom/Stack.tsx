import { useMemo, type ReactNode, CSSProperties } from "react";

type PropsStack = {
  children: ReactNode;
  gap?: number;
  direction?: "vertical" | "horizontal";
  className?: string
};

export default function Stack({
  children,
  direction = "horizontal",
  gap = 0,
  className = ""
}: PropsStack) {

  const style: CSSProperties = useMemo(() => {
    return {
      "--stack-gap": `${gap}px`,
      "--stack-direction": direction === "horizontal" ? "row" : "column",
    } as CSSProperties;
  }, [gap, direction]);

  return (
    <div className={'stack '+className} style={style}>
      {children}
    </div>
  );
}
