import PropTypes from "prop-types";
import React from "react";
import numberFeildStyle from "./numberField.module.css";

const NumberField = ({ name, onChange, value }) => {
  return (
    <input
      type="text"
      className={numberFeildStyle.numberField}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

NumberField.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberField;
