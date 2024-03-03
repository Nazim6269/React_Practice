import PropTypes from "prop-types";
import React from "react";

const CustomButton = ({ text, style, onClick }) => {
  return (
    <button className={style.btn} onClick={onClick}>
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

CustomButton.defaultProps = {
  style: {},
};

export default CustomButton;
