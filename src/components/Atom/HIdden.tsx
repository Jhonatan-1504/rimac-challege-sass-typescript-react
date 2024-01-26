import { type ReactNode, useMemo } from "react";

type OptionDisplay = "normal" | "flex";

type PropsHidden = {
  children: ReactNode;
  display?: OptionDisplay;
  query?: "max" | "min";
  media?: "md" | "xl";
};

export default function Hidden({ children, display = "normal", query = "max", media = "md" }: PropsHidden) {

  const className = useMemo(() => {
    let classes = "hidden";
    
    if (display !== "normal") {
      classes += " hidden--" + display;
    }

    if(query && media){
      classes += " media-query__" + query + "__" + media
    }
  
    return classes;
  }, [display, query, media]);

  return <div className={className}>{children}</div>;
}
