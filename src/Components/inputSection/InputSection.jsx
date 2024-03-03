import PropTypes from "prop-types";
import React from "react";
import NumberField from "../ui/NumberField";

const InputSection = ({ inputState, handleInputChange }) => {
  return (
    <div>
      <h3>Enter inputs: </h3>
      <NumberField
        type="number"
        name="a"
        value={inputState.a}
        onChange={handleInputChange}
      />

      <NumberField
        type="number"
        name="b"
        value={inputState.b}
        onChange={handleInputChange}
      />
    </div>
  );
};

InputSection.propTypes = {
  inputState: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default InputSection;
