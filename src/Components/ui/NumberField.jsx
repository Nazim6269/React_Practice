import PropTypes from "prop-types";
import React from "react";

const NumberField = ({ name, onChange, value }) => {
  return <input type="text" name={name} onChange={onChange} value={value} />;
};

NumberField.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberField;
