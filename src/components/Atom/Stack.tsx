import { useMemo, type ReactNode, type CSSProperties } from "react";

type StyleStack = {
  "--stack-gap": string;
  "--stack-direction": string;
  "--stack-justify": string;
  "--stack-align": string;
  width?: string;
  margin?: string;
};

type PropsStack = {
  children: ReactNode;
  gap?: number;
  direction?: "vertical" | "horizontal";
  justify?:
    | "left"
    | "start"
    | "end"
    | "rigth"
    | "center"
    | "space-between"
    | "space-around";
  align?: "left" | "rigth" | "center" | "start" | "end";
  className?: string;
  width?: number;
  margin?: string;
};

export default function Stack({
  children,
  direction = "horizontal",
  justify = "left",
  align = "left",
  gap = 0,
  className = "",
  width,
  margin,
}: PropsStack) {
  const style: CSSProperties = useMemo(() => {
    const props: StyleStack = {
      "--stack-gap": `${gap}px`,
      "--stack-direction": direction === "horizontal" ? "row" : "column",
      "--stack-justify": justify,
      "--stack-align": align,
    };

    if(width){
      props.width = `${width}px`
    }

    if(margin){
      props.margin = margin
    }

    return props as CSSProperties;
  }, [gap, direction, justify, align, width, margin]);

  return (
    <div className={"stack " + className} style={style}>
      {children}
    </div>
  );
}
