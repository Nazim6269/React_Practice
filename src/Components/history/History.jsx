import PropTypes from "prop-types";
import React from "react";

const History = ({ item, style, handleHistory }) => {
  return (
    <div>
      <h2>History</h2>
      return (
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
      );
    </div>
  );
};

History.propTypes = {
  item: PropTypes.arrayOf({
    id: PropTypes.number,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }),
    res: PropTypes.number.isRequired,
    createdAt: PropTypes.object.isRequired,
    operator: PropTypes.number.isRequired,
  }),
};

History.defaultProps = {
  style: {},
};

export default History;
