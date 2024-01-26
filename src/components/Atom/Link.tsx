import { CSSProperties, useMemo } from "react";

type PropsLink = {
  text: string;
  size?:number;
}

export default function Link({text,size=16}:PropsLink){

  const style: CSSProperties = useMemo(() => {
    return {
      "--link-size": `${size}px`,
    } as CSSProperties;
  }, [size]);

  return <div> <a style={style} className="link" href="#">{text}</a> </div>
}