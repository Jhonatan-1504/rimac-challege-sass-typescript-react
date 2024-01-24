import type { HTMLAttributes } from "react";

type PropsTag = {
  text: string;
} & HTMLAttributes<HTMLSpanElement>

export default function Tag({text, ...propsTag}:PropsTag){
  return (
    <div className="tag">
      <span {...propsTag}>{text}</span>
    </div>
  )
}