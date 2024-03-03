import React from "react";
import History from "./History";

const HistorySection = ({ histories, style, handleHistory }) => {
  return (
    <div>
      <h2>History</h2>
      {histories.length === 0 ? (
        <p>There is no history</p>
      ) : (
        histories.map((item) => (
          <History
            key={item.id}
            item={item}
            style={style}
            handleHistory={handleHistory}
          />
        ))
      )}
    </div>
  );
};

export default HistorySection;
