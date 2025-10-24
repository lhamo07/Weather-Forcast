import React from "react";
import style from "./TextInputWithLabel.module.css";
const TextInputWithLabel = ({ value, onChange }) => {
  return (
    <div>
      <input
        className={style.inputSearch}
        type="text"
        placeholder="Search city"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInputWithLabel;
