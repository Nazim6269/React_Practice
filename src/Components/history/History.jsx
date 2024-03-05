import PropTypes from "prop-types";
import React, { useState } from "react";
import appStyle from "../../app3.module.css";
import CustomButton from "../ui/CustomButton";

const History = ({ item, style, handleHistory }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <ul>
        <li>
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <p>
              Operation: {item.inputs.a} {item.operator} {item.inputs.b},
              Result:
              {item.res}
            </p>
            <CustomButton
              text={show ? "Hide" : "Show"}
              onClick={handleToggle}
              style={appStyle}
            />
          </div>
          {show && (
            <div>
              <span>
                {item.createdAt.toLocaleDateString()}
                {"::"}
                {item.createdAt.toLocaleTimeString()}
              </span>
              <br />

              <button className={style.btn} onClick={() => handleHistory(item)}>
                Reset
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

// Define PropTypes for History component
History.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }).isRequired,
    res: PropTypes.number.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    operator: PropTypes.string.isRequired,
  }).isRequired,
};

History.defaultProps = {
  style: {},
};

export default History;
