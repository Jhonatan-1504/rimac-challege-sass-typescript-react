import React, { ReactNode, InputHTMLAttributes  } from "react";

type InputProps = {
  label?: string;
  prepend?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement> ;

const Input: React.FC<InputProps> = ({ label, prepend, ...inputProps }) => {
  return (
    <div className="input-container">
      {prepend && <div className="prepend"> {prepend}</div>}

      <div className="control">
        {label && <div className="label">{label}</div>}
        <input type="text" {...inputProps} />
      </div>
    </div>
  );
};

export default Input;
