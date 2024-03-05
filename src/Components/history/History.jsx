import PropTypes from "prop-types";
import React from "react";

const History = ({ item, style, handleHistory }) => {
  return (
    <div>
      <ul key={item.id}>
        <li>
          <p>
            Operation: {item.inputs.a} {item.operator} {item.inputs.b}, Result:
            {item.res}
          </p>
          <span>
            {item.createdAt.toLocaleDateString()}
            {"::"}
            {item.createdAt.toLocaleTimeString()}
          </span>
          <br />

          <button className={style.btn} onClick={() => handleHistory(item)}>
            Reset
          </button>
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
