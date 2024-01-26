import { CSSProperties, ChangeEvent, useMemo } from 'react';
import { generateRandomId } from "@/helpers/create-ids";
import { InputHTMLAttributes } from "react";

type PropsCheckbox = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ label, checked, onChange, ...inputProps }: PropsCheckbox) => {
  const randomId = generateRandomId();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;    

    if (onChange) {
      onChange(newChecked);
    }
  };

  const styles = useMemo(()=> {
    return {
      color: !checked ? "#F7052D": "#0A051E"
    } as CSSProperties
  } ,[checked])

  return (
    <div className="checkbox-wrapper-4">
      <input
        className="inp-cbx"
        type="checkbox"
        id={randomId}
        checked={checked}
        onChange={handleCheckboxChange}
        {...inputProps}
      />
      <label className="cbx" htmlFor={randomId}>
        <div>
          <span>
            <svg width="12px" height="10px"><use xlinkHref="#check-4"></use></svg>
          </span>
        </div>
        <span style={styles}>{label}</span>
      </label>
      
      <svg className="inline-svg"><symbol id="check-4" viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></symbol></svg>
    </div>
  );
};

export default Checkbox;
