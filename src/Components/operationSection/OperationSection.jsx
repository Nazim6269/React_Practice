import PropTypes from "prop-types";
import React from "react";
import { generateId } from "../../utils/generateId";
import CustomButton from "../ui/CustomButton";

const getId = generateId();

const OperationSection = ({ handleClearOps, handleClick, style }) => {
  const operations = [
    {
      id: getId.next().value,
      text: "+",
      onClick: () => handleClick("+"),
    },
    {
      id: getId.next().value,
      text: "-",
      onClick: () => handleClick("-"),
    },
    {
      id: getId.next().value,
      text: "*",
      onClick: () => handleClick("*"),
    },
    {
      id: getId.next().value,
      text: "**",
      onClick: () => handleClick("**"),
    },
    {
      id: getId.next().value,
      text: "/",
      onClick: () => handleClick("/"),
    },
    {
      id: getId.next().value,
      text: "%",
      onClick: () => handleClick("%"),
    },
    {
      id: getId.next().value,
      text: "clear",
      onClick: handleClearOps,
    },
  ];
  return (
    <div>
      <h3>Choose operation</h3>
      <div className={style.btnGroup}>
        {operations.map((item) => (
          <CustomButton
            key={item.id}
            text={item.text}
            style={style}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
};

OperationSection.propTypes = {
  handleClearOps: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

OperationSection.defaultProps = {
  style: {},
};

export default OperationSection;
