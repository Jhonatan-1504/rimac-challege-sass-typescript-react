import type {  SelectHTMLAttributes } from "react"

type PropsInnerSelectByInput = SelectHTMLAttributes<HTMLSelectElement>;

export default function InnerSelectByInput(props: PropsInnerSelectByInput){
  return (
    <select className="inner__select" {...props}>
      <option value="DNI">DNI</option>
    </select>
  )
}