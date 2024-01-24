import { generateRandomId } from "@/helpers/create-ids";
import { InputHTMLAttributes } from "react";

type PropsCheckbox = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ label, ...inputProps }: PropsCheckbox) => {
  const ramdom_id = generateRandomId()

  return (
    <div className="checkbox-wrapper-4">
      <input className="inp-cbx" type="checkbox" id={ramdom_id} {...inputProps} />
      <label className="cbx" htmlFor={ramdom_id}>
        <div>
          <span>
            <svg width="12px" height="10px"><use xlinkHref="#check-4"></use></svg>
          </span>
        </div>
        <span>{label}</span>
      </label>
      
      <svg className="inline-svg"><symbol id="check-4" viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></symbol></svg>
    </div>
  );
};

export default Checkbox;
