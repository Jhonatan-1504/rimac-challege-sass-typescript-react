import { ReactNode, useMemo } from "react";
import Stack from "./Stack";

type PropsCard = {
  children: ReactNode;
  with_border?: boolean;
  className?:string;
};

export default function Card({ children, className = "", with_border = false }: PropsCard) {
  const classNames = useMemo(() => {
    let class_name = "card";

    if (with_border) {
      class_name += " with__border";
    }

    if(className){
      class_name += " " + className
    }

    return class_name;
  }, [with_border,className]);

  return <Stack direction="vertical" className={classNames}>{children}</Stack>;
}
