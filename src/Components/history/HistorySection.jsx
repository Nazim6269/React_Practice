import React from "react";
import History from "./History";
import historyStyle from "./historySection.module.css";

const HistorySection = ({ histories, style, handleHistory }) => {
  return (
    <div className={historyStyle.historySection}>
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
