import { type ReactNode, useMemo } from "react";

type OptionDisplay = "normal" | "flex";

type PropsHidden = {
  children: ReactNode;
  display?: OptionDisplay;
  query?: "max" | "min"
};

export default function Hidden({ children, display = "normal", query = "max" }: PropsHidden) {

  const className = useMemo(() => {
    let classes = "hidden";
    
    if (display !== "normal") {
      classes += " hidden--" + display;
    }

    if(query){
      classes += " media-query__" + query
    }
  
    return classes;
  }, [display, query]);

  return <div className={className}>{children}</div>;
}
